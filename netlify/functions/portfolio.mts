import type { Config, Context } from "@netlify/functions";
import { getDatabase } from "@netlify/database";

const db = getDatabase();

export default async (req: Request, _context: Context) => {
  if (req.method === "GET") {
    const rows = await db.sql<{ key: string; payload: unknown; updated_at: string }>`
      SELECT key, payload, updated_at
      FROM portfolio_store
      WHERE key = ${"main"}
      LIMIT 1
    `;

    const recentMessages = await db.sql<{ count: string }>`
      SELECT COUNT(*)::text AS count FROM contact_messages
    `;

    return Response.json({
      source: "netlify-database",
      portfolio: rows[0]?.payload ?? null,
      updatedAt: rows[0]?.updated_at ?? null,
      totalMessages: Number(recentMessages[0]?.count ?? 0)
    });
  }

  if (req.method === "PUT" || req.method === "POST") {
    const body = await req.json();
    if (!body || typeof body !== "object") {
      return Response.json({ error: "Payload data portofolio tidak valid." }, { status: 400 });
    }

    const serialized = JSON.stringify(body);
    await db.sql`
      INSERT INTO portfolio_store (key, payload, updated_at)
      VALUES (${"main"}, ${serialized}::jsonb, NOW())
      ON CONFLICT (key)
      DO UPDATE SET payload = EXCLUDED.payload, updated_at = NOW()
    `;

    return Response.json({ ok: true, message: "Data portofolio berhasil disimpan ke Netlify Database." });
  }

  return new Response("Method Not Allowed", { status: 405 });
};

export const config: Config = {
  path: "/api/portfolio"
};

