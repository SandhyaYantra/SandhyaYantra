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
  const languageLabel = document.getElementById('languageLabel');
  const translations = {
    en: {
      Home: 'Home', Personal: 'Personal', Labs: 'Labs', Story: 'Story', Contact: 'Contact',
      Portfolio: 'Portfolio', 'Future Projects': 'Future Projects',
      'Personal Profile': 'Personal Profile', 'SandhyaYantra Labs': 'SandhyaYantra Labs',
      'My Story': 'My Story', 'Project Portfolio': 'Project Portfolio',
      'Connect With Me': 'Connect With Me', 'Ganti bahasa': 'Change language'
    },
    id: {
      Home: 'Beranda', Personal: 'Personal', Labs: 'Lab', Story: 'Cerita', Contact: 'Kontak',
      Portfolio: 'Portofolio', 'Future Projects': 'Proyek Mendatang',
      'Personal Profile': 'Profil Personal', 'SandhyaYantra Labs': 'SandhyaYantra Labs',
      'My Story': 'Cerita Saya', 'Project Portfolio': 'Portofolio Proyek',
      'Connect With Me': 'Hubungi Saya', 'Ganti bahasa': 'Ubah bahasa'
    }
  };

  const savedLanguage = localStorage.getItem('sandhya_language') || 'en';

  function applyLanguage(language) {
    document.documentElement.lang = language === 'id' ? 'id' : 'en';
    document.querySelectorAll('.tab-label, .glass-page-title, .glass-language-btn').forEach((element) => {
      const originalText = element.dataset.originalText || element.textContent.trim();
      element.dataset.originalText = originalText;
      if (element.classList.contains('glass-language-btn')) {
        element.setAttribute('aria-label', language === 'id' ? 'Ubah bahasa' : 'Change language');
        const label = element.querySelector('#languageLabel');
        if (label) label.textContent = language === 'id' ? 'ID' : 'EN';
      } else if (translations[language][originalText]) {
        element.textContent = translations[language][originalText];
      }
    });
    localStorage.setItem('sandhya_language', language);
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
