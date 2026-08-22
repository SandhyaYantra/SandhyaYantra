/* ==========================================================================
   SANDHYA YANTRA - UNIVERSAL APPLE LIQUID GLASS SCRIPT (SCRIPT.JS)
   Theme Switcher, Contact Form Handler & Touch/Mouse Spotlight Glow
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initContactForm();
  initMapToggle();
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
    , 'A high-efficiency recipe scaling and kitchen workflow orchestration tool that calculates ingredient ratios and stage timing in real-time.': 'Alat efisiensi tinggi untuk menghitung skala resep dan mengatur alur kerja dapur, termasuk rasio bahan dan waktu setiap tahap secara real-time.'
    , 'A modular Apple VisionOS-inspired Glassmorphism design system featuring dynamic specular highlights, blur filters, and dark/light mode tokens.': 'Sistem desain Glassmorphism modular terinspirasi Apple VisionOS dengan sorotan spekular dinamis, filter blur, dan token mode terang/gelap.'
    , 'High-speed interval execution timer tailored for culinary temperature control and Pomodoro developer deep-work sessions.': 'Timer interval berkecepatan tinggi untuk mengontrol suhu masakan dan sesi deep work pengembang dengan metode Pomodoro.'
    , 'An ultra-responsive personal profile landing experience featuring custom theme persistence and mouse spotlight lighting effects.': 'Halaman profil personal ultraresponsif dengan penyimpanan tema kustom dan efek pencahayaan spotlight dari mouse.'
    , 'A minimalist web content architecture blueprint that applies five-star kitchen prep structure to frontend codebases.': 'Cetak biru arsitektur konten web minimalis yang menerapkan struktur persiapan dapur bintang lima ke codebase frontend.'
    , 'An interactive visual playground demonstrating clean separation of concerns, semantic markup, and modular CSS rules.': 'Playground visual interaktif yang menunjukkan pemisahan tanggung jawab yang bersih, markup semantik, dan aturan CSS modular.'
    , 'I am actively seeking opportunities to collaborate on web projects, build clean components, and contribute to open-source software.': 'Saya sedang mencari kesempatan untuk berkolaborasi dalam proyek web, membuat komponen yang bersih, dan berkontribusi pada software open source.'
    , 'Looking for a Dedicated Frontend Contributor?': 'Mencari Kontributor Frontend Berdedikasi?'
    , 'View Future Roadmap': 'Lihat Peta Jalan Mendatang'
    , 'A custom syntax theme and editor configuration inspired by the warmth of kitchen hearths and high-contrast ergonomics to minimize eye strain during late-night coding sessions.': 'Tema sintaks dan konfigurasi editor kustom yang terinspirasi kehangatan tungku dapur dan ergonomi kontras tinggi untuk mengurangi ketegangan mata saat coding malam hari.'
    , 'A lightweight web canvas for pair programming and task synchronization that translates the rigorous coordination of a kitchen brigade into developer task management.': 'Canvas web ringan untuk pair programming dan sinkronisasi tugas yang menerapkan koordinasi ketat brigade dapur ke manajemen tugas pengembang.'
    , 'Open-source development environment dotfiles, terminal optimizations, and productivity shortcuts prepared for the developer laptop workstation goal.': 'Dotfiles lingkungan pengembangan open source, optimalisasi terminal, dan pintasan produktivitas untuk target workstation laptop pengembang.'
    , 'An ultra-lightweight (under 5KB) CSS utility library providing modern Glassmorphism components, responsive tokens, and dark mode without requiring build toolchains.': 'Pustaka utilitas CSS superringan di bawah 5KB dengan komponen Glassmorphism modern, token responsif, dan mode gelap tanpa build toolchain.'
    , 'Publish open-source repositories on GitHub under SandhyaYantra Labs, complete developer laptop funding, and build community connections.': 'Menerbitkan repositori open source di GitHub melalui SandhyaYantra Labs, menyelesaikan pendanaan laptop pengembang, dan membangun koneksi komunitas.'
    , 'Contribute to beginner-friendly open-source software, launch interactive frontend experiments, and start full-time developer engagements.': 'Berkontribusi pada software open source yang ramah pemula, meluncurkan eksperimen frontend interaktif, dan memulai pekerjaan pengembang penuh waktu.'
    , 'Deepen knowledge into backend integration, web performance optimization, and expanding SandhyaYantra Labs into a respected digital laboratory.': 'Memperdalam integrasi backend dan optimasi performa web, serta mengembangkan SandhyaYantra Labs menjadi laboratorium digital yang dihormati.'
    , 'When people hear that I am transitioning from a commercial kitchen line cook to a frontend software developer, they often assume these two worlds are complete opposites.': 'Ketika orang mendengar saya beralih dari juru masak lini dapur komersial menjadi pengembang software frontend, mereka sering mengira kedua dunia ini sangat bertolak belakang.'
    , 'In reality, they are remarkably similar. Both environments demand meticulous preparation, high-speed execution under pressure, clear logic, and an absolute refusal to compromise on quality.': 'Kenyataannya, keduanya sangat mirip. Kedua lingkungan menuntut persiapan teliti, eksekusi cepat di bawah tekanan, logika yang jelas, dan komitmen mutlak terhadap kualitas.'
    , 'How culinary habits directly translate into software engineering standards.': 'Bagaimana kebiasaan kuliner diterapkan langsung menjadi standar rekayasa software.'
    , 'Whether you want to discuss frontend web development, collaborate on beginner-friendly projects, or chat about culinary survival, I am always happy to connect.': 'Baik untuk membahas pengembangan web frontend, berkolaborasi dalam proyek ramah pemula, atau mengobrol tentang bertahan di dunia kuliner, saya selalu senang terhubung.'
    , 'Tap a platform to visit my profile directly.': 'Ketuk platform untuk langsung mengunjungi profil saya.'
    , 'Leave your details below and I will respond to your email promptly.': 'Isi detail Anda di bawah dan saya akan segera membalas email Anda.'
    , 'Lightweight & responsive landing pages': 'Halaman landing ringan & responsif'
    , 'Modern Apple Liquid Glass UI components': 'Komponen UI Apple Liquid Glass modern'
    , 'Beginner-friendly frontend collaboration': 'Kolaborasi frontend ramah pemula'
    , 'Kitchen wisdom & anti-spaghetti code strategies': 'Kebijaksanaan dapur & strategi anti-spaghetti code'
    , 'Your Name': 'Nama Anda', 'Your Email': 'Email Anda', 'Subject': 'Subjek', 'Message': 'Pesan'
    , 'Send Message': 'Kirim Pesan'
    , 'Write your message here...': 'Tulis pesan Anda di sini...'
    , 'Project collaboration / Inquiry': 'Kolaborasi proyek / Pertanyaan'
    , 'e.g. Alex Johnson': 'contoh: Alex Johnson'
    , 'Expand Map': 'Buka Peta', 'Collapse Map': 'Tutup Peta'
    , 'Operating on high-volume commercial wok lines. Learning split-second decision making, endurance under extreme heat, and coordinating seamlessly with a kitchen brigade where every second counts.': 'Bekerja di lini wok komersial bervolume tinggi. Mempelajari pengambilan keputusan dalam hitungan detik, ketahanan dalam panas ekstrem, dan koordinasi yang lancar bersama brigade dapur ketika setiap detik berarti.'
    , 'Realized that recipes are algorithms and kitchen stations are data pipelines. Started learning foundational programming, automating kitchen calculations, and discovering a profound passion for web development.': 'Menyadari bahwa resep adalah algoritma dan stasiun dapur adalah pipeline data. Mulai mempelajari pemrograman dasar, mengotomatiskan perhitungan dapur, dan menemukan minat besar pada pengembangan web.'
    , 'Committing fully to frontend engineering: Semantic HTML5, modern CSS Glassmorphism, and modular JavaScript ES6+. Founding SandhyaYantra Labs to build and test clean, maintainable web prototypes.': 'Berkomitmen penuh pada rekayasa frontend: HTML5 semantik, CSS Glassmorphism modern, dan JavaScript ES6+ modular. Mendirikan SandhyaYantra Labs untuk membuat dan menguji prototipe web yang bersih serta mudah dirawat.'
    , 'Actively building open-source projects, saving for a dedicated developer laptop, and preparing for junior frontend developer roles in collaborative tech teams.': 'Aktif membangun proyek open source, menabung untuk laptop khusus pengembang, dan mempersiapkan diri untuk posisi junior frontend developer dalam tim teknologi kolaboratif.'
    , 'The Crucible of Commercial Kitchens': 'Tempaan Dapur Komersial'
    , 'The Evolution of a Developer': 'Evolusi Seorang Pengembang'
    , 'The Parallels: Commercial Kitchen vs Software Engineering': 'Kesamaan: Dapur Komersial vs Rekayasa Software'
    , 'In a professional kitchen, one unprepared station delays the entire brigade. In software engineering, one poorly architected module introduces cascading technical debt.': 'Di dapur profesional, satu stasiun yang tidak siap menunda seluruh brigade. Dalam rekayasa software, satu modul dengan arsitektur buruk menimbulkan technical debt berantai.'
    , 'Foundation': 'Fondasi', 'The Spark': 'Pemicu', 'Dedicated Transition': 'Peralihan Penuh', 'Present & Future': 'Masa Kini & Masa Depan', 'Horizon': 'Cakrawala'
    , 'Mastering High-Heat Execution': 'Menguasai Eksekusi Panas Tinggi'
    , 'Discovering Algorithmic Parallels': 'Menemukan Kesamaan Algoritma'
    , 'Mise en Place Applied to Code': 'Menerapkan Mise en Place pada Kode'
    , 'Building SandhyaYantra Labs & Workstation Goal': 'Membangun SandhyaYantra Labs & Target Workstation'
    , 'Culinary Discipline': 'Disiplin Kuliner', 'Software Engineering Equivalent': 'Padanan Rekayasa Software', 'The Guiding Standard': 'Standar Panduan'
    , 'Design tokens, modular folder structure & schemas': 'Token desain, struktur folder modular & skema'
    , 'Prepare everything before writing production code.': 'Siapkan semuanya sebelum menulis kode produksi.'
    , 'High-Heat Wok Control': 'Kontrol Wok Panas Tinggi', 'DOM Optimization & Event Loop Performance': 'Optimasi DOM & Performa Event Loop'
    , 'Execute swiftly without blocking the main thread.': 'Eksekusi dengan cepat tanpa memblokir main thread.'
    , 'Spaghetti Bolognese': 'Spaghetti Bolognese', 'Spaghetti Code': 'Spaghetti Code', 'Delicious on a plate; strictly forbidden in a codebase!': 'Lezat di piring; dilarang keras dalam codebase!'
    , 'Brigade Communication': 'Komunikasi Brigade', 'Git Version Control & Code Reviews': 'Version Control Git & Code Review'
    , 'Communicate intent clearly and synchronize smoothly.': 'Komunikasikan maksud dengan jelas dan sinkronkan dengan lancar.'
    , 'Clean Station at Close': 'Stasiun Bersih Saat Tutup', 'Passing Linting & Automated Verification': 'Lolos Linting & Verifikasi Otomatis'
    , 'Leave the codebase cleaner than you found it.': 'Tinggalkan codebase dalam kondisi lebih bersih.'
    , 'Frontend Developer in Transition': 'Frontend Developer dalam Masa Peralihan'
    , 'Building clean, responsive web experiences with the discipline of a professional kitchen.': 'Membangun pengalaman web yang bersih dan responsif dengan disiplin dapur profesional.'
    , 'From wok stations to workstations. I turn careful preparation, clear systems, and fast execution into thoughtful interfaces.': 'Dari stasiun wok ke workstation. Saya mengubah persiapan matang, sistem yang jelas, dan eksekusi cepat menjadi antarmuka yang penuh pertimbangan.'
    , 'Crafting the next iteration': 'Mengerjakan iterasi berikutnya'
    , 'Core capabilities': 'Kemampuan utama', 'Semantic HTML': 'HTML Semantik', 'Modern CSS': 'CSS Modern', 'Vanilla JavaScript': 'JavaScript Vanilla', 'Responsive UI': 'UI Responsif'
    , 'Selected work': 'Karya pilihan', 'Small systems, carefully made.': 'Sistem kecil yang dibuat dengan teliti.'
    , 'See full portfolio': 'Lihat portofolio lengkap'
    , 'Interactive culinary calculations and timing orchestration built with lightweight JavaScript.': 'Perhitungan kuliner interaktif dan pengaturan waktu yang dibuat dengan JavaScript ringan.'
    , 'A modular interface system shaped around clarity, responsiveness, and polished glass surfaces.': 'Sistem antarmuka modular yang dibentuk berdasarkan kejelasan, responsivitas, dan permukaan glass yang rapi.'
    , 'A focused timer concept connecting high-heat kitchen rhythm with developer deep work.': 'Konsep timer fokus yang menghubungkan ritme dapur panas tinggi dengan deep work pengembang.'
    , 'The throughline': 'Benang merah', 'Preparation is a superpower.': 'Persiapan adalah kekuatan utama.'
    , 'Every clean interface begins before the first line of code: with a clear station, a useful system, and a reason for every detail.': 'Setiap antarmuka yang bersih dimulai sebelum baris kode pertama: dengan stasiun yang rapi, sistem yang berguna, dan alasan untuk setiap detail.'
    , 'Meet the person behind the work': 'Kenali orang di balik karya'
    , 'Featured Project': 'Proyek Unggulan', 'Live Demo': 'Demo Langsung', 'View Code': 'Lihat Kode'
    , 'A browser-based workflow for scaling recipes, organizing preparation, and keeping timing visible when the kitchen gets busy.': 'Alur kerja berbasis browser untuk mengatur skala resep, menata persiapan, dan menjaga waktu tetap terlihat saat dapur sedang sibuk.'
    , 'The person behind the work': 'Orang di balik karya', 'Frontend Developer in Transition': 'Frontend Developer dalam Masa Peralihan'
    , 'Chef, frontend developer in transition, and builder of thoughtful digital tools.': 'Koki, frontend developer dalam masa peralihan, dan pembuat alat digital yang penuh pertimbangan.'
    , 'About & background': 'Tentang & latar belakang', 'From high-heat kitchens to clean code.': 'Dari dapur panas ke kode bersih.'
    , 'I am Dian, a culinary professional channeling years of kitchen discipline into modern software development.': 'Saya Dian, profesional kuliner yang menerapkan disiplin bertahun-tahun di dapur ke pengembangan software modern.'
    , 'Fast-paced service taught me endurance, split-second problem solving, and the quiet power of preparing every station before the rush begins.': 'Layanan yang serba cepat mengajarkan saya ketahanan, pemecahan masalah dalam hitungan detik, dan kekuatan mempersiapkan setiap stasiun sebelum kesibukan dimulai.'
    , 'Now I bring that same care to frontend work: clear structure, responsive interfaces, and details that make digital experiences feel natural.': 'Kini saya membawa ketelitian yang sama ke pekerjaan frontend: struktur jelas, antarmuka responsif, dan detail yang membuat pengalaman digital terasa alami.'
    , 'Based in': 'Berbasis di', 'Focused on': 'Fokus pada', 'Currently': 'Saat ini', 'Building and learning in public': 'Membangun dan belajar secara terbuka'
    , 'A quiet thank you': 'Ucapan terima kasih kecil', 'For the one who stayed through the journey.': 'Untuk dia yang tetap menemani perjalanan ini.'
    , 'Behind every late-night idea and every new line of code, there has been someone who kept showing up. This space is for her.': 'Di balik setiap ide tengah malam dan baris kode baru, ada seseorang yang selalu hadir. Ruang ini untuknya.'
    , 'Thank you for believing in me, being patient with the process, and making the hard days feel lighter. I am grateful to have you beside me.': 'Terima kasih sudah percaya pada saya, sabar menjalani proses ini, dan membuat hari-hari sulit terasa lebih ringan. Saya bersyukur memilikimu di sisi saya.'
    , 'What guides me': 'Yang membimbing saya', 'Good work starts with care.': 'Karya yang baik dimulai dari kepedulian.'
    , 'Prepare deliberately': 'Bersiap dengan sengaja', 'Clear foundations make better work possible.': 'Fondasi yang jelas memungkinkan karya yang lebih baik.'
    , 'Stay curious': 'Tetap ingin tahu', 'Every challenge is another station to learn.': 'Setiap tantangan adalah stasiun baru untuk belajar.'
    , 'Build together': 'Membangun bersama', 'The best journeys are not taken alone.': 'Perjalanan terbaik tidak ditempuh sendirian.'
    , 'View My Work': 'Lihat Karya Saya', 'Cover photo coming soon': 'Foto sampul segera hadir'
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

    document.querySelectorAll('.quote-highlight-glass').forEach((element) => {
      if (!element.dataset.originalText) element.dataset.originalText = element.textContent;
      const original = element.dataset.originalText.trim().replace(/\s+/g, ' ');
      if (idTranslations[original]) element.textContent = language === 'id' ? idTranslations[original] : original;
    });

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
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

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
    container.addEventListener('mousemove', (e) => updateGlowPosition(e, container), { passive: true });
    container.addEventListener('mouseleave', () => removeGlowPosition(container));
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

function initMapToggle() {
  const map = document.getElementById('contactMap');
  const toggle = document.getElementById('contactMapToggle');
  const frame = document.getElementById('contactMapFrame');
  if (!map || !toggle || !frame) return;

  toggle.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

    if (!isExpanded && !frame.firstElementChild) {
      const iframe = document.createElement('iframe');
      iframe.title = 'Banda Aceh Map';
      iframe.src = map.dataset.mapSrc;
      iframe.loading = 'lazy';
      iframe.allowFullscreen = true;
      iframe.referrerPolicy = 'no-referrer-when-downgrade';
      frame.appendChild(iframe);
    }

    toggle.setAttribute('aria-expanded', String(!isExpanded));
    toggle.querySelector('span').textContent = isExpanded ? 'Expand Map' : 'Collapse Map';
    toggle.querySelector('i').className = isExpanded ? 'fa-solid fa-map' : 'fa-solid fa-map-location-dot';
    frame.classList.toggle('is-expanded', !isExpanded);
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
