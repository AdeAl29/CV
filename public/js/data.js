/**
 * ============================================================================
 * FILE KONFIGURASI DATA PORTOFOLIO & CV (js/data.js)
 * ============================================================================
 * Data Resmi: Ade Alrizal — Mobile Developer (Android) & Software Engineer
 * Mendukung 2 bahasa (id & en).
 */

window.PORTFOLIO_DATA = {
  // 1. KONFIGURASI UMUM & TEMA
  config: {
    defaultLang: "id", // Pilihan: 'id' atau 'en'
    cvPdfUrl: "assets/Ade Alrizal.pdf", // Path default CV Bahasa Indonesia
    cvPdfUrlByLang: {
      id: "assets/Ade Alrizal.pdf",
      en: "assets/CV - 2.0.pdf"
    },
    formspreeEndpoint: "" // Kosongkan untuk menggunakan /api/contact (Netlify DB) & fallback mailto:
  },

  // 2. DATA PROFIL PRIBADI
  profile: {
    name: "Ade Alrizal",
    initials: "AA",
    photo: "assets/profile.jpg",
    age: 22,
    email: "adealrizal15@gmail.com",
    whatsapp: "6285199847664", // Kode negara tanpa tanda +
    whatsappDisplay: "+62 851-9984-7664",
    location: {
      id: "Deli Serdang, Sumatera Utara, Indonesia",
      en: "Deli Serdang, North Sumatra, Indonesia"
    },
    status: {
      id: "Terbuka untuk Full-Time dan Freelance",
      en: "Open for Full-Time and Freelance"
    },
    roles: {
      id: [
        "Mobile Developer",
        "Android Developer",
        "Software Engineer",
        "Kotlin & Jetpack Compose Enthusiast"
      ],
      en: [
        "Mobile Developer",
        "Android Developer",
        "Software Engineer",
        "Kotlin & Jetpack Compose Enthusiast"
      ]
    },
    tagline: {
      id: "Mobile Developer dengan spesialisasi pengembangan Android yang berfokus membangun aplikasi mobile yang inovatif, intuitif, dan ramah pengguna.",
      en: "Mobile Developer specializing in Android development, passionate about building innovative, intuitive, and user-friendly mobile applications."
    },
    about: {
      id: [
        "Saya merupakan lulusan Sarjana Teknik Informatika dari Universitas Islam Sumatera Utara dengan IPK 3,79/4,00. Saya memiliki fokus pada bidang Mobile Development, khususnya pengembangan aplikasi Android menggunakan Kotlin, Java, dan Jetpack Compose.",
        "Memiliki pengalaman dalam pengembangan aplikasi mobile melalui program magang dan proyek kolaboratif, termasuk memperbaiki bug, menguji fitur, meningkatkan stabilitas aplikasi, serta mengembangkan antarmuka pengguna yang responsif.",
        "Saya juga memiliki ketertarikan terhadap pengembangan aplikasi yang mengintegrasikan teknologi Artificial Intelligence (AI) dan gamifikasi. Saya senantiasa berupaya mengembangkan kemampuan teknis dan menciptakan solusi digital yang inovatif, efisien, serta memberikan pengalaman pengguna yang baik."
      ],
      en: [
        "I hold a Bachelor's degree in Informatics Engineering from Universitas Islam Sumatera Utara with a GPA of 3.79/4.00. I specialize in Mobile Development, focusing on building Android applications using Kotlin, Java, and Jetpack Compose.",
        "I have hands-on experience in mobile app development through internship programs and collaborative projects, including debugging, feature testing, improving application stability, and crafting responsive user interfaces.",
        "I am also deeply interested in building mobile applications that integrate Artificial Intelligence (AI) and gamification. I continuously strive to grow my technical skills and deliver digital solutions that are innovative, efficient, and provide an outstanding user experience."
      ]
    },
    socials: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ade-alrizal-715899345/",
        icon: "fa-brands fa-linkedin-in"
      },
      {
        name: "GitHub",
        url: "https://github.com/AdeAl29",
        icon: "fa-brands fa-github"
      },
      {
        name: "Instagram (@adeal29_)",
        url: "https://instagram.com/adeal29_",
        icon: "fa-brands fa-instagram"
      },
      {
        name: "Website",
        url: "https://AdeAl29.com",
        icon: "fa-solid fa-globe"
      }
    ],
    stats: [
      {
        value: 2024,
        suffix: "",
        label: { id: "Fokus Mobile Dev Sejak", en: "Mobile Dev Focus Since" }
      },
      {
        value: 379,
        displayValue: "3.79",
        suffix: "/4.0",
        label: { id: "IPK S1 Teknik Informatika", en: "Informatics GPA" }
      },
      {
        value: 1,
        suffix: "",
        label: { id: "Proyek Unggulan & Tim AI", en: "Featured AI & Mobile Project" }
      },
      {
        value: 1,
        suffix: "",
        label: { id: "Best Project Award", en: "Best Project Award" }
      }
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d509740.6698702515!2d98.4900055!3d3.4215995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30313b00523c7791%3A0x3039d80b220cbd0!2sDeli%20Serdang%20Regency%2C%20North%20Sumatra!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
  },

  // 3. DATA SKILL (Dikelompokkan: mobile, tools, soft)
  skills: {
    radarSummary: {
      labels: {
        id: ["Android Dev", "Kotlin & Compose", "Java & Flutter", "UI/UX Mobile", "Tools (Studio/Git)", "Soft Skills & Tim"],
        en: ["Android Dev", "Kotlin & Compose", "Java & Flutter", "Mobile UI/UX", "Tools (Studio/Git)", "Soft Skills & Team"]
      },
      values: [85, 80, 68, 65, 80, 86]
    },
    items: [
      // Mobile Development
      { name: "Android Development", level: 85, category: "mobile", icon: "fa-brands fa-android" },
      { name: "Kotlin", level: 80, category: "mobile", icon: "fa-solid fa-code" },
      { name: "Jetpack Compose", level: 80, category: "mobile", icon: "fa-solid fa-layer-group" },
      { name: "Java", level: 70, category: "mobile", icon: "fa-brands fa-java" },
      { name: "Flutter", level: 60, category: "mobile", icon: "fa-solid fa-mobile-screen-button" },
      { name: "UI/UX Understanding", level: 65, category: "mobile", icon: "fa-solid fa-wand-magic-sparkles" },

      // Tools & Software
      { name: "Android Studio", level: 85, category: "tools", icon: "fa-solid fa-laptop-code" },
      { name: "Git & GitHub", level: 75, category: "tools", icon: "fa-brands fa-git-alt" },
      { name: "Figma", level: 65, category: "tools", icon: "fa-brands fa-figma" },

      // Soft Skills
      {
        name: { id: "Tanggung Jawab (Responsibility)", en: "Responsibility" },
        level: 90,
        category: "soft",
        icon: "fa-solid fa-shield-halved"
      },
      {
        name: { id: "Pemecahan Masalah (Problem Solving)", en: "Problem Solving" },
        level: 85,
        category: "soft",
        icon: "fa-solid fa-lightbulb"
      },
      {
        name: { id: "Kemampuan Adaptasi (Adaptability)", en: "Adaptability" },
        level: 85,
        category: "soft",
        icon: "fa-solid fa-arrows-rotate"
      },
      {
        name: { id: "Kerja Tim (Teamwork)", en: "Teamwork" },
        level: 85,
        category: "soft",
        icon: "fa-solid fa-users"
      },
      {
        name: { id: "Manajemen Waktu (Time Management)", en: "Time Management" },
        level: 80,
        category: "soft",
        icon: "fa-solid fa-clock"
      }
    ]
  },

  // 4. DATA PENGALAMAN KERJA, MAGANG, & ORGANISASI
  experience: [
    {
      id: "exp-1",
      role: {
        id: "Mobile Developer",
        en: "Mobile Developer"
      },
      company: "PT. Kinema Syntrans Multimedia",
      location: "Indonesia",
      period: {
        id: "2025",
        en: "2025"
      },
      summary: {
        id: "Berfokus pada pemeliharaan, perbaikan bug, pengujian fitur baru, serta peningkatan stabilitas aplikasi Android menggunakan Android Studio dan Jetpack Compose.",
        en: "Focused on maintaining, debugging, testing new features, and improving Android application stability using Android Studio and Jetpack Compose."
      },
      highlights: {
        id: [
          "Menggunakan Android Studio dan Jetpack Compose untuk memperbaiki bug dan menguji fitur baru.",
          "Meningkatkan stabilitas dan performa aplikasi melalui pengujian manual dan perbaikan kode.",
          "Berkolaborasi dengan tim untuk memastikan aplikasi berjalan dengan baik pada berbagai perangkat Android."
        ],
        en: [
          "Utilized Android Studio and Jetpack Compose to fix bugs and test new application features.",
          "Improved app stability and performance through manual testing and code refactoring.",
          "Collaborated with the engineering team to ensure smooth compatibility across diverse Android devices."
        ]
      }
    },
    {
      id: "exp-2",
      role: {
        id: "Mobile Development Intern",
        en: "Mobile Development Intern"
      },
      company: "Infinite Learning (Kampus Merdeka Mandiri Batch 8)",
      location: "Indonesia",
      period: {
        id: "Maret 2025 – Juli 2025",
        en: "March 2025 – July 2025"
      },
      summary: {
        id: "Mengembangkan aplikasi mobile promosi budaya berbasis Artificial Intelligence (AI) dan gamifikasi dalam kolaborasi lintas tim.",
        en: "Developed an AI and gamification-powered cultural promotion mobile app within a cross-functional team."
      },
      highlights: {
        id: [
          "Mengembangkan proyek PELOR sebagai Mobile Developer menggunakan Kotlin dan Jetpack Compose.",
          "Berkolaborasi erat dengan AI Development Team untuk integrasi fitur cerdas.",
          "Berkontribusi dalam penyelesaian proyek aplikasi mobile berbasis AI dan gamifikasi.",
          "Berhasil memperoleh penghargaan Best Project pada program Kampus Merdeka Mandiri Batch 8."
        ],
        en: [
          "Developed the PELOR mobile application as a Mobile Developer using Kotlin and Jetpack Compose.",
          "Collaborated closely with the AI Development Team for intelligent feature integration.",
          "Contributed end-to-end to delivering an AI and gamification-based mobile application.",
          "Won the Best Project Award in the Kampus Merdeka Mandiri Batch 8 cohort."
        ]
      }
    },
    {
      id: "exp-3",
      role: {
        id: "Information & Communication Technology Trainee",
        en: "Information & Communication Technology Trainee"
      },
      company: "Infinite Learning",
      location: "Indonesia",
      period: {
        id: "Maret 2025 – Juli 2025",
        en: "March 2025 – July 2025"
      },
      summary: {
        id: "Program pelatihan intensif teknologi informasi dan komunikasi serta rekayasa perangkat lunak modern.",
        en: "Intensive training program in Information & Communication Technology and modern software engineering."
      },
      highlights: {
        id: [
          "Mengikuti program Kampus Merdeka Mandiri yang berfokus pada pengembangan keterampilan Information & Communication Technology.",
          "Mempelajari alur kerja pengembangan produk digital secara kolaboratif berbasis standar industri."
        ],
        en: [
          "Participated in the Kampus Merdeka Mandiri program focusing on Information & Communication Technology skills.",
          "Practiced collaborative digital product development workflows aligned with industry standards."
        ]
      }
    },
    {
      id: "exp-4",
      role: {
        id: "Peserta Mobile Programming Workshop",
        en: "Mobile Programming Workshop Participant"
      },
      company: "Codecampus Community × Prodi Teknik Informatika UISU",
      location: "Medan / Sumatera Utara",
      period: {
        id: "Juni 2024 – Juli 2025",
        en: "June 2024 – July 2025"
      },
      summary: {
        id: "Kegiatan pelatihan dan workshop kolaboratif yang berfokus pada fundamental serta praktik pemrograman aplikasi mobile.",
        en: "Collaborative workshop series focusing on mobile application programming fundamentals and hands-on practices."
      },
      highlights: {
        id: [
          "Mengikuti kegiatan workshop yang berfokus pada pemrograman aplikasi mobile Android.",
          "Mengasah kemampuan arsitektur UI mobile, pemrograman berorientasi objek, dan praktik terbaik Android."
        ],
        en: [
          "Participated in intensive workshops focusing on Android mobile application programming.",
          "Strengthened mobile UI architecture, object-oriented programming, and Android best practices."
        ]
      }
    }
  ],

  // 5. DATA PENDIDIKAN
  education: [
    {
      id: "edu-1",
      degree: {
        id: "S1 Teknik Informatika",
        en: "Bachelor of Informatics Engineering (S1)"
      },
      institution: "Universitas Islam Sumatera Utara (UISU)",
      period: "2022 – 2026",
      gpa: "3,79 / 4,00",
      summary: {
        id: "Fokus pada Rekayasa Perangkat Lunak, Pengembangan Aplikasi Mobile (Android), serta integrasi teknologi cerdas.",
        en: "Focused on Software Engineering, Mobile Application Development (Android), and intelligent technology integration."
      },
      highlights: {
        id: [
          "Lulusan Sarjana Teknik Informatika dengan pencapaian IPK 3,79 / 4,00.",
          "Aktif mengikuti kegiatan pengembangan kompetensi Mobile Programming bersama Codecampus Community dan Prodi Teknik Informatika UISU."
        ],
        en: [
          "Graduated with a Bachelor's degree in Informatics Engineering achieving a GPA of 3.79 / 4.00.",
          "Actively participated in Mobile Programming competency development with Codecampus Community and UISU Informatics department."
        ]
      }
    },
    {
      id: "edu-2",
      degree: {
        id: "Magang & Studi Independen (Kampus Merdeka Mandiri Batch 8)",
        en: "Internship & Independent Study (Kampus Merdeka Mandiri Batch 8)"
      },
      institution: "Infinite Learning",
      period: "2025",
      gpa: "Best Project Awardee",
      summary: {
        id: "Bidang Mobile Development dan Information & Communication Technology.",
        en: "Specializing in Mobile Development and Information & Communication Technology."
      },
      highlights: {
        id: [
          "Menyelesaikan kurikulum intensif pengembangan aplikasi Android menggunakan Kotlin dan Jetpack Compose.",
          "Mengembangkan proyek capstone PELOR bersama AI Development Team dan meraih penghargaan Best Project."
        ],
        en: [
          "Completed an intensive Android development curriculum using Kotlin and Jetpack Compose.",
          "Built the PELOR capstone project alongside the AI Development Team and won the Best Project Award."
        ]
      }
    }
  ],

  // 6. DATA PROYEK / PORTOFOLIO
  projects: [
    {
      id: "proj-pelor",
      title: "PELOR — Aplikasi Promosi Budaya Berbasis AI & Gamifikasi",
      category: "mobile",
      categoryLabel: { id: "Aplikasi Android (2025)", en: "Android Application (2025)" },
      image: "assets/pelor-mvp.jpg",
      gallery: [
        {
          src: "assets/pelor-mvp.jpg",
          caption: { id: "Fitur MVP Aplikasi PELOR (Peta Pulau Penyengat, AI Scan & Gamifikasi)", en: "PELOR MVP Features (Pulau Penyengat Map, AI Scan & Gamification)" }
        },
        {
          src: "assets/pelor-value.jpg",
          caption: { id: "Nilai Bagi Pengguna (Wisatawan, Driver Gelis & UMKM, Pemerintah)", en: "User Value Proposition (Tourists, Local Community & Stakeholders)" }
        }
      ],
      shortDesc: {
        id: "Aplikasi mobile promosi budaya Pulau Penyengat berbasis Artificial Intelligence (AI) dan gamifikasi dengan pendekatan interaktif dan edukatif.",
        en: "AI and gamification-powered cultural promotion mobile app introducing Pulau Penyengat heritage to younger generations interactively."
      },
      fullDesc: {
        id: "PELOR merupakan aplikasi mobile promosi budaya berbasis Artificial Intelligence (AI) dan gamifikasi yang dikembangkan pada tahun 2025 untuk memperkenalkan budaya lokal Pulau Penyengat kepada generasi muda melalui pendekatan interaktif dan edukatif. Aplikasi ini mencakup peta interaktif lokasi bersejarah & penginapan, fitur pemindaian berbasis AI, sistem Adventure Rank & XP gamifikasi, serta memberikan nilai nyata bagi wisatawan, komunitas lokal (Driver Gelis & UMKM), dan pemerintah/stakeholder.",
        en: "PELOR is an Artificial Intelligence (AI) and gamification-based cultural promotion mobile application developed in 2025 to introduce the local heritage of Pulau Penyengat to the younger generation through an interactive and educational approach. The app features an interactive map of historical sites & stays, AI-powered scanning, an Adventure Rank & XP gamification system, and delivers real value for tourists, local communities (Gelis drivers & MSMEs), and government stakeholders."
      },
      tech: ["Android Studio", "Kotlin", "Jetpack Compose", "Artificial Intelligence (AI)", "Gamification"],
      demoUrl: "https://drive.google.com/file/d/1Q1j-iP01h251l8_kVW4BCBH5XvN3Klc_/view?usp=sharing",
      repoUrl: "https://github.com/AdeAl29"
    }
  ],

  // 7. SERTIFIKASI & PENGHARGAAN
  certifications: [
    {
      title: "Best Project Award – PELOR",
      issuer: "Infinite Learning (Kampus Merdeka Mandiri Batch 8)",
      year: "2025",
      credentialUrl: "https://www.linkedin.com/in/ade-alrizal-715899345/",
      icon: "fa-solid fa-trophy",
      badge: { id: "Penghargaan Proyek Terbaik", en: "Best Project Award" }
    },
    {
      title: "Magang Mandiri – Mobile Development",
      issuer: "Infinite Learning",
      year: "2025",
      credentialUrl: "https://www.linkedin.com/in/ade-alrizal-715899345/",
      icon: "fa-brands fa-android",
      badge: { id: "Sertifikasi Magang & Studi", en: "Internship Certificate" }
    },
    {
      title: "TOEFL Prediction Test",
      issuer: "English Proficiency Assessment",
      year: "Tersertifikasi",
      credentialUrl: "https://www.linkedin.com/in/ade-alrizal-715899345/",
      icon: "fa-solid fa-language",
      badge: { id: "Sertifikasi Bahasa Inggris", en: "English Proficiency" }
    }
  ],

  // 8. KEMAMPUAN BAHASA
  languages: [
    {
      name: { id: "Bahasa Indonesia", en: "Indonesian" },
      level: { id: "Penutur Asli (Utama)", en: "Native Speaker" },
      percent: 100
    },
    {
      name: { id: "Bahasa Inggris", en: "English" },
      level: { id: "Aktif (TOEFL Prediction Certified)", en: "Active (TOEFL Prediction Certified)" },
      percent: 80
    }
  ],

  // 9. HIGHLIGHT KOMPETENSI & PENCAPAIAN (Ditampilkan pada bagian Sorotan/Testimoni)
  testimonials: [
    {
      name: "Pencapaian Proyek PELOR (2025)",
      role: {
        id: "Best Project Award — Infinite Learning (Kampus Merdeka Mandiri Batch 8)",
        en: "Best Project Award — Infinite Learning (Kampus Merdeka Mandiri Batch 8)"
      },
      quote: {
        id: "Berhasil merancang dan mengembangkan aplikasi mobile PELOR berbasis AI dan gamifikasi untuk pelestarian budaya Pulau Penyengat menggunakan Kotlin & Jetpack Compose bersama tim lintas disiplin.",
        en: "Successfully engineered the PELOR mobile application powered by AI and gamification to promote Pulau Penyengat cultural heritage using Kotlin & Jetpack Compose in a cross-functional team."
      },
      rating: 5
    },
    {
      name: "Fokus Kualitas & Stabilitas Aplikasi",
      role: {
        id: "Mobile Developer — PT. Kinema Syntrans Multimedia",
        en: "Mobile Developer — PT. Kinema Syntrans Multimedia"
      },
      quote: {
        id: "Berpengalaman menangani perbaikan bug, pengujian fitur baru, serta peningkatan stabilitas dan responsivitas antarmuka aplikasi pada berbagai perangkat Android.",
        en: "Experienced in resolving bugs, testing new features, and enhancing application stability and UI responsiveness across diverse Android devices."
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
        testimonials: "Sorotan",
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
        bioHeading: "Mobile Developer Spesialis Android (Kotlin & Jetpack Compose)",
        labelAge: "Usia",
        ageSuffix: " Tahun",
        labelLocation: "Domisili",
        labelStatus: "Status",
        labelEmail: "Email",
        langTitle: "Kemampuan Bahasa"
      },
      skills: {
        subtitle: "Kompetensi Teknis & Non-Teknis",
        title: "Keahlian & Teknologi",
        radarTitle: "Peta Keseimbangan Kompetensi",
        radarCaption: "Visualisasi keahlian pengembangan aplikasi Mobile Android, Tools, dan Soft Skills.",
        filterAll: "Semua",
        filterFrontend: "Mobile Dev",
        filterTools: "Tools & Software",
        filterSoft: "Soft Skills"
      },
      resume: {
        subtitle: "Rekam Jejak Karir & Akademik",
        title: "Pengalaman & Pendidikan",
        expHeading: "Pengalaman Kerja, Magang & Workshop",
        eduHeading: "Riwayat Pendidikan",
        expandBtn: "Lihat Detail",
        collapseBtn: "Sembunyikan Detail",
        expandAll: "Buka Semua",
        collapseAll: "Tutup Semua",
        gpaLabel: "IPK / Pencapaian:"
      },
      projects: {
        subtitle: "Karya Pilihan",
        title: "Portofolio Proyek",
        filterAll: "Semua Proyek",
        filterWeb: "Mobile / Android",
        viewDetail: "Detail Proyek",
        liveDemo: "Info / Demo",
        sourceCode: "GitHub Profil",
        modalTech: "Teknologi yang Digunakan:"
      },
      certs: {
        subtitle: "Kredensial & Pencapaian",
        title: "Sertifikasi & Penghargaan",
        verifyBtn: "Lihat Profil LinkedIn"
      },
      testimonials: {
        subtitle: "Pencapaian & Dedikasi",
        title: "Sorotan Proyek & Pengalaman",
        prevAria: "Sorotan sebelumnya",
        nextAria: "Sorotan berikutnya"
      },
      contact: {
        subtitle: "Mari Berkolaborasi",
        title: "Hubungi Saya",
        infoTitle: "Informasi Kontak",
        infoDesc: "Tertarik mendiskusikan peluang kerja Full-Time, proyek Freelance pengembangan aplikasi Android, atau kolaborasi teknologi? Silakan hubungi saya melalui kanal di bawah ini.",
        emailLabel: "Email",
        waLabel: "Telepon / WhatsApp",
        locLabel: "Lokasi",
        waCta: "Chat via WhatsApp Sekarang",
        formTitle: "Kirim Pesan Langsung",
        nameLabel: "Nama Lengkap",
        namePlaceholder: "Masukkan nama Anda",
        emailInputLabel: "Alamat Email",
        emailPlaceholder: "nama@email.com",
        subjectLabel: "Subjek",
        subjectPlaceholder: "Tawaran Kerja / Diskusi Proyek Android",
        messageLabel: "Pesan Anda",
        messagePlaceholder: "Tuliskan detail kebutuhan atau pesan Anda...",
        submitBtn: "Kirim Pesan",
        sendingBtn: "Mengirim...",
        errName: "Nama lengkap wajib diisi (minimal 2 karakter).",
        errEmail: "Masukkan alamat email yang valid.",
        errSubject: "Subjek pesan wajib diisi.",
        errMessage: "Pesan wajib diisi (minimal 10 karakter).",
        successMsg: "Terima kasih! Pesan Anda telah diproses."
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
        testimonials: "Highlights",
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
        bioHeading: "Mobile Developer Specializing in Android (Kotlin & Jetpack Compose)",
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
        radarCaption: "Proportional visualization across Android Mobile Development, Tools, and Soft Skills.",
        filterAll: "All",
        filterFrontend: "Mobile Dev",
        filterTools: "Tools & Software",
        filterSoft: "Soft Skills"
      },
      resume: {
        subtitle: "Career & Academic Journey",
        title: "Experience & Education",
        expHeading: "Work, Internship & Workshop Experience",
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
        filterAll: "All Projects",
        filterWeb: "Mobile / Android",
        viewDetail: "Project Details",
        liveDemo: "Info / Demo",
        sourceCode: "GitHub Profile",
        modalTech: "Technologies Used:"
      },
      certs: {
        subtitle: "Credentials & Honors",
        title: "Certifications & Awards",
        verifyBtn: "View LinkedIn Profile"
      },
      testimonials: {
        subtitle: "Achievements & Dedication",
        title: "Project & Career Highlights",
        prevAria: "Previous highlight",
        nextAria: "Next highlight"
      },
      contact: {
        subtitle: "Let's Collaborate",
        title: "Get In Touch",
        infoTitle: "Contact Information",
        infoDesc: "Interested in discussing a Full-Time opportunity, freelance Android application project, or tech collaboration? Feel free to reach out via the channels below.",
        emailLabel: "Email",
        waLabel: "Phone / WhatsApp",
        locLabel: "Location",
        waCta: "Chat on WhatsApp Now",
        formTitle: "Send a Direct Message",
        nameLabel: "Full Name",
        namePlaceholder: "Enter your full name",
        emailInputLabel: "Email Address",
        emailPlaceholder: "name@email.com",
        subjectLabel: "Subject",
        subjectPlaceholder: "Job Opportunity / Android Project Inquiry",
        messageLabel: "Your Message",
        messagePlaceholder: "Write your project details or message here...",
        submitBtn: "Send Message",
        sendingBtn: "Sending...",
        errName: "Full name is required (minimum 2 characters).",
        errEmail: "Please enter a valid email address.",
        errSubject: "Subject is required.",
        errMessage: "Message is required (minimum 10 characters).",
        successMsg: "Thank you! Your message has been processed."
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
