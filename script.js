// ===================================
// Visual Enhancements & UX Scripts
// ===================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== Scroll Animations =====
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-on-scroll');
                    // Optional: stop observing after animation
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all sections and cards
        const elementsToAnimate = document.querySelectorAll(
            'section, .achievement-card, .practice-card, .magazine-card, .metric-item'
        );
        
        elementsToAnimate.forEach((el, index) => {
            // Add staggered animation delay
            el.style.animationDelay = `${index * 0.1}s`;
            observer.observe(el);
        });
    }

    // ===== Back to Top Button =====
    function initBackToTop() {
        // Create button if not exists
        let backToTopBtn = document.querySelector('.back-to-top');
        if (!backToTopBtn) {
            backToTopBtn = document.createElement('button');
            backToTopBtn.className = 'back-to-top';
            backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
            backToTopBtn.setAttribute('aria-label', 'Back to top');
            document.body.appendChild(backToTopBtn);
        }

        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        // Scroll to top on click
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ===== Card Hover Effects =====
    function initCardEffects() {
        const cards = document.querySelectorAll('.achievement-card, .practice-card, .magazine-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    // ===== Smooth Scroll for Anchor Links =====
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href !== '#' && href !== '') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }

    // ===== Number Counter Animation =====
    function animateValue(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = value + (element.dataset.suffix || '');
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    function initCounters() {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    const target = entry.target;
                    const endValue = parseInt(target.textContent.replace(/\D/g, ''));
                    const suffix = target.textContent.replace(/[\d\s]/g, '');
                    target.dataset.suffix = suffix;
                    animateValue(target, 0, endValue, 2000);
                    target.classList.add('counted');
                    counterObserver.unobserve(target);
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.metric-number').forEach(counter => {
            counterObserver.observe(counter);
        });
    }

    // ===== Parallax Effect for Hero =====
    function initParallax() {
        const hero = document.querySelector('.hero');
        if (hero) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * 0.5;
                hero.style.transform = `translateY(${rate}px)`;
            });
        }
    }

    // ===== Add Loading Animation =====
    function hideLoader() {
        const loader = document.querySelector('.page-loader');
        if (loader) {
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => loader.remove(), 300);
            }, 500);
        }
    }

    // Initialize all functions
    initScrollAnimations();
    initBackToTop();
    initCardEffects();
    initSmoothScroll();
    initCounters();
    initParallax();
    hideLoader();

    // Log success
    console.log('✨ Visual enhancements loaded successfully!');
});

// ===== Add ripple effect to buttons =====
document.addEventListener('click', function(e) {
    if (e.target.matches('.college-link-btn, .poster-btn, .app-download-btn, .magazine-btn')) {
        const button = e.target;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        const existingRipple = button.querySelector('.ripple');
        if (existingRipple) {
            existingRipple.remove();
        }
        
        button.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    }
});
