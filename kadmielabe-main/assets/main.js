/* ====================================
   MAIN JAVASCRIPT FILE
   ==================================== */

document.addEventListener('DOMContentLoaded', () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ====== Hero Typewriter Animation ======
    const line1 = document.getElementById('typewriter-line1');
    const line2 = document.getElementById('typewriter-line2');

    if (line1 && line2 && !prefersReducedMotion) {
        const text1 = 'Je suis Kadmiel,';
        const text2 = 'Développeur Web';

        const typeText = (element, text, delay, callback) => {
            let index = 0;
            const interval = setInterval(() => {
                element.textContent = text.slice(0, index + 1);
                index += 1;
                if (index >= text.length) {
                    clearInterval(interval);
                    if (callback) callback();
                }
            }, delay);
        };

        const deleteText = (element, text, delay, callback) => {
            let index = text.length;
            const interval = setInterval(() => {
                element.textContent = text.slice(0, index - 1);
                index -= 1;
                if (index <= 0) {
                    clearInterval(interval);
                    if (callback) callback();
                }
            }, delay / 2);
        };

        const loopTypewriter = () => {
            typeText(line1, text1, 60, () => {
                setTimeout(() => {
                    typeText(line2, text2, 60, () => {
                        setTimeout(() => {
                            deleteText(line2, text2, 60, () => {
                                deleteText(line1, text1, 60, () => {
                                    setTimeout(loopTypewriter, 300);
                                });
                            });
                        }, 1200);
                    });
                }, 400);
            });
        };

        loopTypewriter();
    } else if (line1 && line2) {
        line1.textContent = '# Je suis Kadmiel,';
        line2.textContent = 'Développeur Web';
    }

    // ====== Animated Counters ======
    const counters = document.querySelectorAll('.counter-value');

    const animateCounter = (element) => {
        const target = Number(element.dataset.target || 0);
        const suffix = element.dataset.suffix || '';
        const duration = 1400;
        const startTime = performance.now();

        const update = (timestamp) => {
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(target * eased);
            element.textContent = `${currentValue}${suffix}`;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = `${target}${suffix}`;
            }
        };

        requestAnimationFrame(update);
    };

    if (counters.length) {
        if (prefersReducedMotion) {
            counters.forEach(counter => {
                const target = Number(counter.dataset.target || 0);
                const suffix = counter.dataset.suffix || '';
                counter.textContent = `${target}${suffix}`;
            });
        } else {
            const counterObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounter(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.6 });

            counters.forEach(counter => counterObserver.observe(counter));
        }
    }

    // ====== Scroll-to-Top Button Logic ======
    const scrollBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ====== Scroll Reveal Animation Logic ======
    if (!prefersReducedMotion) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('.scroll-reveal').forEach((el, index) => {
            if (el.classList.contains('stagger-item')) {
                // Add staggered delay for list items/cards (5 items max, 100ms each)
                const delay = (index % 5) * 100;
                el.style.transitionDelay = `${delay}ms`;
            }
            revealObserver.observe(el);
        });
    } else {
        // Fallback for reduced motion preference
        document.querySelectorAll('.scroll-reveal').forEach(el => {
            el.classList.add('is-visible');
            el.style.transition = 'none';
            el.style.transform = 'none';
            el.style.opacity = '1';
        });
    }

    // ====== Category Filtering Logic for Portfolio Section ======
    (function setupCategoryFilter() {
        const filterButtons = Array.from(document.querySelectorAll('#realisations .filter-btn'));
        const projectCards = Array.from(document.querySelectorAll('#realisations [data-category]'));

        if (!filterButtons.length || !projectCards.length) return;

        function setActive(btn) {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');
        }

        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;
                setActive(btn);
                projectCards.forEach(card => {
                    if (!filter || filter === 'all' || card.dataset.category === filter) {
                        card.style.display = '';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    })();

    // ====== Mobile Menu Toggle ======
    (function setupMobileMenu() {
        const btn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileMenuContent = document.getElementById('mobileMenuContent');
        const mobileLinks = mobileMenuContent?.querySelectorAll('a');

        if (!btn || !mobileMenu || !mobileMenuContent) {
            console.warn('Mobile menu elements not found.');
            return;
        }

        let isOpen = false;

        function openMenu() {
            if (isOpen) return;
            
            isOpen = true;
            
            // Show overlay - handle Tailwind classes
            mobileMenu.classList.remove('opacity-0', 'invisible', 'pointer-events-none');
            mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
            
            // Show menu - handle Tailwind classes
            mobileMenuContent.classList.remove('-translate-y-full', 'opacity-0', 'invisible');
            mobileMenuContent.classList.add('opacity-100');
            
            // Update button state
            btn.setAttribute('aria-expanded', 'true');
            
            // Prevent body scroll
            const body = document.body;
            const html = document.documentElement;
            body.style.overflow = 'hidden';
            html.style.overflow = 'hidden';
            body.style.height = '100vh';
        }

        function closeMenu() {
            if (!isOpen) return;
            
            isOpen = false;
            
            // Hide overlay - handle Tailwind classes
            mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
            mobileMenu.classList.add('opacity-0', 'invisible', 'pointer-events-none');
            
            // Hide menu - handle Tailwind classes
            mobileMenuContent.classList.add('-translate-y-full', 'opacity-0', 'invisible');
            mobileMenuContent.classList.remove('opacity-100');
            
            // Update button state
            btn.setAttribute('aria-expanded', 'false');
            
            // Restore body scroll
            const body = document.body;
            const html = document.documentElement;
            body.style.overflow = '';
            html.style.overflow = '';
            body.style.height = '';
        }

        // Toggle menu on button click
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        // Close menu when clicking on links - FIXED: Don't delay navigation
        mobileLinks?.forEach(link => {
            link.addEventListener('click', (e) => {
                // Don't prevent default - let the anchor link work naturally
                // Just close the menu immediately
                closeMenu();
            });
        });

        // Close menu when clicking on the overlay
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                closeMenu();
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (isOpen && !btn.contains(e.target) && !mobileMenuContent.contains(e.target)) {
                closeMenu();
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isOpen) {
                closeMenu();
            }
        });

        // Close menu on window resize to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768 && isOpen) {
                closeMenu();
            }
        });
    })();
});
