/**
 * ============================================================================
 * FILE KONFIGURASI DATA PORTOFOLIO & CV (js/data.js)
 * ============================================================================
 * Edit data di bawah ini untuk mengubah seluruh isi website tanpa perlu
 * mengedit kode HTML atau logika JavaScript. Mendukung 2 bahasa (id & en).
 */

window.PORTFOLIO_DATA = {
  // 1. KONFIGURASI UMUM & TEMA
  config: {
    defaultLang: "id", // Pilihan: 'id' atau 'en'
    cvPdfUrl: "assets/CV-Placeholder.pdf", // Path ke file PDF CV Anda
    formspreeEndpoint: "", // Kosongkan untuk fallback otomatis ke mailto:, atau isi URL Formspree mis: "https://formspree.io/f/xxxx"
  },

  // 2. DATA PROFIL PRIBADI
  profile: {
    name: "Arya Pratama",
    initials: "AP",
    photo: "assets/profile-placeholder.svg", // Bisa diganti dengan foto asli (mis. "assets/foto-profil.webp")
    age: 26,
    email: "arya.pratama@email.com",
    whatsapp: "6281234567890", // Gunakan kode negara tanpa tanda +
    whatsappDisplay: "+62 812-3456-7890",
    location: {
      id: "Jakarta Selatan, Indonesia",
      en: "South Jakarta, Indonesia"
    },
    status: {
      id: "Tersedia untuk Freelance & Full-Time",
      en: "Available for Freelance & Full-Time"
    },
    roles: {
      id: [
        "Senior Full-Stack Web Developer",
        "UI/UX Engineer",
        "Frontend Architecture Specialist",
        "Cloud & Performance Enthusiast"
      ],
      en: [
        "Senior Full-Stack Web Developer",
        "UI/UX Engineer",
        "Frontend Architecture Specialist",
        "Cloud & Performance Enthusiast"
      ]
    },
    tagline: {
      id: "Membangun produk digital berkinerja tinggi dengan desain elegan, kode terstruktur, dan pengalaman pengguna yang intuitif.",
      en: "Building high-performance digital products with elegant design, clean architecture, and intuitive user experiences."
    },
    about: {
      id: [
        "Halo! Saya Arya Pratama, seorang Senior Full-Stack Web Developer dan UI/UX Designer dengan pengalaman lebih dari 5 tahun dalam merancang serta mengembangkan aplikasi web skala enterprise maupun startup.",
        "Saya menggabungkan keahlian rekayasa perangkat lunak modern (JavaScript/TypeScript, React, Node.js, dan arsitektur Cloud) dengan kepekaan desain visual untuk menciptakan solusi yang tidak hanya cepat dan aman, tetapi juga menyenangkan saat digunakan.",
        "Di luar jam kerja, saya aktif berkontribusi pada proyek open-source, menulis artikel teknis tentang optimasi performa web, serta membimbing developer muda dalam komunitas teknologi lokal."
      ],
      en: [
        "Hello! I'm Arya Pratama, a Senior Full-Stack Web Developer and UI/UX Designer with over 5 years of experience architecting and delivering enterprise and startup web applications.",
        "I combine modern software engineering expertise (JavaScript/TypeScript, React, Node.js, and Cloud architecture) with strong visual design sensibility to craft solutions that are not only fast and secure, but also delightful to use.",
        "Outside of work, I actively contribute to open-source projects, write technical articles on web performance optimization, and mentor junior developers in local tech communities."
      ]
    },
    socials: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/aryapratama",
        icon: "fa-brands fa-linkedin-in"
      },
      {
        name: "GitHub",
        url: "https://github.com/aryapratama",
        icon: "fa-brands fa-github"
      },
      {
        name: "Instagram",
        url: "https://instagram.com/aryapratama.dev",
        icon: "fa-brands fa-instagram"
      },
      {
        name: "Dribbble",
        url: "https://dribbble.com/aryapratama",
        icon: "fa-brands fa-dribbble"
      }
    ],
    stats: [
      {
        value: 5,
        suffix: "+",
        label: { id: "Tahun Pengalaman", en: "Years of Experience" }
      },
      {
        value: 42,
        suffix: "+",
        label: { id: "Proyek Selesai", en: "Completed Projects" }
      },
      {
        value: 28,
        suffix: "+",
        label: { id: "Klien Puas", en: "Happy Clients" }
      },
      {
        value: 99,
        suffix: "%",
        label: { id: "Skor Performa Web", en: "Web Performance Score" }
      }
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126906.8252646691!2d106.7380865!3d-6.2849775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1ec2422b0b3%3A0x39a0d0fe47404d02!2sSouth%20Jakarta%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
  },

  // 3. DATA SKILL (Dikelompokkan: frontend, backend, tools, soft)
  skills: {
    radarSummary: {
      labels: {
        id: ["Frontend", "Backend", "UI/UX Design", "DevOps & Tools", "Arsitektur Sistem", "Komunikasi & Lead"],
        en: ["Frontend", "Backend", "UI/UX Design", "DevOps & Tools", "System Architecture", "Communication & Lead"]
      },
      values: [95, 88, 90, 85, 86, 92]
    },
    items: [
      // Frontend
      { name: "HTML5, CSS3 & Modern Responsive UI", level: 96, category: "frontend", icon: "fa-brands fa-html5" },
      { name: "JavaScript (ES6+) & TypeScript", level: 94, category: "frontend", icon: "fa-brands fa-js" },
      { name: "React.js & Next.js Ecosystem", level: 92, category: "frontend", icon: "fa-brands fa-react" },
      { name: "Vue.js & Nuxt", level: 85, category: "frontend", icon: "fa-brands fa-vuejs" },
      { name: "Tailwind CSS & Design Systems", level: 95, category: "frontend", icon: "fa-solid fa-wand-magic-sparkles" },

      // Backend
      { name: "Node.js (Express / NestJS)", level: 90, category: "backend", icon: "fa-brands fa-node-js" },
      { name: "PostgreSQL, MySQL & Redis", level: 88, category: "backend", icon: "fa-solid fa-database" },
      { name: "RESTful API & GraphQL Architecture", level: 92, category: "backend", icon: "fa-solid fa-network-wired" },
      { name: "Python (FastAPI / Data Processing)", level: 82, category: "backend", icon: "fa-brands fa-python" },

      // Tools & DevOps
      { name: "Git, GitHub Actions & CI/CD", level: 94, category: "tools", icon: "fa-brands fa-git-alt" },
      { name: "Docker & Cloud Deployment (AWS/Vercel)", level: 85, category: "tools", icon: "fa-brands fa-docker" },
      { name: "Figma & Interactive Prototyping", level: 92, category: "tools", icon: "fa-brands fa-figma" },
      { name: "Web Vitals & Lighthouse Optimization", level: 95, category: "tools", icon: "fa-solid fa-gauge-high" },

      // Soft Skills
      {
        name: { id: "Kepemimpinan Tim & Mentoring", en: "Team Leadership & Mentoring" },
        level: 92,
        category: "soft",
        icon: "fa-solid fa-users-gear"
      },
      {
        name: { id: "Pemecahan Masalah & Berpikir Kritis", en: "Problem Solving & Critical Thinking" },
        level: 95,
        category: "soft",
        icon: "fa-solid fa-lightbulb"
      },
      {
        name: { id: "Komunikasi Klien & Presentasi Teknis", en: "Client Communication & Tech Presentation" },
        level: 90,
        category: "soft",
        icon: "fa-solid fa-comments"
      },
      {
        name: { id: "Manajemen Proyek Agile / Scrum", en: "Agile / Scrum Project Management" },
        level: 89,
        category: "soft",
        icon: "fa-solid fa-diagram-project"
      }
    ]
  },

  // 4. DATA PENGALAMAN KERJA & ORGANISASI
  experience: [
    {
      id: "exp-1",
      role: {
        id: "Senior Frontend Engineer",
        en: "Senior Frontend Engineer"
      },
      company: "PT Nusantara Digital Teknologi",
      location: "Jakarta, Indonesia (Hybrid)",
      period: {
        id: "Jan 2023 – Sekarang",
        en: "Jan 2023 – Present"
      },
      summary: {
        id: "Memimpin arsitektur frontend dan design system untuk platform SaaS analitik finansial dengan lebih dari 150.000 pengguna aktif bulanan.",
        en: "Leading frontend architecture and design system for a financial analytics SaaS platform serving over 150,000 monthly active users."
      },
      highlights: {
        id: [
          "Merancang ulang arsitektur micro-frontend dan meningkatkan skor Google Lighthouse Performance dari 68 menjadi 97.",
          "Membangun Design System internal berbasis komponen reusable yang mempercepat pengiriman fitur tim hingga 40%.",
          "Membimbing 6 engineer junior-mid melalui sesi code review ketat, pair programming, dan dokumentasi standar teknis."
        ],
        en: [
          "Re-architected the micro-frontend platform, boosting Google Lighthouse Performance score from 68 to 97.",
          "Built an internal reusable component Design System that accelerated feature delivery across squads by 40%.",
          "Mentored 6 junior-to-mid engineers through rigorous code reviews, pair programming, and technical standards."
        ]
      }
    },
    {
      id: "exp-2",
      role: {
        id: "Full-Stack Web Developer",
        en: "Full-Stack Web Developer"
      },
      company: "Kreasi Cloud Studio",
      location: "Bandung, Indonesia",
      period: {
        id: "Mar 2021 – Des 2022",
        en: "Mar 2021 – Dec 2022"
      },
      summary: {
        id: "Mengembangkan aplikasi web end-to-end dan dashboard e-commerce kustom untuk klien korporat di Asia Tenggara.",
        en: "Developed end-to-end web applications and custom e-commerce dashboards for corporate clients across Southeast Asia."
      },
      highlights: {
        id: [
          "Membangun RESTful API dan layanan pembayaran real-time menggunakan Node.js, PostgreSQL, dan Redis dengan uptime 99.95%.",
          "Mengoptimalkan query database dan caching yang memangkas waktu respons rata-rata API sebesar 55%.",
          "Berkolaborasi langsung dengan tim produk dan UI/UX untuk menerjemahkan wireframe Figma menjadi antarmuka responsif."
        ],
        en: [
          "Engineered RESTful APIs and real-time payment services using Node.js, PostgreSQL, and Redis achieving 99.95% uptime.",
          "Optimized database queries and Redis caching layers, cutting average API response times by 55%.",
          "Collaborated closely with product and UI/UX teams to translate Figma wireframes into pixel-perfect responsive interfaces."
        ]
      }
    },
    {
      id: "exp-3",
      role: {
        id: "UI/UX Designer & Frontend Developer (Organisasi / Komunitas)",
        en: "UI/UX Designer & Frontend Developer (Community Lead)"
      },
      company: "Komunitas Developer Muda Indonesia",
      location: "Jakarta, Indonesia",
      period: {
        id: "Agu 2019 – Feb 2021",
        en: "Aug 2019 – Feb 2021"
      },
      summary: {
        id: "Mengelola platform pembelajaran komunitas dan menyelenggarakan bootcamp web development gratis bagi mahasiswa.",
        en: "Managed the community learning platform and organized free web development bootcamps for university students."
      },
      highlights: {
        id: [
          "Merancang portal event dan sistem sertifikasi otomatis untuk 2.500+ peserta workshop nasional.",
          "Menjadi pembicara utama dalam 12+ sesi webinar mengenai Modern CSS, Aksesibilitas Web (WCAG), dan UI/UX."
        ],
        en: [
          "Designed the event portal and automated certification system for 2,500+ national workshop participants.",
          "Served as keynote speaker in 12+ webinars covering Modern CSS, Web Accessibility (WCAG), and UI/UX."
        ]
      }
    }
  ],

  // 5. DATA PENDIDIKAN
  education: [
    {
      id: "edu-1",
      degree: {
        id: "S1 Teknik Informatika (Ilmu Komputer)",
        en: "Bachelor of Informatics Engineering (Computer Science)"
      },
      institution: "Institut Teknologi Nusantara",
      period: "2016 – 2020",
      gpa: "3.88 / 4.00 (Cum Laude)",
      summary: {
        id: "Fokus pada Rekayasa Perangkat Lunak, Interaksi Manusia & Komputer (HCI), serta Sistem Terdistribusi.",
        en: "Focused on Software Engineering, Human-Computer Interaction (HCI), and Distributed Systems."
      },
      highlights: {
        id: [
          "Penerima Beasiswa Prestasi Akademik selama 6 semester berturut-turut.",
          "Juara 1 Kompetisi Pengembangan Aplikasi Web Nasional (GEMASTIK) kategori Desain Pengalaman Pengguna.",
          "Asisten Laboratorium Pemrograman Web & Struktur Data (2018 – 2020)."
        ],
        en: [
          "Recipient of the Academic Excellence Scholarship for 6 consecutive semesters.",
          "1st Place Winner at the National Web Application Development Competition in User Experience Design.",
          "Teaching Assistant for Web Programming & Data Structures Laboratory (2018 – 2020)."
        ]
      }
    },
    {
      id: "edu-2",
      degree: {
        id: "Program Intensif Full-Stack & Cloud Engineering",
        en: "Full-Stack & Cloud Engineering Intensive Cohort"
      },
      institution: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
      period: "2020",
      gpa: "Distinction Graduate (Top 5%)",
      summary: {
        id: "Kurikulum intensif berbasis proyek industri nyata mencakup Cloud Architecture, Web Engineering, dan Soft Skills.",
        en: "Industry-driven intensive curriculum covering Cloud Architecture, Web Engineering, and Professional Soft Skills."
      },
      highlights: {
        id: [
          "Memimpin tim Capstone lintas disiplin dalam membangun aplikasi kesehatan berbasis web dan machine learning.",
          "Terpilih sebagai salah satu dari 15 proyek terbaik tingkat nasional."
        ],
        en: [
          "Led a cross-functional Capstone team building a web and machine-learning powered healthcare application.",
          "Selected among the top 15 national capstone projects."
        ]
      }
    }
  ],

  // 6. DATA PROYEK / PORTOFOLIO
  projects: [
    {
      id: "proj-1",
      title: "FinPulse Enterprise Analytics",
      category: "web",
      categoryLabel: { id: "Aplikasi Web", en: "Web App" },
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
      shortDesc: {
        id: "Dashboard analitik finansial real-time dengan visualisasi data interaktif dan laporan otomatis.",
        en: "Real-time financial analytics dashboard with interactive data visualizations and automated reporting."
      },
      fullDesc: {
        id: "FinPulse adalah platform SaaS analitik keuangan yang dirancang untuk membantu tim CFO dan analis bisnis memantau arus kas, proyeksi pendapatan, serta anomali transaksi secara real-time. Dilengkapi fitur ekspor laporan PDF/Excel instan, filter multi-dimensi, dan mode gelap adaptif.",
        en: "FinPulse is a financial analytics SaaS platform designed to help CFO teams and business analysts monitor cash flow, revenue projections, and transaction anomalies in real time. Features instant PDF/Excel report exports, multi-dimensional filtering, and adaptive dark mode."
      },
      tech: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Chart.js", "PostgreSQL"],
      demoUrl: "https://example.com/finpulse-demo",
      repoUrl: "https://github.com/aryapratama/finpulse-analytics"
    },
    {
      id: "proj-2",
      title: "Lumina Design System & UI Kit",
      category: "uiux",
      categoryLabel: { id: "UI/UX & Design System", en: "UI/UX & Design System" },
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=900&q=80",
      shortDesc: {
        id: "Sistem desain multi-brand berstandar aksesibilitas WCAG AA dengan 60+ komponen siap pakai.",
        en: "Multi-brand WCAG AA accessible design system featuring 60+ production-ready components."
      },
      fullDesc: {
        id: "Lumina adalah pustaka komponen UI dan token desain terpusat yang menyatukan bahasa visual di 8 produk web perusahaan. Mencakup dokumentasi interaktif Storybook, dukungan penuh navigasi keyboard, kontras warna teruji, serta sinkronisasi otomatis token Figma ke CSS Variables.",
        en: "Lumina is a centralized UI component library and design token architecture unifying visual language across 8 company web products. Includes interactive Storybook documentation, full keyboard navigation support, verified color contrast, and automated Figma-to-CSS variable syncing."
      },
      tech: ["Figma", "CSS Variables", "Web Components", "Storybook", "WCAG 2.1 AA"],
      demoUrl: "https://example.com/lumina-design",
      repoUrl: "https://github.com/aryapratama/lumina-ui"
    },
    {
      id: "proj-3",
      title: "OmniCart Headless Commerce",
      category: "web",
      categoryLabel: { id: "Aplikasi Web", en: "Web App" },
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
      shortDesc: {
        id: "Platform e-commerce headless super cepat dengan fitur pencarian instan dan pembayaran multi-kanal.",
        en: "Blazing-fast headless e-commerce storefront with instant search and omnichannel checkout."
      },
      fullDesc: {
        id: "Dibangun untuk menangani lonjakan trafik flash-sale hingga 50.000 pengguna bersamaan. OmniCart memanfaatkan strategi Edge Caching, optimasi gambar WebP otomatis, dan integrasi payment gateway lokal Indonesia untuk menghasilkan peningkatan konversi penjualan sebesar 34%.",
        en: "Built to handle flash-sale traffic spikes of up to 50,000 concurrent users. OmniCart leverages Edge Caching strategies, automated WebP image optimization, and seamless payment gateway integrations, resulting in a 34% boost in checkout conversion."
      },
      tech: ["Next.js", "Node.js", "Redis", "Stripe / Midtrans", "Docker"],
      demoUrl: "https://example.com/omnicart-store",
      repoUrl: "https://github.com/aryapratama/omnicart-headless"
    },
    {
      id: "proj-4",
      title: "GeoTrack Fleet & Logistics API",
      category: "data",
      categoryLabel: { id: "Data & API", en: "Data & API" },
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
      shortDesc: {
        id: "Sistem pemantauan armada logistik berbasis geospasial dan estimasi rute cerdas.",
        en: "Geospatial logistics fleet monitoring system with intelligent route estimation."
      },
      fullDesc: {
        id: "Platform pemantauan rantai pasok yang memproses ribuan titik koordinat GPS setiap menit. Menyediakan visualisasi peta interaktif, peringatan keterlambatan otomatis, dan analitik efisiensi bahan bakar untuk armada distribusi nasional.",
        en: "Supply-chain monitoring platform processing thousands of GPS coordinates per minute. Provides live interactive map visualizations, automated delay alerts, and fuel efficiency analytics for national distribution fleets."
      },
      tech: ["Node.js", "WebSockets", "PostgreSQL / PostGIS", "Python", "Leaflet.js"],
      demoUrl: "https://example.com/geotrack-live",
      repoUrl: "https://github.com/aryapratama/geotrack-logistics"
    },
    {
      id: "proj-5",
      title: "MindFlow Productivity Suite",
      category: "uiux",
      categoryLabel: { id: "UI/UX & Design System", en: "UI/UX & Design System" },
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
      shortDesc: {
        id: "Aplikasi manajemen tugas kolaboratif dengan papan Kanban interaktif dan fokus berbasis Pomodoro.",
        en: "Collaborative task management workspace with interactive Kanban boards and Pomodoro focus timer."
      },
      fullDesc: {
        id: "Dirancang melalui riset mendalam terhadap 40+ pekerja remote. MindFlow mengurangi kelelahan kognitif dengan antarmuka minimalis bebas distraksi, shortcut keyboard lengkap, serta sinkronisasi offline-first berbasis IndexedDB.",
        en: "Designed through in-depth user research with 40+ remote workers. MindFlow reduces cognitive overload through a distraction-free minimalist interface, comprehensive keyboard shortcuts, and offline-first IndexedDB synchronization."
      },
      tech: ["Vanilla JS ES6+", "CSS Grid", "IndexedDB", "PWA", "Figma"],
      demoUrl: "https://example.com/mindflow-app",
      repoUrl: "https://github.com/aryapratama/mindflow-pwa"
    },
    {
      id: "proj-6",
      title: "EduVerse AI Learning Portal",
      category: "data",
      categoryLabel: { id: "Data & API", en: "Data & API" },
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
      shortDesc: {
        id: "Platform e-learning adaptif dengan rekomendasi kurikulum personal dan analitik progres siswa.",
        en: "Adaptive e-learning platform with personalized curriculum recommendations and student analytics."
      },
      fullDesc: {
        id: "EduVerse membantu institusi pendidikan memetakan tingkat pemahaman siswa secara akurat. Dilengkapi kuis interaktif, transkrip video otomatis, serta dashboard instruktur untuk mendeteksi materi yang paling membutuhkan evaluasi tambahan.",
        en: "EduVerse helps educational institutions accurately map student comprehension levels. Equipped with interactive quizzes, automated video transcripts, and an instructor analytics dashboard to identify topics needing reinforcement."
      },
      tech: ["React", "FastAPI", "Python", "Chart.js", "PostgreSQL"],
      demoUrl: "https://example.com/eduverse-portal",
      repoUrl: "https://github.com/aryapratama/eduverse-lms"
    }
  ],

  // 7. SERTIFIKASI & PENGHARGAAN
  certifications: [
    {
      title: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services (AWS)",
      year: "2024",
      credentialUrl: "https://aws.amazon.com/verification",
      icon: "fa-brands fa-aws",
      badge: { id: "Sertifikasi Cloud", en: "Cloud Certification" }
    },
    {
      title: "Google UX Design Professional Certificate",
      issuer: "Google Career Certificates (Coursera)",
      year: "2023",
      credentialUrl: "https://coursera.org",
      icon: "fa-brands fa-google",
      badge: { id: "Sertifikasi Desain", en: "Design Certification" }
    },
    {
      title: "Meta Front-End Developer Professional",
      issuer: "Meta Platforms, Inc.",
      year: "2023",
      credentialUrl: "https://coursera.org",
      icon: "fa-solid fa-code",
      badge: { id: "Sertifikasi Engineering", en: "Engineering Certification" }
    },
    {
      title: "1st Winner National Web UX & Innovation Award",
      issuer: "Kementerian Pendidikan & Teknologi RI",
      year: "2022",
      credentialUrl: "https://example.com/award-certificate",
      icon: "fa-solid fa-trophy",
      badge: { id: "Penghargaan Nasional", en: "National Award" }
    }
  ],

  // 8. KEMAMPUAN BAHASA
  languages: [
    {
      name: { id: "Bahasa Indonesia", en: "Indonesian" },
      level: { id: "Penutur Asli (Native)", en: "Native Speaker" },
      percent: 100
    },
    {
      name: { id: "Bahasa Inggris", en: "English" },
      level: { id: "Profesional Fasih (TOEFL iBT 106 / C1)", en: "Fluent Professional (TOEFL iBT 106 / C1)" },
      percent: 90
    },
    {
      name: { id: "Bahasa Jepang", en: "Japanese" },
      level: { id: "Percakapan Dasar (JLPT N4)", en: "Conversational (JLPT N4)" },
      percent: 45
    }
  ],

  // 9. TESTIMONI KLIEN & REKAN KERJA
  testimonials: [
    {
      name: "Budi Santoso",
      role: {
        id: "VP of Engineering, PT Nusantara Digital",
        en: "VP of Engineering, PT Nusantara Digital"
      },
      quote: {
        id: "Arya adalah kombinasi langka antara engineer yang sangat kuat secara teknis dan desainer yang peduli pada detail pengalaman pengguna. Transformasi performa web yang ia pimpin berdampak langsung pada pertumbuhan bisnis kami.",
        en: "Arya is a rare combination of a technically rigorous engineer and a designer who deeply cares about user experience details. The web performance transformation he led directly impacted our business growth."
      },
      rating: 5
    },
    {
      name: "Sarah Wijaya",
      role: {
        id: "Product Director, FinPulse Asia",
        en: "Product Director, FinPulse Asia"
      },
      quote: {
        id: "Bekerja bersama Arya sangat menyenangkan dan terstruktur. Ia selalu proaktif memberikan solusi UI/UX yang membuat fitur kompleks terasa sederhana bagi pengguna akhir kami.",
        en: "Working with Arya is an absolute pleasure. He proactively proposes UI/UX solutions that make complex enterprise workflows feel effortless for our end users."
      },
      rating: 5
    },
    {
      name: "Michael Tan",
      role: {
        id: "Founder & CEO, OmniCart Commerce",
        en: "Founder & CEO, OmniCart Commerce"
      },
      quote: {
        id: "Sejak merombak platform e-commerce kami bersama Arya, waktu muat halaman turun drastis dan konversi transaksi mobile meningkat lebih dari 30% hanya dalam dua bulan pertama.",
        en: "Since revamping our e-commerce storefront with Arya, page load times dropped dramatically and mobile checkout conversions grew by over 30% within the first two months."
      },
      rating: 5
    }
  ],

  // 10. KAMUS MULTI-BAHASA (i18n) UNTUK ELEMEN ANTARMUKA
  i18n: {
    id: {
      nav: {
        home: "Beranda",
        about: "Tentang",
        skills: "Keahlian",
        resume: "Pengalaman",
        projects: "Proyek",
        certs: "Sertifikasi",
        testimonials: "Testimoni",
        contact: "Kontak"
      },
      hero: {
        greeting: "Halo, saya",
        rolePrefix: "Seorang ",
        downloadCv: "Download CV",
        printCv: "Cetak CV",
        contactMe: "Hubungi Saya",
        scrollDown: "Gulir ke bawah"
      },
      about: {
        subtitle: "Perkenalan Singkat",
        title: "Tentang Saya",
        bioHeading: "Membangun Solusi Web Modern dari Konsep hingga Produksi",
        labelAge: "Usia",
        ageSuffix: " Tahun",
        labelLocation: "Lokasi",
        labelStatus: "Status",
        labelEmail: "Email",
        langTitle: "Kemampuan Bahasa"
      },
      skills: {
        subtitle: "Kompetensi Teknis & Non-Teknis",
        title: "Keahlian & Teknologi",
        radarTitle: "Peta Keseimbangan Kompetensi",
        radarCaption: "Visualisasi proporsi keahlian lintas bidang rekayasa perangkat lunak dan desain produk.",
        filterAll: "Semua",
        filterFrontend: "Frontend",
        filterBackend: "Backend",
        filterTools: "Tools & DevOps",
        filterSoft: "Soft Skill"
      },
      resume: {
        subtitle: "Rekam Jejak Karir & Akademik",
        title: "Pengalaman & Pendidikan",
        expHeading: "Pengalaman Kerja & Organisasi",
        eduHeading: "Riwayat Pendidikan",
        expandBtn: "Lihat Detail",
        collapseBtn: "Sembunyikan Detail",
        expandAll: "Buka Semua",
        collapseAll: "Tutup Semua",
        gpaLabel: "IPK / Predikat:"
      },
      projects: {
        subtitle: "Karya Pilihan",
        title: "Portofolio Proyek",
        filterAll: "Semua",
        filterWeb: "Aplikasi Web",
        filterUiux: "UI/UX & Design",
        filterData: "Data & API",
        viewDetail: "Detail Proyek",
        liveDemo: "Demo Langsung",
        sourceCode: "Kode Sumber",
        modalTech: "Teknologi yang Digunakan:"
      },
      certs: {
        subtitle: "Kredensial & Pencapaian",
        title: "Sertifikasi & Penghargaan",
        verifyBtn: "Lihat Kredensial"
      },
      testimonials: {
        subtitle: "Apa Kata Mereka",
        title: "Testimoni Klien & Rekan",
        prevAria: "Testimoni sebelumnya",
        nextAria: "Testimoni berikutnya"
      },
      contact: {
        subtitle: "Mari Berkolaborasi",
        title: "Hubungi Saya",
        infoTitle: "Informasi Kontak",
        infoDesc: "Tertarik mendiskusikan proyek baru, peluang kerja sama, atau sekadar menyapa? Jangan ragu menghubungi saya melalui formulir atau kanal langsung di bawah ini.",
        emailLabel: "Email",
        waLabel: "WhatsApp",
        locLabel: "Lokasi",
        waCta: "Chat via WhatsApp Sekarang",
        formTitle: "Kirim Pesan Langsung",
        nameLabel: "Nama Lengkap",
        namePlaceholder: "Masukkan nama Anda",
        emailInputLabel: "Alamat Email",
        emailPlaceholder: "nama@email.com",
        subjectLabel: "Subjek",
        subjectPlaceholder: "Diskusi Proyek / Tawaran Kerja",
        messageLabel: "Pesan Anda",
        messagePlaceholder: "Tuliskan detail kebutuhan atau pesan Anda...",
        submitBtn: "Kirim Pesan",
        sendingBtn: "Mengirim...",
        errName: "Nama lengkap wajib diisi (minimal 2 karakter).",
        errEmail: "Masukkan alamat email yang valid.",
        errSubject: "Subjek pesan wajib diisi.",
        errMessage: "Pesan wajib diisi (minimal 10 karakter).",
        successMsg: "Terima kasih! Aplikasi email Anda telah dibuka (atau pesan berhasil terkirim)."
      },
      footer: {
        rights: "Seluruh hak cipta dilindungi.",
        shortcutHint: "Tips: Tekan tombol T pada keyboard untuk mengganti tema, atau L untuk bahasa.",
        backToTop: "Kembali ke atas"
      },
      toast: {
        themeDark: "Mode Gelap Diaktifkan",
        themeLight: "Mode Terang Diaktifkan",
        langChanged: "Bahasa diubah ke Bahasa Indonesia",
        easterEgg: "Mode Aksen Kreatif Diaktifkan!"
      }
    },
    en: {
      nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        resume: "Experience",
        projects: "Projects",
        certs: "Certifications",
        testimonials: "Testimonials",
        contact: "Contact"
      },
      hero: {
        greeting: "Hello, I'm",
        rolePrefix: "A ",
        downloadCv: "Download CV",
        printCv: "Print CV",
        contactMe: "Contact Me",
        scrollDown: "Scroll down"
      },
      about: {
        subtitle: "Introduction",
        title: "About Me",
        bioHeading: "Crafting Modern Web Solutions from Concept to Production",
        labelAge: "Age",
        ageSuffix: " Years Old",
        labelLocation: "Location",
        labelStatus: "Status",
        labelEmail: "Email",
        langTitle: "Languages"
      },
      skills: {
        subtitle: "Technical & Professional Core",
        title: "Skills & Technologies",
        radarTitle: "Competency Balance Map",
        radarCaption: "Proportional visualization across software engineering and product design domains.",
        filterAll: "All",
        filterFrontend: "Frontend",
        filterBackend: "Backend",
        filterTools: "Tools & DevOps",
        filterSoft: "Soft Skills"
      },
      resume: {
        subtitle: "Career & Academic Journey",
        title: "Experience & Education",
        expHeading: "Work & Leadership Experience",
        eduHeading: "Education History",
        expandBtn: "Show Details",
        collapseBtn: "Hide Details",
        expandAll: "Expand All",
        collapseAll: "Collapse All",
        gpaLabel: "GPA / Honors:"
      },
      projects: {
        subtitle: "Selected Works",
        title: "Featured Projects",
        filterAll: "All",
        filterWeb: "Web Apps",
        filterUiux: "UI/UX & Design",
        filterData: "Data & API",
        viewDetail: "Project Details",
        liveDemo: "Live Demo",
        sourceCode: "Source Code",
        modalTech: "Technologies Used:"
      },
      certs: {
        subtitle: "Credentials & Honors",
        title: "Certifications & Awards",
        verifyBtn: "View Credential"
      },
      testimonials: {
        subtitle: "What People Say",
        title: "Client & Peer Testimonials",
        prevAria: "Previous testimonial",
        nextAria: "Next testimonial"
      },
      contact: {
        subtitle: "Let's Collaborate",
        title: "Get In Touch",
        infoTitle: "Contact Information",
        infoDesc: "Interested in discussing a new project, job opportunity, or simply saying hi? Feel free to reach out via the form or direct channels below.",
        emailLabel: "Email",
        waLabel: "WhatsApp",
        locLabel: "Location",
        waCta: "Chat on WhatsApp Now",
        formTitle: "Send a Direct Message",
        nameLabel: "Full Name",
        namePlaceholder: "Enter your full name",
        emailInputLabel: "Email Address",
        emailPlaceholder: "name@email.com",
        subjectLabel: "Subject",
        subjectPlaceholder: "Project Inquiry / Job Opportunity",
        messageLabel: "Your Message",
        messagePlaceholder: "Write your project details or message here...",
        submitBtn: "Send Message",
        sendingBtn: "Sending...",
        errName: "Full name is required (minimum 2 characters).",
        errEmail: "Please enter a valid email address.",
        errSubject: "Subject is required.",
        errMessage: "Message is required (minimum 10 characters).",
        successMsg: "Thank you! Your email client has been triggered (or message sent successfully)."
      },
      footer: {
        rights: "All rights reserved.",
        shortcutHint: "Tip: Press T on your keyboard to switch theme, or L to toggle language.",
        backToTop: "Back to top"
      },
      toast: {
        themeDark: "Dark Mode Activated",
        themeLight: "Light Mode Activated",
        langChanged: "Language switched to English",
        easterEgg: "Creative Accent Mode Activated!"
      }
    }
  }
};

