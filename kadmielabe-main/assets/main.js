/**
 * ==============================================================================
 * KADMIEL ABE — MOTION DESIGN CONTROLLER JS (60 FPS NATIVE)
 * ==============================================================================
 * Rôles :
 *  - Orchestrateur centralisé d'animations ultra-fluides et légères.
 *  - 0 librairie lourde : 100% natif (IntersectionObserver + requestAnimationFrame).
 *  - Détection automatique et respect total de 'prefers-reduced-motion'.
 *  - Optimisé pour mobile-first et performance maximale (GPU friendly).
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // 1. Détection de l'accessibilité
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ==============================================================================
  // MODULE 1 : ÉCRAN DE CHARGEMENT ANIMÉ (PRELOADER)
  // ==============================================================================
  (function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    if (prefersReducedMotion) {
      preloader.style.display = 'none';
      return;
    }

    const hidePreloader = () => {
      preloader.classList.add('preloader-hidden');
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 700);
    };

    // Attendre chargement des ressources ou 1200ms max pour éviter toute attente inutile
    if (document.readyState === 'complete') {
      setTimeout(hidePreloader, 400);
    } else {
      window.addEventListener('load', () => setTimeout(hidePreloader, 500));
      setTimeout(hidePreloader, 1800); // Fallback de sécurité
    }
  })();

  // ==============================================================================
  // MODULE 2 : BARRE DE PROGRESSION DU SCROLL
  // ==============================================================================
  (function initScrollProgressBar() {
    const progressBar = document.getElementById('scrollProgressBar');
    if (!progressBar) return;

    let ticking = false;
    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progressPercent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      progressBar.style.width = `${Math.min(100, Math.max(0, progressPercent))}%`;
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    }, { passive: true });
    updateProgress();
  })();

  // ==============================================================================
  // MODULE 3 : CURSEUR PERSONNALISÉ FLUIDE (DESKTOP ONLY)
  // ==============================================================================
  (function initCustomCursor() {
    if (prefersReducedMotion || !window.matchMedia('(pointer: fine)').matches) return;

    const dot = document.querySelector('.custom-cursor-dot');
    const outline = document.querySelector('.custom-cursor-outline');
    if (!dot || !outline) return;

    let mouseX = -100, mouseY = -100;
    let outlineX = -100, outlineY = -100;
    let isVisible = false;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        dot.style.opacity = '1';
        outline.style.opacity = '1';
        isVisible = true;
      }

      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    }, { passive: true });

    // Animation avec LERP (Linear Interpolation) pour un effet fluide de traînée
    const renderCursor = () => {
      outlineX += (mouseX - outlineX) * 0.18;
      outlineY += (mouseY - outlineY) * 0.18;
      outline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(renderCursor);
    };
    requestAnimationFrame(renderCursor);

    // Réaction sur les éléments cliquables
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .project-card, .service-card, .tilt-card, summary, .filter-btn');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });

    // Masquage si le curseur sort de l'écran
    document.addEventListener('mouseleave', () => {
      dot.style.opacity = '0';
      outline.style.opacity = '0';
      isVisible = false;
    });
  })();

  // ==============================================================================
  // MODULE 4 : NAVBAR STICKY, SOULIGNEMENT & SCROLLSPY
  // ==============================================================================
  (function initNavbar() {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id], header[id]');

    // 1. Détection du scroll pour effet Glassmorphism & rétrécissement
    const handleNavScroll = () => {
      if (window.scrollY > 40) {
        nav?.classList.add('nav-scrolled');
      } else {
        nav?.classList.remove('nav-scrolled');
      }
    };
    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll();

    // 2. Smooth Scroll sur les ancres
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          const navHeight = nav ? nav.offsetHeight : 70;
          const targetPosition = targetEl.getBoundingClientRect().top + window.scrollY - navHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: prefersReducedMotion ? 'auto' : 'smooth',
          });
        }
      });
    });

    // 3. Scrollspy : Mise en surbrillance du lien actif selon la section visible
    if ('IntersectionObserver' in window && sections.length) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              if (link.getAttribute('href') === `#${currentId}`) {
                link.classList.add('active-link');
              } else {
                link.classList.remove('active-link');
              }
            });
          }
        });
      }, {
        threshold: 0.25,
        rootMargin: '-70px 0px -40% 0px',
      });

      sections.forEach((sec) => observer.observe(sec));
    }
  })();

  // ==============================================================================
  // MODULE 5 : MENU MOBILE MODERNE
  // ==============================================================================
  (function initMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuContent = document.getElementById('mobileMenuContent');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
    const links = mobileMenuContent?.querySelectorAll('a');

    if (!btn || !mobileMenu || !mobileMenuContent) return;

    let isOpen = false;

    const openMenu = () => {
      isOpen = true;
      btn.setAttribute('aria-expanded', 'true');
      mobileMenu.classList.remove('opacity-0', 'invisible', 'pointer-events-none');
      mobileMenu.classList.add('opacity-100', 'pointer-events-auto');

      mobileMenuContent.classList.remove('-translate-y-full', 'opacity-0', 'invisible');
      mobileMenuContent.classList.add('opacity-100');

      if (menuIcon && closeIcon) {
        menuIcon.style.opacity = '0';
        menuIcon.style.transform = 'scale(0) rotate(-90deg)';
        closeIcon.style.opacity = '1';
        closeIcon.style.transform = 'scale(1) rotate(0deg)';
      }
      document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
      isOpen = false;
      btn.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
      mobileMenu.classList.add('opacity-0', 'invisible', 'pointer-events-none');

      mobileMenuContent.classList.add('-translate-y-full', 'opacity-0', 'invisible');
      mobileMenuContent.classList.remove('opacity-100');

      if (menuIcon && closeIcon) {
        menuIcon.style.opacity = '1';
        menuIcon.style.transform = 'scale(1) rotate(0deg)';
        closeIcon.style.opacity = '0';
        closeIcon.style.transform = 'scale(0) rotate(90deg)';
      }
      document.body.style.overflow = '';
    };

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      isOpen ? closeMenu() : openMenu();
    });

    links?.forEach((link) => {
      link.addEventListener('click', () => closeMenu());
    });

    mobileMenu.addEventListener('click', () => closeMenu());

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) closeMenu();
    });
  })();

  // ==============================================================================
  // MODULE 6 : SCROLL REVEAL (FADE-UP, ALTERNÉ GAUCHE/DROITE & STAGGER)
  // ==============================================================================
  (function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-init, .stagger-group');
    if (!revealElements.length) return;

    if (prefersReducedMotion) {
      revealElements.forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    // Calcul automatique des indices de stagger pour les cartes enfants
    document.querySelectorAll('.stagger-group').forEach((group) => {
      const items = group.querySelectorAll('.stagger-item');
      items.forEach((item, index) => {
        item.style.setProperty('--stagger-i', index);
      });
    });

    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');

          // Révéler les items de stagger si présent
          if (entry.target.classList.contains('stagger-group')) {
            entry.target.querySelectorAll('.stagger-item').forEach((item) => {
              item.classList.add('is-revealed');
            });
          }

          // Lancer l'animation des jauges de compétences si présentes dans la section
          const skillBars = entry.target.querySelectorAll('.skill-bar-fill');
          skillBars.forEach((bar) => {
            const width = bar.getAttribute('data-width') || '0%';
            bar.style.width = width;
          });

          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    });

    revealElements.forEach((el) => revealObserver.observe(el));
  })();

  // ==============================================================================
  // MODULE 7 : COMPTEURS STATISTIQUES ANIMÉS (CUBIC EASE-OUT)
  // ==============================================================================
  (function initCounters() {
    const counters = document.querySelectorAll('.counter-value');
    if (!counters.length) return;

    const animateCount = (el) => {
      const target = Number(el.dataset.target || 0);
      const suffix = el.dataset.suffix || '';
      const duration = 1600;
      const startTime = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        // Courbe easeOutCubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(target * eased);
        el.textContent = `${current}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          el.textContent = `${target}${suffix}`;
        }
      };

      requestAnimationFrame(tick);
    };

    if (prefersReducedMotion) {
      counters.forEach((c) => {
        c.textContent = `${c.dataset.target || 0}${c.dataset.suffix || ''}`;
      });
      return;
    }

    const counterObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach((c) => counterObserver.observe(c));
  })();

  // ==============================================================================
  // MODULE 8 : MACHINE À ÉCRIRE HERO (TYPEWRITER MULTI-TEXTES)
  // ==============================================================================
  (function initTypewriter() {
    const line1 = document.getElementById('typewriter-line1');
    const line2 = document.getElementById('typewriter-line2');
    if (!line2) return;

    const phrases = [
      'Développeur Web',
      'Spécialiste IA',
      'Créateur de contenu',
      'Designer UI/UX',
    ];

    if (line1) line1.textContent = 'Je suis Kadmiel,';

    if (prefersReducedMotion) {
      line2.textContent = phrases[0];
      return;
    }

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 100;

    const typeLoop = () => {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        line2.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        delay = 45;
      } else {
        line2.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        delay = 90;
      }

      // Si le mot est fini d'écrire
      if (!isDeleting && charIndex === currentPhrase.length) {
        delay = 1800; // Pause de lecture
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        delay = 400; // Pause avant le prochain mot
      }

      setTimeout(typeLoop, delay);
    };

    setTimeout(typeLoop, 600);
  })();

  // ==============================================================================
  // MODULE 9 : EFFET 3D TILT & GLARE SUR LES CARTES
  // ==============================================================================
  (function init3DTilt() {
    if (prefersReducedMotion || !window.matchMedia('(pointer: fine)').matches) return;

    const cards = document.querySelectorAll('.tilt-card');
    cards.forEach((card) => {
      // Ajout du reflet spéculaire
      let glare = card.querySelector('.card-glare');
      if (!glare) {
        glare = document.createElement('div');
        glare.className = 'card-glare';
        card.appendChild(glare);
      }

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -9; // Max 9 degrés
        const rotateY = ((x - centerX) / centerX) * 9;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale(1.02)`;
        card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
        card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)';
      });
    });
  })();

  // ==============================================================================
  // MODULE 10 : BOUTONS MAGNÉTIQUES & EFFET RIPPLE
  // ==============================================================================
  (function initButtons() {
    // 1. Effet Magnétique
    if (!prefersReducedMotion && window.matchMedia('(pointer: fine)').matches) {
      const magneticBtns = document.querySelectorAll('.magnetic-btn');
      magneticBtns.forEach((btn) => {
        btn.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          btn.style.transform = `translate3d(${x * 0.28}px, ${y * 0.28}px, 0)`;
        });

        btn.addEventListener('mouseleave', () => {
          btn.style.transform = 'translate3d(0, 0, 0)';
        });
      });
    }

    // 2. Ripple Effect au clic
    const rippleElements = document.querySelectorAll('.ripple-btn, .hero-cta, .btn-3d, .filter-btn');
    rippleElements.forEach((btn) => {
      btn.addEventListener('click', function (e) {
        const rect = this.getBoundingClientRect();
        const circle = document.createElement('span');
        const diameter = Math.max(rect.width, rect.height);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - rect.left - radius}px`;
        circle.style.top = `${e.clientY - rect.top - radius}px`;
        circle.classList.add('ripple-circle');

        const existing = this.querySelector('.ripple-circle');
        if (existing) existing.remove();

        this.appendChild(circle);
        setTimeout(() => circle.remove(), 600);
      });
    });
  })();

  // ==============================================================================
  // MODULE 11 : ONGLETS & FILTRAGE DES PROJETS AVEC TRANSITION
  // ==============================================================================
  (function initFilterTabs() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card[data-category]');
    if (!filterBtns.length || !cards.length) return;

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterBtns.forEach((b) => {
          b.classList.remove('active', 'bg-primary', 'text-white');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        const filter = btn.getAttribute('data-filter') || 'all';

        cards.forEach((card) => {
          const cat = card.getAttribute('data-category');
          if (filter === 'all' || cat === filter) {
            card.classList.remove('filter-hide');
            card.classList.add('filter-show');
          } else {
            card.classList.remove('filter-show');
            card.classList.add('filter-hide');
          }
        });
      });
    });
  })();

  // ==============================================================================
  // MODULE 12 : MODALE DE PROJET INTERACTIVE (ZOOM + FOND FLOU)
  // ==============================================================================
  (function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const closeBtn = document.getElementById('modalCloseBtn');
    const cards = document.querySelectorAll('.project-card');
    if (!modal) return;

    const modalTitle = document.getElementById('modalTitle');
    const modalCategory = document.getElementById('modalCategory');
    const modalDesc = document.getElementById('modalDesc');
    const modalImg = document.getElementById('modalImg');
    const modalTags = document.getElementById('modalTags');
    const modalResults = document.getElementById('modalResults');

    const openModal = (card) => {
      const title = card.querySelector('h3')?.textContent || 'Projet';
      const category = card.querySelector('[data-badge]')?.textContent || 'Réalisation';
      const desc = card.querySelector('p')?.textContent || '';
      const img = card.querySelector('img')?.getAttribute('src') || '';
      const results = card.querySelector('.project-results')?.textContent || '';
      const tags = Array.from(card.querySelectorAll('.project-tag')).map((t) => t.textContent);

      if (modalTitle) modalTitle.textContent = title;
      if (modalCategory) modalCategory.textContent = category;
      if (modalDesc) modalDesc.textContent = desc;
      if (modalImg) modalImg.src = img;
      if (modalResults) modalResults.textContent = results;

      if (modalTags) {
        modalTags.innerHTML = tags.map((t) => `<span class="px-3 py-1 bg-surface-alt border border-outline-variant/10 rounded-full text-xs font-semibold text-primary">${t}</span>`).join('');
      }

      modal.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
      modal.classList.remove('modal-open');
      document.body.style.overflow = '';
    };

    cards.forEach((card) => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', (e) => {
        // Empêcher l'ouverture si on clique sur un lien externe direct
        if (e.target.closest('a')) return;
        openModal(card);
      });
    });

    closeBtn?.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('modal-open')) {
        closeModal();
      }
    });
  })();

  // ==============================================================================
  // MODULE 13 : ACCORDÉON FAQ FLUIDE (TRANSITION DE HAUTEUR PURE)
  // ==============================================================================
  (function initFaqAccordion() {
    const items = document.querySelectorAll('.faq-accordion-item');
    if (!items.length) return;

    items.forEach((item) => {
      const btn = item.querySelector('.faq-question-btn');
      if (!btn) return;

      btn.addEventListener('click', () => {
        const isActive = item.classList.contains('faq-active');

        // Fermer les autres questions pour une expérience accordéon propre
        items.forEach((other) => {
          if (other !== item) other.classList.remove('faq-active');
        });

        if (isActive) {
          item.classList.remove('faq-active');
        } else {
          item.classList.add('faq-active');
        }
      });
    });
  })();

  // ==============================================================================
  // MODULE 14 : FORMULAIRE DE CONTACT (FLOATING LABELS & VALIDATION ANIMÉE)
  // ==============================================================================
  (function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const fields = form.querySelectorAll('.floating-input');
    fields.forEach((input) => {
      const handleInput = () => {
        if (input.value.trim() !== '') {
          input.classList.add('has-value');
        } else {
          input.classList.remove('has-value');
        }
        input.classList.remove('field-error');
      };
      input.addEventListener('input', handleInput);
      input.addEventListener('blur', handleInput);
      handleInput();
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let hasError = false;

      fields.forEach((input) => {
        if (!input.checkValidity() || input.value.trim() === '') {
          input.classList.add('field-error');
          hasError = true;
        } else {
          input.classList.remove('field-error');
        }
      });

      if (hasError) return;

      // Bouton état de succès
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.innerHTML = `
          <span class="material-symbols-outlined text-xl">check_circle</span>
          Message envoyé avec succès !
        `;
        submitBtn.classList.add('bg-green-600');
      }

      form.reset();
      fields.forEach((input) => input.classList.remove('has-value'));

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.innerHTML = originalText;
          submitBtn.classList.remove('bg-green-600');
        }
      }, 4000);
    });
  })();

  // ==============================================================================
  // MODULE 15 : GESTION DU THÈME SOMBRE/CLAIR (PERSISTANT)
  // ==============================================================================
  (function initDarkMode() {
    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    if (!toggleBtns.length) return;

    const savedTheme = localStorage.getItem('kadmiel-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme ? savedTheme === 'dark' : systemPrefersDark;

    const updateIcons = (dark) => {
      toggleBtns.forEach((btn) => {
        const icon = btn.querySelector('.theme-icon');
        if (icon) {
          icon.textContent = dark ? 'light_mode' : 'dark_mode';
        }
      });
    };

    if (isDark) {
      document.documentElement.classList.add('dark');
      updateIcons(true);
    } else {
      document.documentElement.classList.remove('dark');
      updateIcons(false);
    }

    toggleBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const currentlyDark = document.documentElement.classList.contains('dark');
        if (currentlyDark) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('kadmiel-theme', 'light');
          updateIcons(false);
        } else {
          document.documentElement.classList.add('dark');
          localStorage.setItem('kadmiel-theme', 'dark');
          updateIcons(true);
        }
      });
    });
  })();

  // ==============================================================================
  // MODULE 16 : BOUTON RETOUR EN HAUT (BACK TO TOP)
  // ==============================================================================
  (function initBackToTop() {
    const btn = document.getElementById('scrollToTopBtn');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        btn.classList.add('btn-visible');
      } else {
        btn.classList.remove('btn-visible');
      }
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
    });
  })();

  // ==============================================================================
  // MODULE 17 : EFFET PARALLAXE DOUX SUR LES IMAGES ET LE HERO
  // ==============================================================================
  (function initParallax() {
    if (prefersReducedMotion || !window.matchMedia('(pointer: fine)').matches) return;

    const heroPhoto = document.querySelector('.hero-photo');
    if (!heroPhoto) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scroll = window.scrollY;
          if (scroll < 800) {
            heroPhoto.style.transform = `translate3d(0, ${scroll * 0.08}px, 0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  })();
});
