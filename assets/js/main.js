let currentLang = localStorage.getItem('pat_lang') || 'pt';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('pat_lang', lang);
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  // Update active state on language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  const dict = i18n[lang] || i18n.pt;

  // Update text content with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Update placeholders with data-i18n-ph
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Re-render gallery with updated language captions
  if (typeof renderGallery === 'function') {
    renderGallery(filteredImages);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCounters();
  initGalleryAndLightbox();
  initQuoteGenerator();
  initContactForm();
  initScrollAnimations();
  initLangSwitcher();
  applyLanguage(currentLang);
  document.getElementById('currentYear').textContent = new Date().getFullYear();
});

function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = btn.getAttribute('data-lang');
      applyLanguage(lang);
    });
  });
}

function initNavbar() {
  const navbar = document.getElementById('navbar');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const navItems = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  if (menuToggle && navLinks) {
    function toggleMobileMenu(forceClose = false) {
      const shouldOpen = forceClose ? false : !navLinks.classList.contains('active');
      if (shouldOpen) {
        navLinks.classList.add('active');
        menuToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      } else {
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    }

    menuToggle.addEventListener('click', () => toggleMobileMenu());

    navItems.forEach(link => {
      link.addEventListener('click', () => toggleMobileMenu(true));
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
        toggleMobileMenu(true);
      }
    });
  }

  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 140;
      const sectionId = current.getAttribute('id');
      const targetLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (targetLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetLink.classList.add('active');
        } else {
          targetLink.classList.remove('active');
        }
      }
    });
  }, { passive: true });
}

function initCounters() {
  const counterElements = document.querySelectorAll('.counter-number');
  if (!counterElements.length) return;

  let started = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        counterElements.forEach(el => {
          const target = parseInt(el.getAttribute('data-target'), 10) || 0;
          const suffix = el.getAttribute('data-suffix') || '';
          const prefix = el.getAttribute('data-prefix') || '';
          const duration = 1800;
          const stepTime = 16;
          const steps = duration / stepTime;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              el.textContent = `${prefix}${target}${suffix}`;
              clearInterval(timer);
            } else {
              el.textContent = `${prefix}${Math.floor(current)}${suffix}`;
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('stats');
  if (statsSection) {
    observer.observe(statsSection);
  }
}

const galleryImages = [
  { id: 1, src: 'https://b3af69cf3f.cbaul-cdnwnd.com/b118f29dd1d9cc011ce04ed74e3c83bf/200000003-b764bb764e/WhatsApp%20Image%202024-11-29%20at%2000.09.42.jpeg?ph=b3af69cf3f', category: 'solo', title_pt: 'Expressão & Freestyle', sub_pt: 'Performance Urbana', title_en: 'Expression & Freestyle', sub_en: 'Urban Performance', orient: 'square' },
  { id: 2, src: 'https://b3af69cf3f.cbaul-cdnwnd.com/b118f29dd1d9cc011ce04ed74e3c83bf/200000001-5666c5666e/WhatsApp%20Image%202024-11-29%20at%2000.09.41.jpeg?ph=b3af69cf3f', category: 'stage', title_pt: 'Apresentação em Grupo', sub_pt: 'Companhia Funk-se', title_en: 'Ensemble Performance', sub_en: 'Funk-se Company', orient: 'landscape' },
  { id: 3, src: 'https://b3af69cf3f.cbaul-cdnwnd.com/b118f29dd1d9cc011ce04ed74e3c83bf/200000002-b4875b4876/WhatsApp%20Image%202024-11-29%20at%2000.09.40.jpeg?ph=b3af69cf3f', category: 'stage', title_pt: 'Presença Cênica & Movimento', sub_pt: 'Espetáculo Teatral', title_en: 'Stage Presence & Motion', sub_en: 'Theatrical Production', orient: 'portrait' },
  { id: 4, src: 'https://b3af69cf3f.cbaul-cdnwnd.com/b118f29dd1d9cc011ce04ed74e3c83bf/200000000-5512355125/WhatsApp%20Image%202024-11-29%20at%2000.09.37.jpeg?ph=b3af69cf3f', category: 'solo', title_pt: 'Patrick Fernando (Pat)', sub_pt: 'Retrato Oficial DRT 00236/MS', title_en: 'Patrick Fernando (Pat)', sub_en: 'Official Artist Portrait', orient: 'square' },
  { id: 5, src: 'https://b3af69cf3f.cbaul-cdnwnd.com/b118f29dd1d9cc011ce04ed74e3c83bf/200000005-b6c18b6c1a/WhatsApp%20Image%202024-11-29%20at%2000.09.36.jpeg?ph=b3af69cf3f', category: 'stage', title_pt: 'Energia de Palco', sub_pt: 'Coreografia Cênica', title_en: 'Stage Energy', sub_en: 'Choreographic Work', orient: 'portrait' },
  { id: 6, src: 'https://b3af69cf3f.cbaul-cdnwnd.com/b118f29dd1d9cc011ce04ed74e3c83bf/200000011-6f39d6f39e/WhatsApp%20Image%202024-11-29%20at%2000.09.35%20%281%29.jpeg?ph=b3af69cf3f', category: 'workshops', title_pt: 'Vivência Artística', sub_pt: 'Imersão & Dança', title_en: 'Artistic Immersion', sub_en: 'Dance Experience', orient: 'square' },
  { id: 7, src: 'https://b3af69cf3f.cbaul-cdnwnd.com/b118f29dd1d9cc011ce04ed74e3c83bf/200000013-a5af6a5af7/WhatsApp%20Image%202024-11-29%20at%2000.09.35.jpeg?ph=b3af69cf3f', category: 'solo', title_pt: 'Técnica & Precisão', sub_pt: 'Street Dance Culture', title_en: 'Technique & Precision', sub_en: 'Street Dance Culture', orient: 'portrait' },
  { id: 8, src: 'https://b3af69cf3f.cbaul-cdnwnd.com/b118f29dd1d9cc011ce04ed74e3c83bf/200000015-bc010bc012/WhatsApp%20Image%202024-11-29%20at%2000.09.34%20%281%29.jpeg?ph=b3af69cf3f', category: 'stage', title_pt: 'Festival de Dança', sub_pt: 'Competição & FIH2', title_en: 'Dance Festival', sub_en: 'FIH2 Competition', orient: 'landscape' },
  { id: 9, src: 'https://b3af69cf3f.cbaul-cdnwnd.com/b118f29dd1d9cc011ce04ed74e3c83bf/200000017-644aa644ac/WhatsApp%20Image%202024-11-29%20at%2000.09.34.jpeg?ph=b3af69cf3f', category: 'stage', title_pt: 'Momento Coreográfico', sub_pt: 'Espetáculo Cênico', title_en: 'Choreographic Climax', sub_en: 'Scenic Production', orient: 'landscape' },
  { id: 10, src: 'https://b3af69cf3f.cbaul-cdnwnd.com/b118f29dd1d9cc011ce04ed74e3c83bf/200000019-1a3941a396/WhatsApp%20Image%202024-11-29%20at%2000.09.33.jpeg?ph=b3af69cf3f', category: 'workshops', title_pt: 'Conexão com a Turma', sub_pt: 'Workshop de Danças Urbanas', title_en: 'Connecting with Students', sub_en: 'Urban Dance Masterclass', orient: 'square' },
  { id: 11, src: 'https://b3af69cf3f.cbaul-cdnwnd.com/b118f29dd1d9cc011ce04ed74e3c83bf/200000021-46dac46db0/WhatsApp%20Image%202024-11-29%20at%2000.09.30.jpeg?ph=b3af69cf3f', category: 'stage', title_pt: 'Cia Funk-se em Cena', sub_pt: 'Apresentação Estadual', title_en: 'Funk-se in Motion', sub_en: 'State Showcase', orient: 'landscape' },
  { id: 12, src: 'https://b3af69cf3f.cbaul-cdnwnd.com/b118f29dd1d9cc011ce04ed74e3c83bf/200000023-2bef52bef9/WhatsApp%20Image%202024-11-29%20at%2000.09.29.jpeg?ph=b3af69cf3f', category: 'stage', title_pt: 'Dinâmica de Palco', sub_pt: 'Mostra Competitiva', title_en: 'Stage Dynamics', sub_en: 'Competitive Showcase', orient: 'landscape' },
  { id: 13, src: 'https://b3af69cf3f.cbaul-cdnwnd.com/b118f29dd1d9cc011ce04ed74e3c83bf/200000025-ef3cbef3ce/WhatsApp%20Image%202024-11-29%20at%2000.09.28.jpeg?ph=b3af69cf3f', category: 'solo', title_pt: 'Solo Street Dance Fest', sub_pt: 'Pioneirismo no MS', title_en: 'Solo Street Dance Fest', sub_en: 'Pioneering Act in MS', orient: 'portrait' },
  { id: 14, src: 'https://b3af69cf3f.cbaul-cdnwnd.com/b118f29dd1d9cc011ce04ed74e3c83bf/200000027-dc99bdc99c/WhatsApp%20Image%202024-11-29%20at%2000.09.27%20%281%29.jpeg?ph=b3af69cf3f', category: 'stage', title_pt: 'Harmonia & Sincronia', sub_pt: 'Mostra de Dança de Rua', title_en: 'Harmony & Synchronization', sub_en: 'Street Dance Festival', orient: 'portrait' },
  { id: 15, src: 'https://b3af69cf3f.cbaul-cdnwnd.com/b118f29dd1d9cc011ce04ed74e3c83bf/200000029-1154311545/WhatsApp%20Image%202024-11-29%20at%2000.09.27.jpeg?ph=b3af69cf3f', category: 'workshops', title_pt: 'Troca de Conhecimento', sub_pt: 'Masterclass Funk-se', title_en: 'Knowledge Exchange', sub_en: 'Funk-se Masterclass', orient: 'landscape' },
  { id: 16, src: 'https://b3af69cf3f.cbaul-cdnwnd.com/b118f29dd1d9cc011ce04ed74e3c83bf/200000031-ccc46ccc48/WhatsApp%20Image%202024-11-29%20at%2000.09.26.jpeg?ph=b3af69cf3f', category: 'stage', title_pt: 'Arte em Movimento', sub_pt: 'Encerramento de Espetáculo', title_en: 'Art in Motion', sub_en: 'Show Finale', orient: 'landscape' }
];

let currentImageIndex = 0;
let filteredImages = [...galleryImages];
let renderGallery;

function initGalleryAndLightbox() {
  const galleryGrid = document.getElementById('galleryGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');

  if (!galleryGrid) return;

  renderGallery = function(images) {
    galleryGrid.innerHTML = '';
    images.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = `gallery-item ${item.orient} fade-up visible`;
      card.setAttribute('data-category', item.category);
      card.setAttribute('data-index', index);
      card.tabIndex = 0;
      card.setAttribute('role', 'button');

      const title = currentLang === 'en' ? item.title_en : item.title_pt;
      const sub = currentLang === 'en' ? item.sub_en : item.sub_pt;
      card.setAttribute('aria-label', `${title} - ${sub}`);

      card.innerHTML = `
        <img class="gallery-img" src="${item.src}" alt="${title} - ${sub}" loading="lazy">
        <div class="gallery-overlay">
          <div class="gallery-zoom-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </div>
          <div class="gallery-caption">${title}</div>
          <div class="gallery-subtext">${sub}</div>
        </div>
      `;

      card.addEventListener('click', () => openLightbox(index));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(index);
        }
      });

      galleryGrid.appendChild(card);
    });
  };

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      if (filter === 'all') {
        filteredImages = [...galleryImages];
      } else {
        filteredImages = galleryImages.filter(img => img.category === filter);
      }
      renderGallery(filteredImages);
    });
  });

  renderGallery(filteredImages);

  function openLightbox(index) {
    currentImageIndex = index;
    updateLightbox();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateLightbox() {
    const item = filteredImages[currentImageIndex];
    if (!item) return;

    const title = currentLang === 'en' ? item.title_en : item.title_pt;
    const sub = currentLang === 'en' ? item.sub_en : item.sub_pt;
    const ofText = currentLang === 'en' ? 'of' : 'de';

    lightboxImg.src = item.src;
    lightboxImg.alt = title;
    lightboxTitle.textContent = `${title} — ${sub}`;
    lightboxCounter.textContent = `${currentImageIndex + 1} ${ofText} ${filteredImages.length}`;
  }

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % filteredImages.length;
    updateLightbox();
  }

  function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    updateLightbox();
  }

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', nextImage);
  if (prevBtn) prevBtn.addEventListener('click', prevImage);

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  });

  let touchStartX = 0;
  let touchEndX = 0;

  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 40) {
      if (diff < 0) {
        nextImage();
      } else {
        prevImage();
      }
    }
  }, { passive: true });
}

function initQuoteGenerator() {
  const quoteForm = document.getElementById('proposalForm');
  if (!quoteForm) return;

  quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('propName')?.value.trim() || 'Client';
    const service = document.getElementById('propService')?.value || 'General Inquiry';
    const city = document.getElementById('propCity')?.value.trim() || 'Not specified';
    const date = document.getElementById('propDate')?.value || 'TBD';
    const details = document.getElementById('propDetails')?.value.trim() || '';

    let message;
    if (currentLang === 'en') {
      message = `Hello Pat! My name is *${name}*.\n\n`;
      message += `I would like to inquire about booking your professional dance services:\n`;
      message += `• *Service:* ${service}\n`;
      message += `• *City/Location:* ${city}\n`;
      message += `• *Target Date:* ${date}\n`;
      if (details) message += `• *Details:* ${details}\n`;
      message += `\nCould you please share your availability and rates? Thank you!`;
    } else {
      message = `Olá Pat! Meu nome é *${name}*.\n\n`;
      message += `Gostaria de solicitar uma proposta profissional:\n`;
      message += `• *Serviço:* ${service}\n`;
      message += `• *Cidade/Estado:* ${city}\n`;
      message += `• *Data Prevista:* ${date}\n`;
      if (details) message += `• *Detalhes:* ${details}\n`;
      message += `\nPoderia me passar detalhes sobre disponibilidade e valores? Muito obrigado!`;
    }

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5567996376978?text=${encoded}`;
    window.open(whatsappUrl, '_blank');
  });
}

function initContactForm() {
  const contactForm = document.getElementById('directContactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName')?.value.trim() || 'Visitor';
    const email = document.getElementById('contactEmail')?.value.trim() || '';
    const phone = document.getElementById('contactPhone')?.value.trim() || '';
    const messageText = document.getElementById('contactMessage')?.value.trim() || '';

    let text;
    if (currentLang === 'en') {
      text = `Hello Pat! Message sent via your official portfolio:\n\n`;
      text += `Name: *${name}*\n`;
      if (email) text += `Email: ${email}\n`;
      if (phone) text += `Phone: ${phone}\n`;
      text += `\nMessage:\n${messageText}`;
    } else {
      text = `Olá Pat! Mensagem enviada pelo site oficial:\n\n`;
      text += `Nome: *${name}*\n`;
      if (email) text += `E-mail: ${email}\n`;
      if (phone) text += `Telefone: ${phone}\n`;
      text += `\nMensagem:\n${messageText}`;
    }

    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/5567996376978?text=${encoded}`;
    window.open(whatsappUrl, '_blank');
  });
}

function initScrollAnimations() {
  const fadeElements = document.querySelectorAll('.fade-up');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  fadeElements.forEach(el => observer.observe(el));
}
