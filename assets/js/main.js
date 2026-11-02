/**
 * PAT OFICIAL — Modern Dance Portfolio
 * Apple Glassmorphism Interactions & High Performance Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCounters();
  initGalleryAndLightbox();
  initQuoteGenerator();
  initContactForm();
  initScrollAnimations();
});

/* ==========================================================================
   1. NAVBAR & APPLE MOBILE GLASS MENU
   ========================================================================== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const navItems = document.querySelectorAll('.nav-link');

  // Sticky Navbar Blur Effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile Menu Toggle (iOS-style drawer)
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

    // Auto-close menu on link selection
    navItems.forEach(link => {
      link.addEventListener('click', () => toggleMobileMenu(true));
    });

    // Close on window resize if enlarged to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
        toggleMobileMenu(true);
      }
    });
  }

  // Active section tracking with IntersectionObserver
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

/* ==========================================================================
   2. ANIMATED NUMBER COUNTERS (APPLE SMOOTH INTERPOLATION)
   ========================================================================== */
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

/* ==========================================================================
   3. GALLERY & APPLE LIQUID GLASS LIGHTBOX (SWIPE & KEYS)
   ========================================================================== */
const galleryImages = [
  { id: 1, src: 'assets/images/dance_1.jpg', category: 'solo', title: 'Expressão & Freestyle', sub: 'Performance Urbana', orient: 'square' },
  { id: 2, src: 'assets/images/dance_2.jpg', category: 'stage', title: 'Apresentação em Grupo', sub: 'Companhia Funk-se', orient: 'landscape' },
  { id: 3, src: 'assets/images/dance_3.jpg', category: 'stage', title: 'Presença Cênica & Movimento', sub: 'Espetáculo Teatral', orient: 'portrait' },
  { id: 4, src: 'assets/images/dance_4.jpg', category: 'solo', title: 'Patrick Fernando (Pat)', sub: 'Retrato Oficial DRT 00236/MS', orient: 'square' },
  { id: 5, src: 'assets/images/dance_5.jpg', category: 'stage', title: 'Energia de Palco', sub: 'Coreografia Cênica', orient: 'portrait' },
  { id: 6, src: 'assets/images/dance_6.jpg', category: 'workshops', title: 'Vivência Artística', sub: 'Imersão & Dança', orient: 'square' },
  { id: 7, src: 'assets/images/dance_7.jpg', category: 'solo', title: 'Técnica & Precisão', sub: 'Street Dance Culture', orient: 'portrait' },
  { id: 8, src: 'assets/images/dance_8.jpg', category: 'stage', title: 'Festival de Dança', sub: 'Competição & FIH2', orient: 'landscape' },
  { id: 9, src: 'assets/images/dance_9.jpg', category: 'stage', title: 'Momento Coreográfico', sub: 'Espetáculo Cênico', orient: 'landscape' },
  { id: 10, src: 'assets/images/dance_10.jpg', category: 'workshops', title: 'Conexão com a Turma', sub: 'Workshop de Danças Urbanas', orient: 'square' },
  { id: 11, src: 'assets/images/dance_11.jpg', category: 'stage', title: 'Cia Funk-se em Cena', sub: 'Apresentação Estadual', orient: 'landscape' },
  { id: 12, src: 'assets/images/dance_12.jpg', category: 'stage', title: 'Dinâmica de Palco', sub: 'Mostra Competitiva', orient: 'landscape' },
  { id: 13, src: 'assets/images/dance_13.jpg', category: 'solo', title: 'Solo Street Dance Fest', sub: 'Pioneirismo no MS', orient: 'portrait' },
  { id: 14, src: 'assets/images/dance_14.jpg', category: 'stage', title: 'Harmonia & Sincronia', sub: 'Mostra de Dança de Rua', orient: 'portrait' },
  { id: 15, src: 'assets/images/dance_15.jpg', category: 'workshops', title: 'Troca de Conhecimento', sub: 'Masterclass Funk-se', orient: 'landscape' },
  { id: 16, src: 'assets/images/dance_16.jpg', category: 'stage', title: 'Arte em Movimento', sub: 'Encerramento de Espetáculo', orient: 'landscape' }
];

let currentImageIndex = 0;
let filteredImages = [...galleryImages];

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

  function renderGallery(images) {
    galleryGrid.innerHTML = '';
    images.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = `gallery-item ${item.orient} fade-up visible`;
      card.setAttribute('data-category', item.category);
      card.setAttribute('data-index', index);
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `Ampliar imagem: ${item.title}`);

      card.innerHTML = `
        <img class="gallery-img" src="${item.src}" alt="${item.title} - ${item.sub}" loading="lazy">
        <div class="gallery-overlay">
          <div class="gallery-zoom-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </div>
          <div class="gallery-caption">${item.title}</div>
          <div class="gallery-subtext">${item.sub}</div>
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
  }

  // Filter Segmented Controls
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

    lightboxImg.src = item.src;
    lightboxImg.alt = item.title;
    lightboxTitle.textContent = `${item.title} — ${item.sub}`;
    lightboxCounter.textContent = `${currentImageIndex + 1} de ${filteredImages.length}`;
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

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  });

  // Touch Swipe for Mobile (iOS feel)
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

/* ==========================================================================
   4. INTERACTIVE WHATSAPP PROPOSAL GENERATOR
   ========================================================================== */
function initQuoteGenerator() {
  const quoteForm = document.getElementById('proposalForm');
  if (!quoteForm) return;

  quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('propName')?.value.trim() || 'Amigo(a)';
    const service = document.getElementById('propService')?.value || 'Informações Gerais';
    const city = document.getElementById('propCity')?.value.trim() || 'Não informada';
    const date = document.getElementById('propDate')?.value || 'A definir';
    const details = document.getElementById('propDetails')?.value.trim() || 'Gostaria de saber mais informações e disponibilidade.';

    let message = `Olá Pat! Meu nome é *${name}*.\n\n`;
    message += `Gostaria de solicitar uma proposta profissional:\n`;
    message += `• *Serviço:* ${service}\n`;
    message += `• *Cidade/Estado:* ${city}\n`;
    message += `• *Data Prevista:* ${date}\n`;
    message += `• *Detalhes:* ${details}\n\n`;
    message += `Poderia me passar detalhes sobre disponibilidade e valores? Muito obrigado!`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5567996376978?text=${encoded}`;

    window.open(whatsappUrl, '_blank');
  });
}

/* ==========================================================================
   5. DIRECT CONTACT FORM
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('directContactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName')?.value.trim() || 'Visitante';
    const email = document.getElementById('contactEmail')?.value.trim() || '';
    const phone = document.getElementById('contactPhone')?.value.trim() || '';
    const messageText = document.getElementById('contactMessage')?.value.trim() || '';

    let text = `Olá Pat! Mensagem enviada pelo site oficial:\n\n`;
    text += `Nome: *${name}*\n`;
    if (email) text += `E-mail: ${email}\n`;
    if (phone) text += `Telefone: ${phone}\n`;
    text += `\nMensagem:\n${messageText}`;

    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/5567996376978?text=${encoded}`;

    window.open(whatsappUrl, '_blank');
  });
}

/* ==========================================================================
   6. SCROLL REVEAL (SUBTLE APPLE TRANSITION)
   ========================================================================== */
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
