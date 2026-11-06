import os
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle

W, H = A4  # 595.27 x 841.89 pt

NAVY = colors.HexColor("#064687")
YELLOW = colors.HexColor("#FFC700")
DARK_TEXT = colors.HexColor("#1E293B")
BODY_TEXT = colors.HexColor("#334155")
MUTED_TEXT = colors.HexColor("#475569")
LIGHT_BG = colors.HexColor("#F1F5F9")
CARD_BG = colors.HexColor("#F8FAFC")
BORDER_GRAY = colors.HexColor("#CBD5E1")
WHITE = colors.HexColor("#FFFFFF")


def draw_wrapped_text(c, text, x, y, max_width, style):
    """Render ReportLab Paragraph and return new y below the paragraph."""
    p = Paragraph(text, style)
    _, h = p.wrap(max_width, 500)
    p.drawOn(c, x, y - h)
    return y - h


def draw_section_header_left(c, title, x, y):
    c.setFillColor(YELLOW)
    c.rect(x, y - 13, 6, 17, stroke=0, fill=1)
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 11.5)
    c.drawString(x + 11, y - 10, title.upper())
    return y - 22


def draw_section_header_right(c, title, x, y):
    c.setFillColor(YELLOW)
    c.rect(x, y - 14, 7, 19, stroke=0, fill=1)
    c.setFillColor(DARK_TEXT)
    c.setFont("Helvetica-Bold", 12)
    c.drawString(x + 13, y - 10.5, title.upper())
    return y - 23


def build_cv(output_path, lang="en", photo_path="assets/profile-soft.jpg"):
    c = canvas.Canvas(output_path, pagesize=A4)
    c.setTitle("ADE ALRIZAL, S.T. - Curriculum Vitae")

    sidebar_w = 205
    right_x = sidebar_w + 22
    right_w = W - right_x - 24

    # 1. BACKGROUND & GEOMETRIC SHAPES (Sesuai Desain PDF Asli)
    c.setFillColor(WHITE)
    c.rect(0, 0, W, H, stroke=0, fill=1)

    # Sidebar Navy bawah
    p_navy = c.beginPath()
    p_navy.moveTo(0, 0)
    p_navy.lineTo(sidebar_w, 0)
    p_navy.lineTo(sidebar_w, H - 155)
    p_navy.lineTo(0, H - 245)
    p_navy.close()
    c.setFillColor(NAVY)
    c.drawPath(p_navy, stroke=0, fill=1)

    # Pita Kuning diagonal tengah kiri
    p_yellow = c.beginPath()
    p_yellow.moveTo(0, H - 245)
    p_yellow.lineTo(145, H - 180)
    p_yellow.lineTo(145, H - 210)
    p_yellow.lineTo(0, H - 275)
    p_yellow.close()
    c.setFillColor(YELLOW)
    c.drawPath(p_yellow, stroke=0, fill=1)

    # Segitiga Navy Kiri Atas
    p_top_navy = c.beginPath()
    p_top_navy.moveTo(0, H)
    p_top_navy.lineTo(285, H)
    p_top_navy.lineTo(0, H - 125)
    p_top_navy.close()
    c.setFillColor(NAVY)
    c.drawPath(p_top_navy, stroke=0, fill=1)

    # Segitiga Kuning Pojok Kiri Atas
    p_top_yellow = c.beginPath()
    p_top_yellow.moveTo(0, H)
    p_top_yellow.lineTo(140, H)
    p_top_yellow.lineTo(0, H - 62)
    p_top_yellow.close()
    c.setFillColor(YELLOW)
    c.drawPath(p_top_yellow, stroke=0, fill=1)

    # 2. FOTO PROFIL DENGAN BACKGROUND SOFT PUTIH/ABU (#F1F5F9)
    photo_x = 34
    photo_y = H - 222
    photo_w = 132
    photo_h = 158

    # Bingkai luar & latar belakang soft gray/putih
    c.setFillColor(LIGHT_BG)
    c.setStrokeColor(BORDER_GRAY)
    c.setLineWidth(1.5)
    c.roundRect(photo_x - 3, photo_y - 3, photo_w + 6, photo_h + 6, 4, stroke=1, fill=1)

    if os.path.exists(photo_path):
        c.drawImage(photo_path, photo_x, photo_y, width=photo_w, height=photo_h, preserveAspectRatio=True, anchor='c')

    # =========================================================================
    # SIDEBAR KIRI (CONTACT, HARD SKILLS, SOFTWARE SKILLS, CERTIFICATIONS, REFERENCES)
    # Catatan: SOFT SKILLS sudah dihapus sesuai permintaan!
    # =========================================================================
    sx = 20
    sy = H - 262
    side_max_w = sidebar_w - 32

    side_bullet_style = ParagraphStyle(
        "SideBullet",
        fontName="Helvetica",
        fontSize=8.6,
        leading=12.2,
        textColor=WHITE,
    )
    side_sub_style = ParagraphStyle(
        "SideSub",
        fontName="Helvetica",
        fontSize=8.0,
        leading=11.2,
        textColor=colors.HexColor("#E2E8F0"),
    )
    side_gold_style = ParagraphStyle(
        "SideGold",
        fontName="Helvetica-Oblique",
        fontSize=7.9,
        leading=10.8,
        textColor=colors.HexColor("#FDE047"),
    )

    # CONTACT (Ditambah Kota Asal)
    sy = draw_section_header_left(c, "CONTACT" if lang == "en" else "KONTAK", sx, sy)
    contacts = [
        "+62 851-9984-7664",
        "adealrizal15@gmail.com",
        "Deli Serdang, Sumatera Utara" if lang == "id" else "Deli Serdang, North Sumatra",
        "github.com/AdeAl29",
        "linkedin.com/in/ade-alrizal-715899345",
    ]
    for item in contacts:
        sy = draw_wrapped_text(c, f"&bull; {item}", sx + 4, sy, side_max_w, side_bullet_style) - 2.5

    sy -= 10

    # HARD SKILLS
    sy = draw_section_header_left(c, "HARD SKILLS", sx, sy)
    hard_skills = (
        [
            "Programming &amp; Mobile Development (Android)",
            "UI Development with Jetpack Compose",
            "Database &amp; Backend Integration",
            "Version Control &amp; UI/UX Design",
            "Technical Practices &amp; App Testing",
        ]
        if lang == "en"
        else [
            "Pemrograman &amp; Mobile Development (Android)",
            "Pengembangan UI dengan Jetpack Compose",
            "Integrasi Database &amp; Backend",
            "Version Control &amp; Desain UI/UX",
            "Pengujian Fitur &amp; Debugging Aplikasi",
        ]
    )
    for hs in hard_skills:
        sy = draw_wrapped_text(c, f"&bull; {hs}", sx + 4, sy, side_max_w, side_bullet_style) - 2.5

    sy -= 10

    # SOFTWARE SKILLS
    sy = draw_section_header_left(c, "SOFTWARE SKILLS", sx, sy)
    sw_skills = [
        "Android Studio",
        "Kotlin &amp; Java",
        "Jetpack Compose",
        "Flutter",
        "Figma",
        "Git &amp; GitHub",
    ]
    for sw in sw_skills:
        sy = draw_wrapped_text(c, f"&bull; {sw}", sx + 4, sy, side_max_w, side_bullet_style) - 2.5

    sy -= 10

    # CERTIFICATIONS (Termasuk Skor TOEFL 437)
    sy = draw_section_header_left(c, "CERTIFICATIONS" if lang == "en" else "SERTIFIKASI", sx, sy)
    certs = (
        [
            "<b>Best Project Award (PELOR)</b> – Infinite Learning (2025)",
            "<b>Magang Mandiri – Mobile Development</b> (2025)",
            "<b>TOEFL Prediction Test</b> – Score: <b>437</b>",
        ]
        if lang == "en"
        else [
            "<b>Best Project Award (PELOR)</b> – Infinite Learning (2025)",
            "<b>Magang Mandiri – Mobile Development</b> (2025)",
            "<b>TOEFL Prediction Test</b> – Skor: <b>437</b>",
        ]
    )
    for cert in certs:
        sy = draw_wrapped_text(c, f"&bull; {cert}", sx + 4, sy, side_max_w, side_bullet_style) - 3

    sy -= 10

    # REFERENCES (Dicantumkan keterangan Dosen UISU)
    sy = draw_section_header_left(c, "REFERENCES" if lang == "en" else "REFERENSI", sx, sy)
    refs = [
        (
            "Tasliyah Haramaini, S.Si., M.Kom.",
            "Lecturer at Universitas Islam Sumatera Utara (UISU)"
            if lang == "en"
            else "Dosen Universitas Islam Sumatera Utara (UISU)",
            "0852-6180-0106",
        ),
        (
            "Rachmat Aulia, S.Kom., M.Sc.IT.",
            "Lecturer at Universitas Islam Sumatera Utara (UISU)"
            if lang == "en"
            else "Dosen Universitas Islam Sumatera Utara (UISU)",
            "0813-1507-3770",
        ),
    ]
    for r_name, r_role, r_phone in refs:
        sy = draw_wrapped_text(c, f"&bull; <b>{r_name}</b>", sx + 4, sy, side_max_w, side_bullet_style) - 1
        sy = draw_wrapped_text(c, f"&nbsp;&nbsp;&nbsp;{r_role}", sx + 4, sy, side_max_w, side_gold_style) - 1
        sy = draw_wrapped_text(c, f"&nbsp;&nbsp;&nbsp;Tel: {r_phone}", sx + 4, sy, side_max_w, side_sub_style) - 5

    # =========================================================================
    # KONTEN UTAMA KANAN
    # Urutan: Header -> PROFILE -> EDUCATION (IPK, Judul Skripsi, Skor TOEFL) -> EXPERIENCE (Poin-poin)
    # =========================================================================
    ry = H - 68

    # NAMA & TITLE
    c.setFillColor(DARK_TEXT)
    c.setFont("Helvetica-Bold", 24)
    c.drawString(right_x, ry, "ADE ALRIZAL, S.T.")
    ry -= 20
    c.setFillColor(NAVY)
    c.setFont("Helvetica", 13)
    c.drawString(right_x, ry, "Software Engineer  |  Mobile / Android Developer")
    ry -= 22

    body_style = ParagraphStyle(
        "BodyText",
        fontName="Helvetica",
        fontSize=9.2,
        leading=13.5,
        textColor=BODY_TEXT,
    )
    exp_title_style = ParagraphStyle(
        "ExpTitle",
        fontName="Helvetica-BoldOblique",
        fontSize=9.8,
        leading=13,
        textColor=DARK_TEXT,
    )
    exp_meta_style = ParagraphStyle(
        "ExpMeta",
        fontName="Helvetica",
        fontSize=8.6,
        leading=12,
        textColor=NAVY,
    )
    bullet_style = ParagraphStyle(
        "BulletPoint",
        fontName="Helvetica",
        fontSize=8.8,
        leading=12.8,
        leftIndent=10,
        firstLineIndent=-10,
        textColor=BODY_TEXT,
    )

    # 1. PROFILE
    ry = draw_section_header_right(c, "PROFILE" if lang == "en" else "PROFIL", right_x, ry)
    profile_str = (
        "Highly adaptable Informatics Engineering graduate (S.T.) with strong problem-solving and analytical thinking skills. Specializing in Android Mobile Development using Kotlin, Java, and Jetpack Compose. A responsible and continuous learner ready to deliver optimal contributions in a professional work environment."
        if lang == "en"
        else "Lulusan Sarjana Teknik Informatika (S.T.) yang adaptif dengan kemampuan pemecahan masalah dan berpikir analitis yang kuat. Berfokus pada pengembangan aplikasi Mobile Android menggunakan Kotlin, Java, dan Jetpack Compose, serta siap memberikan kontribusi optimal di lingkungan kerja profesional."
    )
    ry = draw_wrapped_text(c, profile_str, right_x, ry, right_w, body_style)
    ry -= 16

    # 2. EDUCATION & ACADEMIC HIGHLIGHTS (Ditempatkan PALING ATAS setelah PROFILE untuk Fresh Graduate)
    ry = draw_section_header_right(
        c,
        "EDUCATION & ACADEMIC HIGHLIGHTS" if lang == "en" else "PENDIDIKAN & CAPAIAN AKADEMIK",
        right_x,
        ry,
    )

    # Kotak Highlight Pendidikan, IPK, Skripsi, & TOEFL
    box_h = 114 if lang == "en" else 102
    c.setFillColor(CARD_BG)
    c.setStrokeColor(BORDER_GRAY)
    c.setLineWidth(1)
    c.roundRect(right_x, ry - box_h, right_w, box_h, 5, stroke=1, fill=1)
    # Garis aksen biru di sisi kiri kartu
    c.setFillColor(NAVY)
    c.roundRect(right_x, ry - box_h, 4, box_h, 2, stroke=0, fill=1)

    ey = ry - 8
    ex = right_x + 12
    ew = right_w - 20

    ey = draw_wrapped_text(
        c,
        "<b>Universitas Islam Sumatera Utara (UISU) | Medan, North Sumatra, Indonesia</b> (2022 – 2026)"
        if lang == "en"
        else "<b>Universitas Islam Sumatera Utara (UISU) | Medan, Sumatera Utara, Indonesia</b> (2022 – 2026)",
        ex,
        ey,
        ew,
        ParagraphStyle("EduUniv", fontName="Helvetica", fontSize=9.0, leading=12.5, textColor=DARK_TEXT),
    )
    ey -= 3

    edu_points = (
        [
            "&bull; <b>Degree:</b> Bachelor of Informatics Engineering (S.T.) &nbsp;|&nbsp; <b>GPA: 3.79 / 4.00</b>",
            "&bull; <b>TOEFL Prediction Score:</b> <b>437</b>",
            "&bull; <b>Undergraduate Thesis (BitQuest App):</b> <i>“Aplikasi Habit Tracker Berbasis Gamifikasi Menggunakan Algoritma Weighted Scoring untuk Meningkatkan Produktivitas Mahasiswa”</i> (Gamification-Based Habit Tracker App Using Weighted Scoring Algorithm).",
        ]
        if lang == "en"
        else [
            "&bull; <b>Program Studi:</b> S1 Teknik Informatika (S.T.) &nbsp;|&nbsp; <b>IPK: 3,79 / 4,00</b>",
            "&bull; <b>Skor TOEFL Prediction:</b> <b>437</b>",
            "&bull; <b>Judul Skripsi (Aplikasi BitQuest):</b> <i>“Aplikasi Habit Tracker Berbasis Gamifikasi Menggunakan Algoritma Weighted Scoring untuk Meningkatkan Produktivitas Mahasiswa”</i>.",
        ]
    )
    for ep in edu_points:
        ey = draw_wrapped_text(c, ep, ex + 2, ey, ew - 4, bullet_style) - 2

    ry = (ry - box_h) - 18

    # 3. EXPERIENCE (Rincian dibuat per poin-poin / bullet list, bukan paragraf)
    ry = draw_section_header_right(c, "EXPERIENCE" if lang == "en" else "PENGALAMAN", right_x, ry)

    experiences = (
        [
            (
                "Mobile Developer — PT. Kinema Syntrans Multimedia",
                "2025",
                [
                    "Utilized Android Studio, Kotlin, and Jetpack Compose to fix bugs and test new features.",
                    "Improved application stability and runtime performance through manual testing and code refactoring.",
                    "Collaborated with the engineering team to ensure smooth compatibility across diverse Android devices.",
                ],
            ),
            (
                "Mobile Development Intern — Infinite Learning (Kampus Merdeka Mandiri Batch 8)",
                "March 2025 – July 2025",
                [
                    "Developed the <b>PELOR</b> cultural promotion mobile application using Android Studio, Kotlin, and Jetpack Compose.",
                    "Collaborated closely with the AI Development team to integrate AI-based personalization and gamification features.",
                    "Achieved the <b>Best Project Award</b> for successfully delivering the PELOR mobile application.",
                ],
            ),
            (
                "Information &amp; Communication Technology Trainee — Infinite Learning",
                "March 2025 – July 2025",
                [
                    "Participated in the Kampus Merdeka Mandiri (KMM) Batch 8 program focused on Information and Communication Technology (ICT).",
                    "Practiced industry-standard mobile development workflows, Git version control, and UI/UX design with Figma.",
                ],
            ),
            (
                "Mobile Programming Workshop — Codecampus Community &times; UISU",
                "June 2024 – July 2025",
                [
                    "Participated in the Mobile Programming Workshop organized by Codecampus Community in collaboration with the Informatics Engineering Study Program at Universitas Islam Sumatera Utara (UISU).",
                    "Practiced Android mobile application programming fundamentals and responsive UI layout design.",
                ],
            ),
        ]
        if lang == "en"
        else [
            (
                "Mobile Developer — PT. Kinema Syntrans Multimedia",
                "2025",
                [
                    "Menggunakan Android Studio, Kotlin, dan Jetpack Compose untuk memperbaiki bug serta menguji fitur baru.",
                    "Meningkatkan stabilitas dan performa aplikasi melalui pengujian manual dan perbaikan kode.",
                    "Berkolaborasi dengan tim untuk memastikan aplikasi berjalan optimal pada berbagai perangkat Android.",
                ],
            ),
            (
                "Mobile Development Intern — Infinite Learning (Kampus Merdeka Mandiri Batch 8)",
                "Maret 2025 – Juli 2025",
                [
                    "Mengembangkan aplikasi mobile promosi budaya <b>PELOR</b> menggunakan Android Studio, Kotlin, dan Jetpack Compose.",
                    "Berkolaborasi bersama tim AI Development untuk mengintegrasikan fitur AI dan elemen gamifikasi.",
                    "Meraih penghargaan <b>Best Project Award</b> atas keberhasilan penyelesaian proyek aplikasi mobile PELOR.",
                ],
            ),
            (
                "Information &amp; Communication Technology Trainee — Infinite Learning",
                "Maret 2025 – Juli 2025",
                [
                    "Mengikuti program Kampus Merdeka Mandiri (KMM) Batch 8 yang berfokus pada pengembangan kompetensi ICT.",
                    "Mempraktikkan alur pengembangan perangkat lunak kolaboratif menggunakan Git/GitHub dan desain UI/UX dengan Figma.",
                ],
            ),
            (
                "Mobile Programming Workshop — Codecampus Community &times; UISU",
                "Juni 2024 – Juli 2025",
                [
                    "Mengikuti kegiatan Mobile Programming Workshop yang diselenggarakan oleh Codecampus Community berkolaborasi dengan Prodi Teknik Informatika Universitas Islam Sumatera Utara (UISU).",
                    "Mempelajari dan mempraktikkan fundamental pemrograman aplikasi Android serta perancangan antarmuka mobile.",
                ],
            ),
        ]
    )

    for role_title, period, points in experiences:
        ry = draw_wrapped_text(c, role_title, right_x, ry, right_w, exp_title_style) - 1
        ry = draw_wrapped_text(c, period, right_x, ry, right_w, exp_meta_style) - 3
        for pt in points:
            ry = draw_wrapped_text(c, f"&bull; {pt}", right_x + 4, ry, right_w - 6, bullet_style) - 1.5
        ry -= 7

    c.showPage()
    c.save()


if __name__ == "__main__":
    build_cv("d:/Projek Web/CV/assets/CV - 2.0.pdf", lang="en", photo_path="d:/Projek Web/CV/assets/profile-soft.jpg")
    build_cv("d:/Projek Web/CV/assets/Ade Alrizal.pdf", lang="id", photo_path="d:/Projek Web/CV/assets/profile-soft.jpg")
    print("PDF generated successfully.")
