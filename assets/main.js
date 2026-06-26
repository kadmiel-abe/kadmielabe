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
        const links = document.getElementById('navLinks');

        if (!btn || !links) return;

        btn.addEventListener('click', () => {
            const hidden = links.classList.toggle('hidden');
            btn.setAttribute('aria-expanded', String(!hidden));
        });
    })();
});
