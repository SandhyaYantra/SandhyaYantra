/* ==========================================================================
   SANDHYA YANTRA - UNIVERSAL APPLE LIQUID GLASS SCRIPT (SCRIPT.JS)
   Theme Switcher, Contact Form Handler & Touch/Mouse Spotlight Glow
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initContactForm();
  initSpotlightGlowEffect();
});

/* ==========================================================================\n+   2. LANGUAGE SWITCHER (INDONESIAN / ENGLISH WITH LOCALSTORAGE)\n+   ========================================================================== */
function initLanguage() {
  const languageToggleBtn = document.getElementById('languageToggleBtn');
  const idTranslations = {
    Home: 'Beranda', Personal: 'Personal', Labs: 'Lab', Story: 'Cerita', Contact: 'Kontak',
    Portfolio: 'Portofolio', 'Future Projects': 'Proyek Mendatang',
    'Personal Profile': 'Profil Personal', 'SandhyaYantra Labs': 'SandhyaYantra Labs',
    'My Story': 'Cerita Saya', 'Project Portfolio': 'Portofolio Proyek',
    'From Wok Stations to Workstations': 'Dari Stasiun Wok ke Workstation',
    'Connect With Me': 'Hubungi Saya', 'Change language': 'Ganti bahasa', 'Ganti bahasa': 'Ubah bahasa',
    'Main Navigation': 'Navigasi Utama', 'About & Background': 'Tentang & Latar Belakang',
    'Selected Works': 'Karya Pilihan', 'Career Narrative': 'Kisah Karier',
    'Innovation & Engineering': 'Inovasi & Rekayasa', 'Vision & Roadmap': 'Visi & Peta Jalan',
    'The story, technical foundations, and philosophy of a culinary craftsman transitioning into frontend web development.': 'Kisah, fondasi teknis, dan filosofi seorang perajin kuliner yang beralih ke pengembangan web frontend.',
    'A curated showcase of responsive web applications, design systems, and frontend interfaces engineered with precision and clean architecture.': 'Kumpulan pilihan aplikasi web responsif, sistem desain, dan antarmuka frontend yang dibuat dengan presisi dan arsitektur bersih.',
    'How years of high-heat culinary execution, relentless timing, and brigade discipline shaped my transition into modern software engineering.': 'Bagaimana pengalaman bertahun-tahun memasak dengan panas tinggi, ketepatan waktu, dan disiplin brigade membentuk peralihan saya ke rekayasa perangkat lunak modern.',
    'The digital workshop and experimental studio dedicated to clean web engineering, responsive architectures, and zero-spaghetti code.': 'Bengkel digital dan studio eksperimen untuk rekayasa web yang bersih, arsitektur responsif, dan kode tanpa spaghetti.',
    'Upcoming experimental prototypes, developer tools, and architectural explorations currently in the pipeline at SandhyaYantra Labs.': 'Prototipe eksperimen, alat pengembang, dan eksplorasi arsitektur yang sedang direncanakan di SandhyaYantra Labs.',
    'From High-Heat Kitchens to Clean Code': 'Dari Dapur Panas ke Kode Bersih',
    'Current Focus & Ambitions': 'Fokus & Ambisi Saat Ini', 'Skills & Technical Foundations': 'Keahlian & Fondasi Teknis',
    'Frontend Development': 'Pengembangan Frontend', 'Culinary & Professional Strengths': 'Keahlian Kuliner & Profesional',
    'Developer Workstation Goal': 'Target Workstation Pengembang', 'Continuous Skill Acquisition': 'Pengembangan Keahlian Berkelanjutan',
    'Explore SandhyaYantra Labs': 'Jelajahi SandhyaYantra Labs', 'Read Full Transition Story': 'Baca Kisah Peralihan Lengkap',
    'Contact Me': 'Hubungi Saya', 'View Details': 'Lihat Detail', 'View Landing Page': 'Lihat Halaman Utama',
    'Read Architecture': 'Baca Arsitektur', 'View in Labs': 'Lihat di Lab', 'Learn More': 'Pelajari Lebih Lanjut',
    'Visit SandhyaYantra Labs': 'Kunjungi SandhyaYantra Labs', 'View Personal Profile': 'Lihat Profil Personal',
    'Get in Touch': 'Hubungi Saya', 'Explore Active Portfolio': 'Jelajahi Portofolio Aktif',
    'Propose a Collaboration': 'Ajukan Kolaborasi', 'Find Me Online': 'Temukan Saya Online',
    'What We Can Build': 'Yang Bisa Kita Bangun', 'Send a Message': 'Kirim Pesan',
    'High Performance': 'Performa Tinggi', 'Clean Code Standard': 'Standar Kode Bersih',
    'Fluid Responsiveness': 'Responsif di Semua Layar', 'Zero Framework Bloat': 'Tanpa Beban Framework',
    'Featured Labs & Projects': 'Lab & Proyek Unggulan', 'Studio Capabilities & Services': 'Kemampuan & Layanan Studio',
    'In Planning': 'Dalam Perencanaan', Prototyping: 'Pembuatan Prototipe', 'In Progress': 'Sedang Berjalan',
    'Concept Stage': 'Tahap Konsep', 'Web Application': 'Aplikasi Web', 'CSS Design System': 'Sistem Desain CSS',
    'Productivity Tool': 'Alat Produktivitas', 'UI/UX Prototype': 'Prototipe UI/UX', 'Architecture Pattern': 'Pola Arsitektur',
    'Developer Tool': 'Alat Pengembang', 'Utility Tool': 'Alat Utilitas', 'Educational Lab': 'Lab Edukasi',
    'Location': 'Lokasi', 'Response Time': 'Waktu Respons', 'Typically within 24 hours': 'Biasanya dalam 24 jam',
    '2026 - 2027 Strategic Milestones': 'Tonggak Strategis 2026 - 2027',
    'From wok stations to workstations!': 'Dari stasiun wok ke workstation!',
    'Hello! I am Sandhya Yantra, a culinary professional channeling years of kitchen discipline into modern software development.': 'Halo! Saya Sandhya Yantra, profesional kuliner yang menerapkan disiplin bertahun-tahun di dapur ke pengembangan perangkat lunak modern.',
    'Working on fast-paced commercial kitchen lines taught me the true value of high endurance, split-second problem solving, and relentless attention to detail. Every dish requires precision in timing, temperature, and ingredients.': 'Bekerja di lini dapur komersial yang serba cepat mengajarkan saya arti ketahanan, pemecahan masalah dalam hitungan detik, dan perhatian tanpa henti pada detail. Setiap hidangan membutuhkan ketepatan waktu, suhu, dan bahan.',
    'In software engineering, I apply that identical level of craftsmanship. Code architecture must be clean, structured, and modular to ensure lightning-fast performance and seamless user experiences.': 'Dalam rekayasa perangkat lunak, saya menerapkan ketelitian yang sama. Arsitektur kode harus bersih, terstruktur, dan modular untuk memastikan performa cepat serta pengalaman pengguna yang lancar.',
    'Pronouns:': 'Pronomina:', 'Location:': 'Lokasi:', 'Core Focus:': 'Fokus Utama:', 'Collaboration:': 'Kolaborasi:',
    'He / Him': 'Dia / Laki-laki', 'Open to beginner-friendly and open-source web projects': 'Terbuka untuk proyek web ramah pemula dan open source',
    'Actively building web development skills and saving up funds to acquire a dedicated developer laptop to build, test, and ship higher-complexity projects.': 'Aktif membangun keahlian pengembangan web dan menabung untuk membeli laptop khusus pengembang guna membuat, menguji, dan merilis proyek yang lebih kompleks.',
    'Mastering DOM manipulation, asynchronous programming, accessibility best practices, and responsive design systems without relying on bloated dependencies.': 'Mendalami manipulasi DOM, pemrograman asinkron, praktik terbaik aksesibilitas, dan sistem desain responsif tanpa bergantung pada dependensi yang berlebihan.',
    '"As a cook, I know how to control the heat on a high-pressure wok. As a developer, I am doing my absolute best to avoid Spaghetti Code."': '"Sebagai juru masak, saya tahu cara mengendalikan panas wok bertekanan tinggi. Sebagai pengembang, saya berusaha sebaik mungkin menghindari Spaghetti Code."',
    'Combining technical frontend capabilities with battle-tested culinary soft skills.': 'Menggabungkan kemampuan teknis frontend dengan keterampilan kuliner dan profesional yang teruji.',
    'Semantic HTML5': 'HTML5 Semantik', 'Modern CSS3 & Flexbox': 'CSS3 Modern & Flexbox',
    'Responsive Architecture': 'Arsitektur Responsif', 'Git Version Control': 'Version Control Git',
    'Wok & High-Heat Mastery': 'Keahlian Wok & Panas Tinggi', 'High-Pressure Execution': 'Eksekusi di Bawah Tekanan',
    'Mise en Place Workflow': 'Alur Kerja Mise en Place', 'Brigade Line Teamwork': 'Kerja Tim Lini Brigade',
    'Strict Timing & Speed': 'Ketepatan Waktu & Kecepatan', 'Clean Station Discipline': 'Disiplin Stasiun Bersih',
    'Culinary Precision Meets Modern Software Craft': 'Presisi Kuliner Bertemu Keahlian Perangkat Lunak Modern',
    'At SandhyaYantra Labs, every digital interface is treated like a signature culinary course: meticulously prepared, thoughtfully structured, and crafted without unnecessary complexity.': 'Di SandhyaYantra Labs, setiap antarmuka digital diperlakukan seperti hidangan khas: disiapkan dengan teliti, ditata dengan matang, dan dibuat tanpa kompleksitas yang tidak perlu.',
    'Featured Labs & Projects': 'Lab & Proyek Unggulan', '4 Live Prototypes': '4 Prototipe Aktif',
    'An interactive scaling calculator and step-by-step culinary timer orchestration built with lightweight vanilla JavaScript. Adapts portions and timing seamlessly.': 'Kalkulator skala interaktif dan pengatur waktu kuliner langkah demi langkah yang dibuat dengan JavaScript vanilla ringan. Menyesuaikan porsi dan waktu dengan lancar.',
    'An open-source CSS library implementing Apple-inspired Glassmorphism design tokens, specular highlights, and adaptive Light/Dark mode themes.': 'Pustaka CSS open source yang menerapkan token desain Glassmorphism terinspirasi Apple, sorotan spekular, serta tema mode Terang/Gelap adaptif.',
    'High-speed interval execution timer designed for high-heat wok cooking and deep-focus developer coding sprints with audio cues and stats.': 'Timer interval berkecepatan tinggi untuk memasak dengan wok panas dan sesi coding fokus mendalam, lengkap dengan isyarat audio dan statistik.',
    'An interactive visual analyzer demonstrating clean code principles, semantic HTML hierarchy, and modular refactoring techniques.': 'Penganalisis visual interaktif yang menunjukkan prinsip kode bersih, hierarki HTML semantik, dan teknik refactoring modular.',
    'v1.2 Release': 'Rilis v1.2', 'Open Source': 'Open Source', 'Active Tool': 'Alat Aktif', Experimental: 'Eksperimental',
    'High-grade web development solutions built with strict performance and architectural hygiene.': 'Solusi pengembangan web berkualitas tinggi dengan performa ketat dan arsitektur yang terjaga.',
    'Custom Landing Pages': 'Halaman Landing Kustom', 'Pixel-perfect, high-conversion landing pages engineered with speed and aesthetic excellence.': 'Halaman landing presisi dengan konversi tinggi, dibuat dengan kecepatan dan estetika terbaik.',
    'Glassmorphism Systems': 'Sistem Glassmorphism', 'State-of-the-art Apple Liquid Glass components and tokens customized for brand identity.': 'Komponen dan token Apple Liquid Glass modern yang disesuaikan dengan identitas merek.',
    'Code Refactoring': 'Refactoring Kode', 'Transforming messy spaghetti markup into semantic, maintainable, and accessible HTML/CSS.': 'Mengubah markup spaghetti yang berantakan menjadi HTML/CSS yang semantik, mudah dirawat, dan aksesibel.',
    'Ready to Build Something Clean and Fast?': 'Siap Membangun Sesuatu yang Bersih dan Cepat?', "Let's collaborate on web projects, discuss open-source tools, or build custom interfaces together.": 'Mari berkolaborasi dalam proyek web, membahas alat open source, atau membangun antarmuka kustom bersama.',
    'Start Collaboration': 'Mulai Kolaborasi', 'Learn More': 'Pelajari Lebih Lanjut'
  };
  const savedLanguage = localStorage.getItem('sandhya_language_v2') || 'en';
  const originalTextNodes = new WeakMap();
  const originalAttributes = new WeakMap();
  const originalDocumentTitle = document.title;

  function translateTextNode(node, language) {
    if (!originalTextNodes.has(node)) originalTextNodes.set(node, node.nodeValue);
    const original = originalTextNodes.get(node);
    const trimmed = original.trim().replace(/\s+/g, ' ');
    if (!trimmed || !idTranslations[trimmed]) return;
    const translated = language === 'id' ? idTranslations[trimmed] : trimmed;
    node.nodeValue = original.replace(/\S[\s\S]*?\S(?=\s*$)/, translated);
  }

  function applyLanguage(language) {
    document.documentElement.lang = language === 'id' ? 'id' : 'en';
    document.title = language === 'id' ? (idTranslations[originalDocumentTitle] || originalDocumentTitle) : originalDocumentTitle;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let textNode;
    while ((textNode = walker.nextNode())) translateTextNode(textNode, language);

    document.querySelectorAll('[title], [aria-label], [alt], [placeholder]').forEach((element) => {
      ['title', 'aria-label', 'alt', 'placeholder'].forEach((attribute) => {
        if (!element.hasAttribute(attribute)) return;
        if (!originalAttributes.has(element)) originalAttributes.set(element, {});
        const originals = originalAttributes.get(element);
        if (!originals[attribute]) originals[attribute] = element.getAttribute(attribute);
        const original = originals[attribute];
        element.setAttribute(attribute, language === 'id' ? (idTranslations[original] || original) : original);
      });
    });

    const label = document.getElementById('languageLabel');
    if (label) label.textContent = language === 'id' ? 'ID' : 'EN';
    if (languageToggleBtn) languageToggleBtn.setAttribute('aria-label', language === 'id' ? 'Ubah bahasa' : 'Change language');
    localStorage.setItem('sandhya_language_v2', language);
  }

  applyLanguage(savedLanguage);
  if (languageToggleBtn) {
    languageToggleBtn.addEventListener('click', () => {
      const currentLanguage = document.documentElement.lang === 'id' ? 'id' : 'en';
      applyLanguage(currentLanguage === 'id' ? 'en' : 'id');
    });
  }
}

/* ==========================================================================
   1. DYNAMIC MOUSE & TOUCH SPOTLIGHT GLOW EFFECT (APPLE VISIONOS STYLE)
   ========================================================================== */
function initSpotlightGlowEffect() {
  const glowContainers = document.querySelectorAll(
    '.glass-panel, .glass-card-wrapper, .glass-box-nested, .lab-card, .capability-item'
  );

  function updateGlowPosition(e, container) {
    const rect = container.getBoundingClientRect();
    let clientX, clientY;

    if (e.touches && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    container.style.setProperty('--mouse-x', `${x}px`);
    container.style.setProperty('--mouse-y', `${y}px`);
  }

  function removeGlowPosition(container) {
    container.style.removeProperty('--mouse-x');
    container.style.removeProperty('--mouse-y');
  }

  glowContainers.forEach(container => {
    // Mouse Events (Desktop & Laptops)
    container.addEventListener('mousemove', (e) => updateGlowPosition(e, container), { passive: true });
    container.addEventListener('mouseleave', () => removeGlowPosition(container));

    // Touch Events (Mobile Phones & Tablets)
    container.addEventListener('touchstart', (e) => updateGlowPosition(e, container), { passive: true });
    container.addEventListener('touchmove', (e) => updateGlowPosition(e, container), { passive: true });
    container.addEventListener('touchend', () => removeGlowPosition(container));
  });
}

/* ==========================================================================
   2. THEME SWITCHER (DARK / LIGHT MODE WITH LOCALSTORAGE)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  
  // Check localStorage or system preference
  const savedTheme = localStorage.getItem('sandhya_apple_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const activeTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  applyTheme(activeTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      showToast(newTheme === 'dark' ? 'Dark Mode Activated' : 'Light Mode Activated');
    });
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (themeIcon) themeIcon.className = 'fa-solid fa-sun';
      localStorage.setItem('sandhya_apple_theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (themeIcon) themeIcon.className = 'fa-solid fa-moon';
      localStorage.setItem('sandhya_apple_theme', 'light');
    }
  }
}

/* ==========================================================================
   3. CONTACT FORM SUBMISSION & VALIDATION
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('contactName')?.value.trim();
    const email = document.getElementById('contactEmail')?.value.trim();
    const subject = document.getElementById('contactSubject')?.value.trim();
    const message = document.getElementById('contactMessage')?.value.trim();

    if (!name || !email || !subject || !message) {
      showToast('Please fill out all fields before sending.');
      return;
    }

    // Success feedback
    showToast('Message sent successfully! Sandhya will reply soon.');
    contactForm.reset();
  });
}

/* ==========================================================================
   4. TOAST NOTIFICATION UTILITY
   ========================================================================== */
function showToast(message) {
  let toast = document.getElementById('glassToast');
  let toastMsg = document.getElementById('glassToastMsg');

  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'glassToast';
    toast.className = 'glass-toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span id="glassToastMsg">${message}</span>`;
    document.body.appendChild(toast);
    toastMsg = document.getElementById('glassToastMsg');
  } else if (toastMsg) {
    toastMsg.textContent = message;
  }

  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
