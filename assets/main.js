/* ====================================
   MAIN JAVASCRIPT FILE
   ==================================== */

document.addEventListener('DOMContentLoaded', () => {
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
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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

        if (!btn || !mobileMenu || !mobileMenuContent) return;

        let isOpen = false;

        function openMenu() {
            isOpen = true;
            mobileMenu.classList.remove('opacity-0', 'invisible');
            mobileMenuContent.classList.remove('-translate-y-full');
            btn.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden';
        }

        function closeMenu() {
            isOpen = false;
            mobileMenu.classList.add('opacity-0', 'invisible');
            mobileMenuContent.classList.add('-translate-y-full');
            btn.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }

        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (isOpen) closeMenu();
            else openMenu();
        });

        // Close menu when clicking on links
        mobileLinks?.forEach(link => {
            link.addEventListener('click', () => {
                // Small delay for smooth animation
                setTimeout(closeMenu, 150);
            });
        });

        // Close menu when clicking on the overlay
        mobileMenu.addEventListener('click', closeMenu);

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

        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768 && isOpen) {
                closeMenu();
            }
        });
    })();
});
