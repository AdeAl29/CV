/**
 * ============================================================================
 * LOGIKA UTAMA WEBSITE CV & PORTOFOLIO (js/main.js)
 * ============================================================================
 * Mencakup:
 * 1. Preloader & Inisialisasi Data dari window.PORTFOLIO_DATA
 * 2. Sistem Tema (Dark/Light Mode + localStorage + prefers-color-scheme)
 * 3. Sistem Multi-Bahasa (i18n Indonesia & English)
 * 4. Efek Mengetik (Typed.js dengan fallback native)
 * 5. Background Partikel Interaktif di Hero Canvas
 * 6. Animasi Scroll Reveal & Count-Up Statistik (IntersectionObserver)
 * 7. Grafik RadarChart (Chart.js) & Filter Progress Bar Skill
 * 8. Timeline Pengalaman & Pendidikan Interaktif (Expand/Collapse)
 * 9. Filter Proyek, 3D Hover Tilt, & Modal Detail Proyek (Aksesibel)
 * 10. Slider Testimoni Otomatis & Kontrol Manual
 * 11. Validasi Form Kontak + Integrasi Formspree / Fallback mailto
 * 12. Custom Cursor Halus & Shortcut Keyboard (Easter Egg)
 */

(function () {
  "use strict";

  const DATA = window.PORTFOLIO_DATA;
  if (!DATA) {
    console.error("Data portofolio (js/data.js) tidak ditemukan.");
    return;
  }

  // State Aplikasi
  const state = {
    lang: localStorage.getItem("cv_lang") || DATA.config.defaultLang || "id",
    theme: localStorage.getItem("cv_theme") || getSystemTheme(),
    accentIndex: 0,
    accents: ["default", "emerald", "rose", "violet"],
    skillFilter: "all",
    projectFilter: "all",
    allTimelineExpanded: false,
    testimonialIndex: 0,
    testimonialTimer: null,
    typedInstance: null,
    radarChartInstance: null,
    statsCounted: false
  };

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* --------------------------------------------------------------------------
     UTILITAS UMUM & HELPERS
     -------------------------------------------------------------------------- */
  function getSystemTheme() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  }

  /** Ambil teks sesuai bahasa aktif apabila berupa objek {id, en} */
  function localize(val) {
    if (val && typeof val === "object" && !Array.isArray(val)) {
      return val[state.lang] || val.id || "";
    }
    return val ?? "";
  }

  /** Ambil nilai bersarang dari kamus i18n menggunakan path "nav.home" */
  function t(keyPath) {
    const keys = keyPath.split(".");
    let current = DATA.i18n[state.lang];
    for (const k of keys) {
      if (current && current[k] !== undefined) {
        current = current[k];
      } else {
        return keyPath;
      }
    }
    return current;
  }

  /** Tampilkan notifikasi Toast singkat */
  let toastTimeout = null;
  function showToast(message) {
    const toastEl = document.getElementById("toast");
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add("show");
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toastEl.classList.remove("show");
    }, 2600);
  }

  /* --------------------------------------------------------------------------
     1. TEMA (DARK / LIGHT MODE) & AKSEN WARNA (EASTER EGG)
     -------------------------------------------------------------------------- */
  function applyTheme(theme, notify = false) {
    state.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("cv_theme", theme);

    const icon = document.getElementById("theme-icon");
    if (icon) {
      icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
    }

    // Perbarui warna grafik radar jika sudah dirender
    if (state.radarChartInstance) {
      renderRadarChart();
    }

    if (notify) {
      showToast(theme === "dark" ? t("toast.themeDark") : t("toast.themeLight"));
    }
  }

  function cycleAccentColor() {
    state.accentIndex = (state.accentIndex + 1) % state.accents.length;
    const chosen = state.accents[state.accentIndex];
    if (chosen === "default") {
      document.documentElement.removeAttribute("data-accent");
    } else {
      document.documentElement.setAttribute("data-accent", chosen);
    }
    if (state.radarChartInstance) {
      renderRadarChart();
    }
    showToast(t("toast.easterEgg"));
  }

  /* --------------------------------------------------------------------------
     2. RENDER DATA PROFIL, STATISTIK, & KEMAMPUAN BAHASA
     -------------------------------------------------------------------------- */
  function renderProfileStatic() {
    const p = DATA.profile;

    // Inisial & Nama di Navbar, Hero, Preloader, Footer
    const setText = (id, text) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    };

    setText("preloader-initials", p.initials);
    setText("nav-initials", p.initials);
    setText("footer-initials", p.initials);
    setText("nav-name", p.name);
    setText("hero-name", p.name);
    setText("footer-name", p.name);
    setText("footer-copy-name", p.name);
    setText("footer-year", new Date().getFullYear());

    // Foto & CV Link
    const heroPhoto = document.getElementById("hero-photo");
    if (heroPhoto) {
      heroPhoto.src = p.photo;
      heroPhoto.alt = `Foto Profil ${p.name}`;
    }

    const cvBtn = document.getElementById("hero-download-cv");
    if (cvBtn && DATA.config.cvPdfUrl) {
      cvBtn.href = DATA.config.cvPdfUrl;
    }

    // Kontak dasar
    const emailLink = document.getElementById("about-email");
    const contactEmail = document.getElementById("contact-email");
    if (emailLink) {
      emailLink.textContent = p.email;
      emailLink.href = `mailto:${p.email}`;
    }
    if (contactEmail) {
      contactEmail.textContent = p.email;
      contactEmail.href = `mailto:${p.email}`;
    }

    const waUrl = `https://wa.me/${p.whatsapp}`;
    const contactWa = document.getElementById("contact-wa");
    const contactWaBtn = document.getElementById("contact-wa-btn");
    if (contactWa) {
      contactWa.textContent = p.whatsappDisplay;
      contactWa.href = waUrl;
    }
    if (contactWaBtn) {
      contactWaBtn.href = waUrl;
    }

    const mapIframe = document.getElementById("contact-map");
    if (mapIframe && p.mapEmbedUrl) {
      mapIframe.src = p.mapEmbedUrl;
    }

    // Sosial Media (Hero & Footer)
    const socialsHtml = p.socials
      .map(
        (s) => `
        <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="${s.name}" title="${s.name}">
          <i class="${s.icon}" aria-hidden="true"></i>
        </a>`
      )
      .join("");

    const heroSocials = document.getElementById("hero-socials");
    const footerSocials = document.getElementById("footer-socials");
    if (heroSocials) heroSocials.innerHTML = socialsHtml;
    if (footerSocials) footerSocials.innerHTML = socialsHtml;
  }

  function renderLocalizedProfile() {
    const p = DATA.profile;

    const cvBtn = document.getElementById("hero-download-cv");
    if (cvBtn) {
      const pdfByLang = DATA.config.cvPdfUrlByLang && DATA.config.cvPdfUrlByLang[state.lang];
      cvBtn.href = pdfByLang || DATA.config.cvPdfUrl || "assets/Ade Alrizal.pdf";
    }

    const taglineEl = document.getElementById("hero-tagline");
    if (taglineEl) taglineEl.textContent = localize(p.tagline);

    // Paragraf Tentang Saya
    const aboutContainer = document.getElementById("about-paragraphs");
    if (aboutContainer) {
      const paragraphs = localize(p.about) || [];
      aboutContainer.innerHTML = paragraphs.map((para) => `<p>${para}</p>`).join("");
    }

    const ageEl = document.getElementById("about-age");
    if (ageEl) ageEl.textContent = `${p.age}${t("about.ageSuffix")}`;

    const locText = localize(p.location);
    const aboutLoc = document.getElementById("about-location");
    const contactLoc = document.getElementById("contact-location");
    if (aboutLoc) aboutLoc.textContent = locText;
    if (contactLoc) contactLoc.textContent = locText;

    const statusEl = document.getElementById("about-status");
    if (statusEl) statusEl.textContent = localize(p.status);

    // Statistik Count-Up
    const statsGrid = document.getElementById("stats-grid");
    if (statsGrid) {
      statsGrid.innerHTML = p.stats
        .map(
          (st) => `
          <div class="stat-card glass-card tilt-card">
            <div class="stat-card__number">
              <span class="stat-counter" data-target="${st.value}" data-display="${st.displayValue || ""}">${
                state.statsCounted ? (st.displayValue || st.value) : 0
              }</span>${st.suffix || ""}
            </div>
            <div class="stat-card__label">${localize(st.label)}</div>
          </div>`
        )
        .join("");
    }

    // Kemampuan Bahasa
    const langList = document.getElementById("languages-list");
    if (langList) {
      langList.innerHTML = DATA.languages
        .map(
          (l) => `
          <div class="lang-item">
            <div class="lang-item__header">
              <span class="lang-item__name">${localize(l.name)}</span>
              <span class="lang-item__level">${localize(l.level)}</span>
            </div>
            <div class="lang-item__bar">
              <div class="lang-item__fill" style="width: ${l.percent}%"></div>
            </div>
          </div>`
        )
        .join("");
    }
  }

  /* --------------------------------------------------------------------------
     3. EFEK MENGETIK (TYPED.JS DENGAN FALLBACK NATIVE)
     -------------------------------------------------------------------------- */
  function initTypedRoles() {
    const target = document.getElementById("typed-role");
    if (!target) return;

    const strings = localize(DATA.profile.roles) || ["Web Developer"];

    if (state.typedInstance) {
      state.typedInstance.destroy();
      state.typedInstance = null;
    }

    if (window.Typed && !prefersReducedMotion) {
      state.typedInstance = new window.Typed("#typed-role", {
        strings: strings,
        typeSpeed: 55,
        backSpeed: 32,
        backDelay: 1900,
        loop: true,
        smartBackspace: true
      });
    } else {
      target.textContent = strings[0];
    }
  }

  /* --------------------------------------------------------------------------
     4. SKILL SECTION (CHART.JS RADAR & PROGRESS BARS)
     -------------------------------------------------------------------------- */
  function renderRadarChart() {
    const canvas = document.getElementById("skillsRadarChart");
    if (!canvas || !window.Chart) return;

    const style = getComputedStyle(document.documentElement);
    const accentPrimary = style.getPropertyValue("--accent-primary").trim() || "#6366f1";
    const accentRgb = style.getPropertyValue("--accent-rgb").trim() || "99, 102, 241";
    const textSecondary = style.getPropertyValue("--text-secondary").trim() || "#cbd5e1";
    const borderColor = style.getPropertyValue("--border-color").trim() || "rgba(148,163,184,0.2)";

    const labels = localize(DATA.skills.radarSummary.labels);
    const values = DATA.skills.radarSummary.values;

    if (state.radarChartInstance) {
      state.radarChartInstance.destroy();
    }

    state.radarChartInstance = new window.Chart(canvas, {
      type: "radar",
      data: {
        labels: labels,
        datasets: [
          {
            label: t("skills.title"),
            data: values,
            backgroundColor: `rgba(${accentRgb}, 0.22)`,
            borderColor: accentPrimary,
            pointBackgroundColor: accentPrimary,
            pointBorderColor: "#ffffff",
            pointHoverBackgroundColor: "#ffffff",
            pointHoverBorderColor: accentPrimary,
            borderWidth: 2.5,
            pointRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          r: {
            min: 0,
            max: 100,
            BeginAtZero: true,
            ticks: {
              stepSize: 20,
              display: false
            },
            grid: {
              color: borderColor
            },
            angleLines: {
              color: borderColor
            },
            pointLabels: {
              color: textSecondary,
              font: {
                family: "'Inter', sans-serif",
                size: 11,
                weight: "600"
              }
            }
          }
        }
      }
    });
  }

  function renderSkillsBars() {
    const container = document.getElementById("skills-bars-container");
    if (!container) return;

    const filtered = DATA.skills.items.filter(
      (item) => state.skillFilter === "all" || item.category === state.skillFilter
    );

    container.innerHTML = filtered
      .map(
        (skill) => `
        <div class="skill-item">
          <div class="skill-item__top">
            <span class="skill-item__title">
              <i class="${skill.icon}" aria-hidden="true"></i>
              <span>${localize(skill.name)}</span>
            </span>
            <span class="skill-item__percent">${skill.level}%</span>
          </div>
          <div class="skill-item__track" role="progressbar" aria-valuenow="${skill.level}" aria-valuemin="0" aria-valuemax="100" aria-label="${localize(skill.name)}">
            <div class="skill-item__bar" data-width="${skill.level}%"></div>
          </div>
        </div>`
      )
      .join("");

    // Animasi lebar bar setelah render
    requestAnimationFrame(() => {
      container.querySelectorAll(".skill-item__bar").forEach((bar) => {
        bar.style.width = bar.getAttribute("data-width");
      });
    });
  }

  /* --------------------------------------------------------------------------
     5. PENGALAMAN & PENDIDIKAN (TIMELINE INTERAKTIF)
     -------------------------------------------------------------------------- */
  function renderTimelines() {
    const expContainer = document.getElementById("experience-timeline");
    const eduContainer = document.getElementById("education-timeline");

    if (expContainer) {
      expContainer.innerHTML = DATA.experience
        .map((item, idx) => {
          const isExpanded = state.allTimelineExpanded || idx === 0;
          const highlights = localize(item.highlights) || [];
          return `
            <article class="timeline__item glass-card ${isExpanded ? "expanded" : ""}" data-timeline-card>
              <span class="timeline__dot" aria-hidden="true"></span>
              <span class="timeline__period">${localize(item.period)}</span>
              <h4 class="timeline__title">${localize(item.role)}</h4>
              <div class="timeline__subtitle">${item.company} &bull; ${item.location}</div>
              <p class="timeline__summary">${localize(item.summary)}</p>
              <button type="button" class="timeline__toggle" aria-expanded="${isExpanded}">
                <span class="timeline__toggle-text">${isExpanded ? t("resume.collapseBtn") : t("resume.expandBtn")}</span>
                <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
              </button>
              <div class="timeline__details">
                <ul class="timeline__list">
                  ${highlights.map((h) => `<li>${h}</li>`).join("")}
                </ul>
              </div>
            </article>`;
        })
        .join("");
    }

    if (eduContainer) {
      eduContainer.innerHTML = DATA.education
        .map((edu, idx) => {
          const isExpanded = state.allTimelineExpanded || idx === 0;
          const highlights = localize(edu.highlights) || [];
          return `
            <article class="timeline__item glass-card ${isExpanded ? "expanded" : ""}" data-timeline-card>
              <span class="timeline__dot" aria-hidden="true"></span>
              <span class="timeline__period">${edu.period}</span>
              <h4 class="timeline__title">${localize(edu.degree)}</h4>
              <div class="timeline__subtitle">${edu.institution} &bull; <strong>${t("resume.gpaLabel")} ${edu.gpa}</strong></div>
              <p class="timeline__summary">${localize(edu.summary)}</p>
              <button type="button" class="timeline__toggle" aria-expanded="${isExpanded}">
                <span class="timeline__toggle-text">${isExpanded ? t("resume.collapseBtn") : t("resume.expandBtn")}</span>
                <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
              </button>
              <div class="timeline__details">
                <ul class="timeline__list">
                  ${highlights.map((h) => `<li>${h}</li>`).join("")}
                </ul>
              </div>
            </article>`;
        })
        .join("");
    }
  }

  /* --------------------------------------------------------------------------
     6. PROYEK / PORTOFOLIO & MODAL DETAIL
     -------------------------------------------------------------------------- */
  function renderProjects() {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    const filtered = DATA.projects.filter(
      (p) => state.projectFilter === "all" || p.category === state.projectFilter
    );

    grid.innerHTML = filtered
      .map(
        (proj) => `
        <article class="project-card glass-card tilt-card">
          <div class="project-card__img-wrap">
            <img
              src="${proj.image}"
              alt="${proj.title}"
              class="project-card__img"
              loading="lazy"
              width="600"
              height="375"
            />
            <span class="project-card__badge">${localize(proj.categoryLabel)}</span>
          </div>
          <div class="project-card__body">
            <h3 class="project-card__title">${proj.title}</h3>
            <p class="project-card__desc">${localize(proj.shortDesc)}</p>
            ${
              proj.gallery && proj.gallery.length > 1
                ? `<div class="project-card__thumbs" aria-label="Galeri Foto Proyek">
                    ${proj.gallery
                      .map(
                        (g, idx) => `
                        <button type="button" class="project-thumb ${idx === 0 ? "active" : ""}" data-preview-src="${g.src}" title="${localize(g.caption)}">
                          <img src="${g.src}" alt="${localize(g.caption)}" loading="lazy" />
                        </button>`
                      )
                      .join("")}
                   </div>`
                : ""
            }
            <div class="project-card__tags">
              ${proj.tech.slice(0, 4).map((tg) => `<span class="tech-tag">${tg}</span>`).join("")}
            </div>
            <div class="project-card__footer">
              <button type="button" class="btn btn--sm btn--ghost" data-open-modal="${proj.id}">
                <i class="fa-solid fa-expand" aria-hidden="true"></i>
                <span>${t("projects.viewDetail")}</span>
              </button>
              <div class="project-card__links">
                <a href="${proj.demoUrl}" target="_blank" rel="noopener noreferrer" class="action-btn" aria-label="${t("projects.liveDemo")} ${proj.title}" title="${t("projects.liveDemo")}">
                  <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                </a>
                <a href="${proj.repoUrl}" target="_blank" rel="noopener noreferrer" class="action-btn" aria-label="${t("projects.sourceCode")} ${proj.title}" title="${t("projects.sourceCode")}">
                  <i class="fa-brands fa-github" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </article>`
      )
      .join("");

    initTiltCards();
  }

  function openProjectModal(projectId) {
    const proj = DATA.projects.find((p) => p.id === projectId);
    if (!proj) return;

    const modal = document.getElementById("project-modal");
    const modalImg = document.getElementById("modal-image");
    const galleryEl = document.getElementById("modal-gallery");

    modalImg.src = proj.image;
    modalImg.alt = proj.title;
    document.getElementById("modal-category").textContent = localize(proj.categoryLabel);
    document.getElementById("modal-title").textContent = proj.title;
    document.getElementById("modal-desc").textContent = localize(proj.fullDesc);
    document.getElementById("modal-tech").innerHTML = proj.tech
      .map((tg) => `<span class="tech-tag">${tg}</span>`)
      .join("");
    document.getElementById("modal-demo").href = proj.demoUrl;
    document.getElementById("modal-repo").href = proj.repoUrl;

    if (galleryEl) {
      if (proj.gallery && proj.gallery.length > 1) {
        galleryEl.innerHTML = proj.gallery
          .map(
            (g, idx) => `
            <button type="button" class="modal__gallery-btn ${idx === 0 ? "active" : ""}" data-modal-img="${g.src}" data-modal-caption="${localize(g.caption)}">
              <img src="${g.src}" alt="${localize(g.caption)}" loading="lazy" />
              <span>${localize(g.caption)}</span>
            </button>`
          )
          .join("");
        galleryEl.style.display = "grid";
      } else {
        galleryEl.innerHTML = "";
        galleryEl.style.display = "none";
      }
    }

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    document.getElementById("modal-close").focus();
  }

  function closeProjectModal() {
    const modal = document.getElementById("project-modal");
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  /* --------------------------------------------------------------------------
     7. SERTIFIKASI & PENGHARGAAN
     -------------------------------------------------------------------------- */
  function renderCertifications() {
    const grid = document.getElementById("certs-grid");
    if (!grid) return;

    grid.innerHTML = DATA.certifications
      .map(
        (c) => `
        <article class="cert-card glass-card tilt-card">
          <div class="cert-card__header">
            <div class="cert-card__icon"><i class="${c.icon}" aria-hidden="true"></i></div>
            <span class="cert-card__year">${c.year}</span>
          </div>
          <span class="cert-card__badge">${localize(c.badge)}</span>
          <h3 class="cert-card__title">${c.title}</h3>
          <p class="cert-card__issuer">${c.issuer}</p>
          <a href="${c.credentialUrl}" target="_blank" rel="noopener noreferrer" class="cert-card__link">
            <span>${t("certs.verifyBtn")}</span>
            <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </a>
        </article>`
      )
      .join("");

    initTiltCards();
  }

  /* --------------------------------------------------------------------------
     8. TESTIMONI SLIDER OTOMATIS
     -------------------------------------------------------------------------- */
  function renderTestimonials() {
    const track = document.getElementById("testimonial-track");
    const dots = document.getElementById("testi-dots");
    if (!track || !dots) return;

    track.innerHTML = DATA.testimonials
      .map((item, idx) => {
        const stars = Array.from({ length: item.rating || 5 })
          .map(() => `<i class="fa-solid fa-star" aria-hidden="true"></i>`)
          .join(" ");
        return `
          <div class="testimonial-slide ${idx === state.testimonialIndex ? "active" : ""}" data-slide="${idx}">
            <div class="testimonial__stars" aria-label="Rating ${item.rating} dari 5 bintang">${stars}</div>
            <blockquote class="testimonial__quote">&ldquo;${localize(item.quote)}&rdquo;</blockquote>
            <div class="testimonial__author">${item.name}</div>
            <div class="testimonial__role">${localize(item.role)}</div>
          </div>`;
      })
      .join("");

    dots.innerHTML = DATA.testimonials
      .map(
        (_, idx) => `
        <button
          type="button"
          class="slider-dot ${idx === state.testimonialIndex ? "active" : ""}"
          data-slide-to="${idx}"
          role="tab"
          aria-selected="${idx === state.testimonialIndex}"
          aria-label="Slide ${idx + 1}"
        ></button>`
      )
      .join("");
  }

  function showTestimonial(index) {
    const total = DATA.testimonials.length;
    state.testimonialIndex = (index + total) % total;

    document.querySelectorAll(".testimonial-slide").forEach((slide, idx) => {
      slide.classList.toggle("active", idx === state.testimonialIndex);
    });

    document.querySelectorAll(".slider-dot").forEach((dot, idx) => {
      const active = idx === state.testimonialIndex;
      dot.classList.toggle("active", active);
      dot.setAttribute("aria-selected", active);
    });
  }

  function startTestimonialAutoPlay() {
    clearInterval(state.testimonialTimer);
    if (prefersReducedMotion) return;
    state.testimonialTimer = setInterval(() => {
      showTestimonial(state.testimonialIndex + 1);
    }, 5500);
  }

  /* --------------------------------------------------------------------------
     9. SISTEM BAHASA (i18n)
     -------------------------------------------------------------------------- */
  function applyLanguage(lang, notify = false) {
    state.lang = lang;
    localStorage.setItem("cv_lang", lang);
    document.documentElement.setAttribute("lang", lang);

    const langLabel = document.getElementById("lang-label");
    if (langLabel) {
      langLabel.textContent = lang.toUpperCase();
    }

    // Sesuaikan link Download CV sesuai bahasa (Ade Alrizal.pdf untuk ID, CV - 2.0.pdf untuk EN)
    const cvBtn = document.getElementById("hero-download-cv");
    if (cvBtn && DATA.config.cvPdfUrlByLang && DATA.config.cvPdfUrlByLang[lang]) {
      cvBtn.href = DATA.config.cvPdfUrlByLang[lang];
    }

    // Terjemahkan semua elemen statis dengan atribut data-i18n
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.textContent = t(key);
    });

    // Terjemahkan placeholder input form
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      el.setAttribute("placeholder", t(key));
    });

    // Render ulang komponen dinamis
    renderLocalizedProfile();
    initTypedRoles();
    renderRadarChart();
    renderSkillsBars();
    renderTimelines();
    renderProjects();
    renderCertifications();
    renderTestimonials();

    // Update teks tombol Buka/Tutup Semua Timeline
    const toggleAllText = document.getElementById("toggle-all-timeline-text");
    if (toggleAllText) {
      toggleAllText.textContent = state.allTimelineExpanded
        ? t("resume.collapseAll")
        : t("resume.expandAll");
    }

    if (notify) {
      showToast(t("toast.langChanged"));
    }
  }

  /* --------------------------------------------------------------------------
     10. ANIMASI SCROLL REVEAL & COUNT-UP STATISTIK
     -------------------------------------------------------------------------- */
  function initScrollRevealAndCounters() {
    const revealEls = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window) || prefersReducedMotion) {
      revealEls.forEach((el) => el.classList.add("revealed"));
      runCounterAnimation();
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealEls.forEach((el) => revealObserver.observe(el));

    // Observer khusus Statistik Count-Up
    const statsGrid = document.getElementById("stats-grid");
    if (statsGrid) {
      const statsObserver = new IntersectionObserver(
        (entries, obs) => {
          if (entries[0].isIntersecting && !state.statsCounted) {
            state.statsCounted = true;
            runCounterAnimation();
            obs.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      statsObserver.observe(statsGrid);
    }
  }

  function runCounterAnimation() {
    const counters = document.querySelectorAll(".stat-counter");
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute("data-target"), 10) || 0;
      const finalDisplay = counter.getAttribute("data-display");
      if (prefersReducedMotion) {
        counter.textContent = finalDisplay || target;
        return;
      }
      const duration = 1400;
      const startTime = performance.now();

      function updateCount(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // Ease-out cubic
        const currentVal = Math.floor(eased * target);
        if (progress < 1) {
          counter.textContent = finalDisplay ? (currentVal / 100).toFixed(2) : currentVal;
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = finalDisplay || target;
        }
      }
      requestAnimationFrame(updateCount);
    });
  }

  /* --------------------------------------------------------------------------
     11. EFEK HOVER 3D TILT PADA KARTU
     -------------------------------------------------------------------------- */
  function initTiltCards() {
    if (prefersReducedMotion || !window.matchMedia("(hover: hover)").matches) return;

    const cards = document.querySelectorAll(".tilt-card");
    cards.forEach((card) => {
      if (card.dataset.tiltBound) return;
      card.dataset.tiltBound = "true";

      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;
        card.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-3px)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }

  /* --------------------------------------------------------------------------
     12. BACKGROUND PARTIKEL HERO (CANVAS RINGAN)
     -------------------------------------------------------------------------- */
  function initHeroParticles() {
    const canvas = document.getElementById("hero-particles");
    if (!canvas || prefersReducedMotion) return;

    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particleCount = Math.min(Math.floor(width / 28), 45);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45
    }));

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    function draw() {
      ctx.clearRect(0, 0, width, height);
      const accentRgb =
        getComputedStyle(document.documentElement).getPropertyValue("--accent-rgb").trim() ||
        "99, 102, 241";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${accentRgb}, 0.45)`;
        ctx.fill();

        // Garis penghubung antar partikel dekat
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${accentRgb}, ${0.14 * (1 - dist / 130)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
  }

  /* --------------------------------------------------------------------------
     13. CUSTOM CURSOR HALUS (DESKTOP)
     -------------------------------------------------------------------------- */
  function initCustomCursor() {
    const dot = document.getElementById("cursor-dot");
    const outline = document.getElementById("cursor-outline");
    if (!dot || !outline || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let outlineX = mouseX;
    let outlineY = mouseY;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    });

    function animateCursor() {
      outlineX += (mouseX - outlineX) * 0.18;
      outlineY += (mouseY - outlineY) * 0.18;
      outline.style.left = `${outlineX}px`;
      outline.style.top = `${outlineY}px`;
      requestAnimationFrame(animateCursor);
    }
    requestAnimationFrame(animateCursor);

    document.addEventListener("mouseover", (e) => {
      if (e.target.closest("a, button, input, textarea, .tilt-card")) {
        outline.classList.add("cursor-hover");
      }
    });

    document.addEventListener("mouseout", (e) => {
      if (e.target.closest("a, button, input, textarea, .tilt-card")) {
        outline.classList.remove("cursor-hover");
      }
    });
  }

  /* --------------------------------------------------------------------------
     14. VALIDASI FORM KONTAK & INTEGRASI FORMSPREE / FALLBACK MAILTO
     -------------------------------------------------------------------------- */
  function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    const fields = {
      name: document.getElementById("name"),
      email: document.getElementById("email"),
      subject: document.getElementById("subject"),
      message: document.getElementById("message")
    };

    const errors = {
      name: document.getElementById("error-name"),
      email: document.getElementById("error-email"),
      subject: document.getElementById("error-subject"),
      message: document.getElementById("error-message")
    };

    const statusEl = document.getElementById("form-status");

    function validate() {
      let valid = true;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Nama
      if (fields.name.value.trim().length < 2) {
        errors.name.textContent = t("contact.errName");
        fields.name.classList.add("invalid");
        valid = false;
      } else {
        errors.name.textContent = "";
        fields.name.classList.remove("invalid");
      }

      // Email
      if (!emailRegex.test(fields.email.value.trim())) {
        errors.email.textContent = t("contact.errEmail");
        fields.email.classList.add("invalid");
        valid = false;
      } else {
        errors.email.textContent = "";
        fields.email.classList.remove("invalid");
      }

      // Subjek
      if (fields.subject.value.trim().length < 2) {
        errors.subject.textContent = t("contact.errSubject");
        fields.subject.classList.add("invalid");
        valid = false;
      } else {
        errors.subject.textContent = "";
        fields.subject.classList.remove("invalid");
      }

      // Pesan
      if (fields.message.value.trim().length < 10) {
        errors.message.textContent = t("contact.errMessage");
        fields.message.classList.add("invalid");
        valid = false;
      } else {
        errors.message.textContent = "";
        fields.message.classList.remove("invalid");
      }

      return valid;
    }

    // Hapus pesan error saat pengguna mengetik ulang
    Object.keys(fields).forEach((key) => {
      fields[key].addEventListener("input", () => {
        fields[key].classList.remove("invalid");
        errors[key].textContent = "";
      });
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      statusEl.textContent = "";
      statusEl.className = "form__status";

      if (!validate()) return;

      const endpoint = DATA.config.formspreeEndpoint || "/api/contact";
      const payload = {
        name: fields.name.value.trim(),
        email: fields.email.value.trim(),
        subject: fields.subject.value.trim(),
        message: fields.message.value.trim()
      };

      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload)
        });
        if (res.ok) {
          statusEl.textContent = t("contact.successMsg");
          statusEl.classList.add("success");
          form.reset();
        } else {
          triggerMailtoFallback(payload);
        }
      } catch {
        triggerMailtoFallback(payload);
      }
    });

    function triggerMailtoFallback(data) {
      const mailtoUrl = `mailto:${DATA.profile.email}?subject=${encodeURIComponent(
        data.subject
      )}&body=${encodeURIComponent(
        `Halo ${DATA.profile.name},\n\nNama: ${data.name}\nEmail: ${data.email}\n\nPesan:\n${data.message}`
      )}`;
      window.location.href = mailtoUrl;
      statusEl.textContent = t("contact.successMsg");
      statusEl.classList.add("success");
      form.reset();
    }
  }

  /* --------------------------------------------------------------------------
     15. EVENT LISTENERS NAVIGASI, SCROLL SPY, & INTERAKSI GLOBAL
     -------------------------------------------------------------------------- */
  function bindEvents() {
    const header = document.getElementById("header");
    const navMenu = document.getElementById("nav-menu");
    const navToggle = document.getElementById("nav-toggle");
    const progressBar = document.getElementById("scroll-progress-bar");
    const backToTop = document.getElementById("back-to-top");
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(".nav__link");

    // Hamburger Mobile Menu
    if (navToggle && navMenu) {
      navToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");
        navToggle.classList.toggle("active", isOpen);
        navToggle.setAttribute("aria-expanded", String(isOpen));
      });

      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          navMenu.classList.remove("open");
          navToggle.classList.remove("active");
          navToggle.setAttribute("aria-expanded", "false");
        });
      });
    }

    // Scroll Event: Sticky Header, Scroll Progress Bar, Active Nav Spy, Back-to-top
    window.addEventListener(
      "scroll",
      () => {
        const scrollY = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

        if (progressBar) {
          progressBar.style.width = `${pct}%`;
        }

        if (header) {
          header.classList.toggle("scrolled", scrollY > 30);
        }

        if (backToTop) {
          backToTop.classList.toggle("visible", scrollY > 450);
        }

        // Scroll Spy Active Link
        let currentSectionId = "home";
        sections.forEach((sec) => {
          const top = sec.offsetTop - 130;
          const height = sec.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            currentSectionId = sec.getAttribute("id");
          }
        });

        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${currentSectionId}`);
        });
      },
      { passive: true }
    );

    // Toggle Tema, Bahasa, Aksen Warna, dan Cetak CV
    document.getElementById("theme-toggle")?.addEventListener("click", () => {
      applyTheme(state.theme === "dark" ? "light" : "dark", true);
    });

    document.getElementById("lang-toggle")?.addEventListener("click", () => {
      applyLanguage(state.lang === "id" ? "en" : "id", true);
    });

    document.getElementById("accent-toggle")?.addEventListener("click", () => {
      cycleAccentColor();
    });

    document.getElementById("print-cv-btn")?.addEventListener("click", () => {
      window.print();
    });

    // Filter Tab Skill
    document.getElementById("skills-tabs")?.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-skill-filter]");
      if (!btn) return;
      state.skillFilter = btn.getAttribute("data-skill-filter");
      document.querySelectorAll("#skills-tabs .filter-btn").forEach((b) => {
        const active = b === btn;
        b.classList.toggle("active", active);
        b.setAttribute("aria-selected", String(active));
      });
      renderSkillsBars();
    });

    // Filter Tab Proyek
    document.getElementById("projects-tabs")?.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-project-filter]");
      if (!btn) return;
      state.projectFilter = btn.getAttribute("data-project-filter");
      document.querySelectorAll("#projects-tabs .filter-btn").forEach((b) => {
        const active = b === btn;
        b.classList.toggle("active", active);
        b.setAttribute("aria-selected", String(active));
      });
      renderProjects();
    });

    // Delegasi Klik untuk Expand/Collapse Timeline & Buka Modal Proyek
    document.addEventListener("click", (e) => {
      const timelineToggle = e.target.closest(".timeline__toggle");
      if (timelineToggle) {
        const card = timelineToggle.closest("[data-timeline-card]");
        if (card) {
          const expanded = card.classList.toggle("expanded");
          timelineToggle.setAttribute("aria-expanded", String(expanded));
          const textSpan = timelineToggle.querySelector(".timeline__toggle-text");
          if (textSpan) {
            textSpan.textContent = expanded ? t("resume.collapseBtn") : t("resume.expandBtn");
          }
        }
      }

      const openModalBtn = e.target.closest("[data-open-modal]");
      if (openModalBtn) {
        openProjectModal(openModalBtn.getAttribute("data-open-modal"));
      }

      // Ganti foto preview langsung pada kartu proyek
      const thumbBtn = e.target.closest("[data-preview-src]");
      if (thumbBtn) {
        const card = thumbBtn.closest(".project-card");
        const mainImg = card?.querySelector(".project-card__img");
        if (mainImg) {
          mainImg.src = thumbBtn.getAttribute("data-preview-src");
          card.querySelectorAll(".project-thumb").forEach((b) => b.classList.toggle("active", b === thumbBtn));
        }
      }

      // Ganti foto preview di dalam Modal Detail Proyek
      const modalGalleryBtn = e.target.closest("[data-modal-img]");
      if (modalGalleryBtn) {
        const modalImg = document.getElementById("modal-image");
        if (modalImg) {
          modalImg.src = modalGalleryBtn.getAttribute("data-modal-img");
          modalImg.alt = modalGalleryBtn.getAttribute("data-modal-caption") || "";
        }
        document.querySelectorAll(".modal__gallery-btn").forEach((b) =>
          b.classList.toggle("active", b === modalGalleryBtn)
        );
      }
    });

    // Tombol Buka/Tutup Semua Timeline
    document.getElementById("toggle-all-timeline")?.addEventListener("click", () => {
      state.allTimelineExpanded = !state.allTimelineExpanded;
      renderTimelines();
      const toggleAllText = document.getElementById("toggle-all-timeline-text");
      if (toggleAllText) {
        toggleAllText.textContent = state.allTimelineExpanded
          ? t("resume.collapseAll")
          : t("resume.expandAll");
      }
    });

    // Tutup Modal Proyek
    document.getElementById("modal-close")?.addEventListener("click", closeProjectModal);
    document.getElementById("modal-overlay")?.addEventListener("click", closeProjectModal);

    // Kontrol Slider Testimoni
    document.getElementById("testi-prev")?.addEventListener("click", () => {
      showTestimonial(state.testimonialIndex - 1);
      startTestimonialAutoPlay();
    });
    document.getElementById("testi-next")?.addEventListener("click", () => {
      showTestimonial(state.testimonialIndex + 1);
      startTestimonialAutoPlay();
    });
    document.getElementById("testi-dots")?.addEventListener("click", (e) => {
      const dot = e.target.closest("[data-slide-to]");
      if (!dot) return;
      showTestimonial(parseInt(dot.getAttribute("data-slide-to"), 10));
      startTestimonialAutoPlay();
    });

    // Easter Egg & Shortcut Keyboard (T = Tema, L = Bahasa, C = Warna Aksen, Esc = Tutup Modal)
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeProjectModal();
      }
      const tag = document.activeElement?.tagName.toLowerCase();
      if (tag === "input" || tag === "textarea" || e.ctrlKey || e.metaKey || e.altKey) {
        return;
      }
      if (e.key.toLowerCase() === "t") {
        applyTheme(state.theme === "dark" ? "light" : "dark", true);
      } else if (e.key.toLowerCase() === "l") {
        applyLanguage(state.lang === "id" ? "en" : "id", true);
      } else if (e.key.toLowerCase() === "c") {
        cycleAccentColor();
      }
    });
  }

  /* --------------------------------------------------------------------------
     16. SINKRONISASI DATA PORTOFOLIO DENGAN NETLIFY DATABASE (/api/portfolio)
     -------------------------------------------------------------------------- */
  async function syncPortfolioDatabase() {
    try {
      const res = await fetch("/api/portfolio", {
        headers: { Accept: "application/json" }
      });
      if (!res.ok) return;
      const result = await res.json();

      if (result && result.portfolio && result.portfolio.profile) {
        // Muat data terbaru dari Netlify Database
        Object.assign(DATA, result.portfolio);
        renderProfileStatic();
        applyLanguage(state.lang, false);
      } else {
        // Seed otomatis data awal dari js/data.js ke Netlify Database jika tabel masih kosong
        await fetch("/api/portfolio", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            profile: DATA.profile,
            skills: DATA.skills,
            experience: DATA.experience,
            education: DATA.education,
            projects: DATA.projects,
            certifications: DATA.certifications,
            languages: DATA.languages,
            testimonials: DATA.testimonials
          })
        });
      }
    } catch {
      // Berjalan secara lokal via file:// atau belum ada koneksi fungsi: tetap gunakan js/data.js
    }
  }

  /* --------------------------------------------------------------------------
     17. INISIALISASI SAAT DOM SIAP
     -------------------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderProfileStatic();
    applyTheme(state.theme, false);
    applyLanguage(state.lang, false);
    bindEvents();
    initScrollRevealAndCounters();
    initHeroParticles();
    initCustomCursor();
    initContactForm();
    startTestimonialAutoPlay();
    syncPortfolioDatabase();

    // Sembunyikan Preloader singkat
    const preloader = document.getElementById("preloader");
    if (preloader) {
      setTimeout(() => {
        preloader.classList.add("hidden");
      }, 450);
    }
  });
})();

