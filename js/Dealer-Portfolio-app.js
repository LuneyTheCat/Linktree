// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeSmoothScrolling();
    initializeInteractiveElements();
});

// Initialize scroll-triggered animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add animation classes and observe elements
    const animatedElements = document.querySelectorAll(
        '.gallery-item, .product-card, .link-card, .welcome-content'
    );
    
    animatedElements.forEach(function(element, index) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(element);
    });

    // Add CSS for animate-in class
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// Initialize smooth scrolling for anchor links
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Handle hash-only links
            if (href === '#' || href.length <= 1) {
                e.preventDefault();
                return;
            }
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize interactive elements
function initializeInteractiveElements() {
    // Add hover effects to gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click feedback to product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(function(card) {
        card.addEventListener('click', function() {
            // Create ripple effect
            createRippleEffect(this, event);
        });
    });

    // Add logo interaction
    const logoSvg = document.querySelector('.logo-svg');
    if (logoSvg) {
        logoSvg.addEventListener('click', function() {
            this.style.animation = 'none';
            this.offsetHeight; // Trigger reflow
            this.style.animation = 'logoSpin 0.8s ease-in-out';
        });
    }

    // Add CSS for logo spin animation
    const logoStyle = document.createElement('style');
    logoStyle.textContent = `
        @keyframes logoSpin {
            0% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(180deg) scale(1.1); }
            100% { transform: rotate(360deg) scale(1); }
        }
    `;
    document.head.appendChild(logoStyle);
}

// Create ripple effect for interactive elements
function createRippleEffect(element, event) {
    const rect = element.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    // Add ripple styles if not already added
    if (!document.querySelector('#ripple-styles')) {
        const rippleStyle = document.createElement('style');
        rippleStyle.id = 'ripple-styles';
        rippleStyle.textContent = `
            .ripple {
                position: absolute;
                border-radius: 50%;
                background-color: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple-animation 0.6s linear;
                pointer-events: none;
                z-index: 1;
            }
            
            @keyframes ripple-animation {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(rippleStyle);
    }
    
    // Remove ripple after animation
    setTimeout(function() {
        ripple.remove();
    }, 600);
}

// Add parallax effect to header background
function initializeParallax() {
    const header = document.querySelector('.header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            header.style.transform = `translateY(${parallax}px)`;
        });
    }
}

// Initialize theme detection and enhancement
function initializeThemeEnhancements() {
    // Detect user's color scheme preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Add a subtle theme indicator
    function updateThemeIndicator(isDark) {
        const body = document.body;
        if (isDark) {
            body.style.setProperty('--theme-accent', 'rgba(50, 184, 198, 0.1)');
        } else {
            body.style.setProperty('--theme-accent', 'rgba(33, 128, 141, 0.1)');
        }
    }
    
    // Initial theme setup
    updateThemeIndicator(prefersDarkScheme.matches);
    
    // Listen for theme changes
    prefersDarkScheme.addEventListener('change', function(e) {
        updateThemeIndicator(e.matches);
    });
}

// Add loading animation
function initializeLoadingAnimation() {
    const welcomeTitle = document.querySelector('.welcome-title');
    const siteTitle = document.querySelector('.site-title');
    
    if (welcomeTitle) {
        welcomeTitle.style.opacity = '0';
        welcomeTitle.style.transform = 'translateY(20px)';
        
        setTimeout(function() {
            welcomeTitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            welcomeTitle.style.opacity = '1';
            welcomeTitle.style.transform = 'translateY(0)';
        }, 300);
    }
    
    if (siteTitle) {
        siteTitle.style.opacity = '0';
        siteTitle.style.transform = 'translateY(-20px)';
        
        setTimeout(function() {
            siteTitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            siteTitle.style.opacity = '1';
            siteTitle.style.transform = 'translateY(0)';
        }, 100);
    }
}

// Initialize all enhancements
document.addEventListener('DOMContentLoaded', function() {
    initializeLoadingAnimation();
    initializeThemeEnhancements();
    
    // Add a subtle entrance animation to the logo
    const logoContainer = document.querySelector('.logo-container');
    if (logoContainer) {
        logoContainer.style.opacity = '0';
        logoContainer.style.transform = 'scale(0.8)';
        
        setTimeout(function() {
            logoContainer.style.transition = 'opacity 1s ease, transform 1s ease';
            logoContainer.style.opacity = '1';
            logoContainer.style.transform = 'scale(1)';
        }, 200);
    }
});

// Add error handling for images (if any were to be added later)
function handleImageErrors() {
    const images = document.querySelectorAll('img');
    images.forEach(function(img) {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            
            // Create a fallback placeholder
            const placeholder = document.createElement('div');
            placeholder.className = 'image-error-placeholder';
            placeholder.style.cssText = `
                width: 100%;
                height: 200px;
                background: var(--color-bg-2);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: var(--radius-base);
                color: var(--color-text-secondary);
                font-size: var(--font-size-sm);
            `;
            placeholder.textContent = 'Image not available';
            
            this.parentNode.insertBefore(placeholder, this);
        });
    });
}

// Performance optimization: Throttle scroll events
function throttle(func, delay) {
    let timeoutId;
    let lastExecTime = 0;
    
    return function(...args) {
        const currentTime = Date.now();
        
        if (currentTime - lastExecTime > delay) {
            func.apply(this, args);
            lastExecTime = currentTime;
        } else {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
                lastExecTime = Date.now();
            }, delay - (currentTime - lastExecTime));
        }
    };
}

// Add smooth reveal animation for sections
function addSectionRevealAnimations() {
    const sections = document.querySelectorAll('section');
    
    const revealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-revealed');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    sections.forEach(function(section) {
        section.style.opacity = '0.8';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        revealObserver.observe(section);
    });
    
    // Add revealed state styles
    const sectionStyle = document.createElement('style');
    sectionStyle.textContent = `
        .section-revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(sectionStyle);
}

// Initialize section reveal animations
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(addSectionRevealAnimations, 500);
});