import type { Config, Context } from "@netlify/functions";
import { getDatabase } from "@netlify/database";

const db = getDatabase();

interface ContactPayload {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default async (req: Request, _context: Context) => {
  if (req.method === "GET") {
    const messages = await db.sql<{
      id: number;
      name: string;
      email: string;
      subject: string;
      message: string;
      created_at: string;
    }>`
      SELECT id, name, email, subject, message, created_at
      FROM contact_messages
      ORDER BY created_at DESC
      LIMIT 25
    `;

    return Response.json({ messages });
  }

  if (req.method === "POST") {
    const body = (await req.json()) as ContactPayload;
    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const subject = (body.subject || "").trim();
    const message = (body.message || "").trim();

    if (name.length < 2 || !email.includes("@") || subject.length < 2 || message.length < 10) {
      return Response.json(
        { error: "Mohon lengkapi nama, email valid, subjek, dan pesan (minimal 10 karakter)." },
        { status: 400 }
      );
    }

    const inserted = await db.sql<{ id: number; created_at: string }>`
      INSERT INTO contact_messages (name, email, subject, message)
      VALUES (${name}, ${email}, ${subject}, ${message})
      RETURNING id, created_at
    `;

    return Response.json(
      {
        ok: true,
        id: inserted[0]?.id,
        createdAt: inserted[0]?.created_at
      },
      { status: 201 }
    );
  }

  return new Response("Method Not Allowed", { status: 405 });
};

export const config: Config = {
  path: "/api/contact"
};

