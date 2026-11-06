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
    name: "Ade Alrizal, S.T.",
    initials: "AA",
    photo: "assets/profile-soft.jpg",
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
        "Software Engineer",
        "Mobile Developer",
        "Android Developer",
        "Kotlin & Jetpack Compose Specialist"
      ],
      en: [
        "Software Engineer",
        "Mobile Developer",
        "Android Developer",
        "Kotlin & Jetpack Compose Specialist"
      ]
    },
    tagline: {
      id: "Lulusan S1 Teknik Informatika (S.T.) — IPK 3,79/4,00 | TOEFL 437. Spesialis pengembangan aplikasi Android (Kotlin, Java, Jetpack Compose) berbasis AI & Gamifikasi.",
      en: "Bachelor of Informatics Engineering (S.T.) — GPA 3.79/4.00 | TOEFL 437. Specializing in Android development (Kotlin, Java, Jetpack Compose) with AI & Gamification."
    },
    about: {
      id: [
        "Saya merupakan lulusan Sarjana Teknik Informatika (S.T.) dari Universitas Islam Sumatera Utara (UISU) dengan IPK 3,79 / 4,00 dan skor TOEFL Prediction 437. Penelitian skripsi saya berjudul “Aplikasi Habit Tracker Berbasis Gamifikasi Menggunakan Algoritma Weighted Scoring untuk Meningkatkan Produktivitas Mahasiswa”.",
        "Saya memiliki fokus utama pada bidang Mobile Development, khususnya pengembangan aplikasi Android menggunakan Kotlin, Java, dan Jetpack Compose. Berpengalaman melalui pekerjaan profesional, program magang Kampus Merdeka Mandiri, serta proyek kolaboratif dalam memperbaiki bug, menguji fitur, meningkatkan stabilitas aplikasi, serta merancang antarmuka pengguna yang responsif.",
        "Saya juga memiliki ketertarikan mendalam terhadap pengembangan aplikasi yang mengintegrasikan teknologi Artificial Intelligence (AI) dan gamifikasi untuk menciptakan solusi digital yang inovatif, efisien, dan berdampak nyata bagi pengguna."
      ],
      en: [
        "I hold a Bachelor's degree in Informatics Engineering (S.T.) from Universitas Islam Sumatera Utara (UISU) with a GPA of 3.79 / 4.00 and a TOEFL Prediction score of 437. My undergraduate thesis is titled “Aplikasi Habit Tracker Berbasis Gamifikasi Menggunakan Algoritma Weighted Scoring untuk Meningkatkan Produktivitas Mahasiswa” (Gamification-Based Habit Tracker App Using the Weighted Scoring Algorithm to Improve Student Productivity).",
        "I specialize in Mobile Development, focusing on building Android applications using Kotlin, Java, and Jetpack Compose. I have practical experience across industry roles, Kampus Merdeka Mandiri internships, and collaborative projects—covering debugging, feature testing, app stability optimization, and responsive UI engineering.",
        "I am passionate about building mobile applications that integrate Artificial Intelligence (AI) and gamification to deliver innovative, efficient, and user-centric digital solutions."
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
        value: 379,
        displayValue: "3.79",
        suffix: "/4.0",
        label: { id: "IPK S1 Teknik Informatika", en: "Informatics GPA" }
      },
      {
        value: 437,
        suffix: "",
        label: { id: "Skor TOEFL Prediction", en: "TOEFL Prediction Score" }
      },
      {
        value: 2024,
        suffix: "",
        label: { id: "Fokus Mobile Dev Sejak", en: "Mobile Dev Focus Since" }
      },
      {
        value: 1,
        suffix: "",
        label: { id: "Best Project Award", en: "Best Project Award" }
      }
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d509740.6698702515!2d98.4900055!3d3.4215995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30313b00523c7791%3A0x3039d80b220cbd0!2sDeli%20Serdang%20Regency%2C%20North%20Sumatra!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
  },

  // 3. DATA SKILL (Hanya Hard Skills & Software Skills, tanpa Soft Skills)
  skills: {
    radarSummary: {
      labels: {
        id: ["Android Dev", "Kotlin", "Jetpack Compose", "Java & Flutter", "Android Studio & Git", "UI/UX & Figma"],
        en: ["Android Dev", "Kotlin", "Jetpack Compose", "Java & Flutter", "Android Studio & Git", "UI/UX & Figma"]
      },
      values: [85, 80, 80, 70, 85, 65]
    },
    items: [
      // Mobile Development (Hard Skills)
      { name: "Android Development", level: 85, category: "mobile", icon: "fa-brands fa-android" },
      { name: "Kotlin", level: 80, category: "mobile", icon: "fa-solid fa-code" },
      { name: "Jetpack Compose", level: 80, category: "mobile", icon: "fa-solid fa-layer-group" },
      { name: "Java", level: 70, category: "mobile", icon: "fa-brands fa-java" },
      { name: "Flutter", level: 60, category: "mobile", icon: "fa-solid fa-mobile-screen-button" },
      { name: "UI/UX Understanding", level: 65, category: "mobile", icon: "fa-solid fa-wand-magic-sparkles" },

      // Tools & Software
      { name: "Android Studio", level: 85, category: "tools", icon: "fa-solid fa-laptop-code" },
      { name: "Git & GitHub", level: 75, category: "tools", icon: "fa-brands fa-git-alt" },
      { name: "Figma", level: 65, category: "tools", icon: "fa-brands fa-figma" }
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
        id: "S1 Teknik Informatika (S.T.)",
        en: "Bachelor of Informatics Engineering (S.T.)"
      },
      institution: "Universitas Islam Sumatera Utara (UISU) — Medan",
      period: "2022 – 2026",
      gpa: "3,79 / 4,00 | TOEFL: 437",
      summary: {
        id: "Judul Skripsi (Aplikasi BitQuest): “Aplikasi Habit Tracker Berbasis Gamifikasi Menggunakan Algoritma Weighted Scoring untuk Meningkatkan Produktivitas Mahasiswa”.",
        en: "Undergraduate Thesis (BitQuest App): “Aplikasi Habit Tracker Berbasis Gamifikasi Menggunakan Algoritma Weighted Scoring untuk Meningkatkan Produktivitas Mahasiswa” (Gamification-Based Habit Tracker App Using Weighted Scoring Algorithm)."
      },
      highlights: {
        id: [
          "Lulusan Sarjana Teknik Informatika (S.T.) dengan IPK 3,79 / 4,00.",
          "Skor TOEFL Prediction Test: 437.",
          "Skripsi (BitQuest): Merancang dan membangun aplikasi Android Habit Tracker berbasis gamifikasi (Kotlin, Jetpack Compose, MVVM, Jetpack DataStore) dengan algoritma Weighted Scoring (UAT 90% Sangat Baik)."
        ],
        en: [
          "Graduated with a Bachelor's degree in Informatics Engineering (S.T.) with a GPA of 3.79 / 4.00.",
          "TOEFL Prediction Test Score: 437.",
          "Thesis (BitQuest): Engineered an Android gamification-based Habit Tracker app (Kotlin, Jetpack Compose, MVVM, Jetpack DataStore) implementing the Weighted Scoring algorithm (90% UAT satisfaction)."
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
    },
    {
      id: "proj-bitquest",
      title: "BitQuest — Aplikasi Habit Tracker Berbasis Gamifikasi",
      category: "mobile",
      categoryLabel: { id: "Aplikasi Android • Skripsi (2026)", en: "Android Application • Thesis (2026)" },
      image: "assets/bitquest-main.jpg",
      gallery: [
        {
          src: "assets/bitquest-main.jpg",
          caption: {
            id: "Tampilan Utama BitQuest: Misi Harian, Status Karakter (Level, Streak, Konsistensi 30 Hari) & Pencapaian (Badges)",
            en: "BitQuest Main Screens: Daily Quests, Character Status (Level, Streak, 30-Day Consistency) & Achievements (Badges)"
          }
        },
        {
          src: "assets/bitquest-gameplay.jpg",
          caption: {
            id: "Eksekusi Misi 100%, Swipe Action, Modal Input Misi (Algoritma Weighted Scoring +10/+30/+50 XP) & Riwayat Petualangan",
            en: "100% Quest Completion, Contextual Swipe, Quest Input Modal (Weighted Scoring +10/+30/+50 XP) & Adventure Log"
          }
        },
        {
          src: "assets/bitquest-customization.jpg",
          caption: {
            id: "Kustomisasi Karakter: Sistem Unlock Avatar Berjenjang, Ubah Nama Profil & Pilihan Gelar Karakter",
            en: "Character Customization: Level-Gated Avatar Unlocks, Profile Name Editor & Character Titles"
          }
        }
      ],
      shortDesc: {
        id: "Aplikasi Android Habit Tracker berbasis gamifikasi RPG menggunakan algoritma Weighted Scoring untuk meningkatkan produktivitas dan konsistensi mahasiswa.",
        en: "RPG-gamified Android Habit Tracker app powered by the Weighted Scoring algorithm to boost student productivity and habit consistency."
      },
      fullDesc: {
        id: "BitQuest adalah aplikasi pelacak kebiasaan (Habit Tracker) native Android berbasis gamifikasi yang dikembangkan menggunakan Kotlin, Jetpack Compose, arsitektur MVVM, dan Jetpack DataStore. Mengimplementasikan Algoritma Weighted Scoring yang memberikan bobot poin pengalaman proporsional berdasarkan tingkat kesulitan tugas (Ringan 1× = +10 XP, Sedang 3× = +30 XP, Berat 5× = +50 XP) guna mendorong penyelesaian tugas prioritas tinggi. Dilengkapi fitur Misi Harian, Status Karakter (Level, EXP Bar, Streak Harian, Grafik Konsistensi 30 Hari), Riwayat Petualangan, Kustomisasi Avatar & Gelar berjenjang, serta 11 Lencana Pencapaian (Badges). Teruji 100% valid pada Black Box Testing dan meraih skor 90% (Sangat Baik) pada pengujian User Acceptance Testing (UAT).",
        en: "BitQuest is a gamified native Android Habit Tracker application built with Kotlin, Jetpack Compose, MVVM architecture, and Jetpack DataStore. It implements the Weighted Scoring Algorithm to award proportional experience points based on task difficulty weights (Light 1× = +10 XP, Medium 3× = +30 XP, Heavy 5× = +50 XP), incentivizing high-priority academic tasks. Key features include Daily Quests, Character Status (Level, EXP Bar, Daily Streak, 30-Day Consistency Heatmap), Adventure History Log, level-gated Avatar & Title customization, and 11 Achievement Badges. Validated with a 100% pass rate on Black Box Testing and a 90% (Excellent) score on User Acceptance Testing (UAT)."
      },
      tech: ["Kotlin", "Jetpack Compose", "MVVM Architecture", "Jetpack DataStore", "Weighted Scoring Algorithm", "Gamification"],
      demoUrl: "https://github.com/AdeAl29",
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
      title: "TOEFL Prediction Test — Skor 437",
      issuer: "English Proficiency Assessment",
      year: "Score: 437",
      credentialUrl: "https://www.linkedin.com/in/ade-alrizal-715899345/",
      icon: "fa-solid fa-language",
      badge: { id: "Sertifikasi Bahasa Inggris (Skor 437)", en: "English Proficiency (Score 437)" }
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
      level: { id: "TOEFL Prediction Score: 437", en: "TOEFL Prediction Score: 437" },
      percent: 80
    }
  ],

  // 9. REFERENSI DOSEN & HIGHLIGHT PENCAPAIAN
  testimonials: [
    {
      name: "Tasliyah Haramaini, S.Si., M.Kom.",
      role: {
        id: "Dosen Universitas Islam Sumatera Utara (UISU) • Telp/WA: 0852-6180-0106",
        en: "Lecturer at Universitas Islam Sumatera Utara (UISU) • Tel/WA: +62 852-6180-0106"
      },
      quote: {
        id: "Referensi Akademik — Program Studi S1 Teknik Informatika, Fakultas Teknik, Universitas Islam Sumatera Utara (UISU).",
        en: "Academic Reference — Informatics Engineering Study Program, Universitas Islam Sumatera Utara (UISU)."
      },
      rating: 5
    },
    {
      name: "Rachmat Aulia, S.Kom., M.Sc.IT.",
      role: {
        id: "Dosen Universitas Islam Sumatera Utara (UISU) • Telp/WA: 0813-1507-3770",
        en: "Lecturer at Universitas Islam Sumatera Utara (UISU) • Tel/WA: +62 813-1507-3770"
      },
      quote: {
        id: "Referensi Akademik — Program Studi S1 Teknik Informatika, Fakultas Teknik, Universitas Islam Sumatera Utara (UISU).",
        en: "Academic Reference — Informatics Engineering Study Program, Universitas Islam Sumatera Utara (UISU)."
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
