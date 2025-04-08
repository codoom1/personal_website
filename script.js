// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set the current year in the footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
        });
        
        // Close menu when a nav link is clicked
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                nav.classList.remove('active');
            });
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && !mobileMenuToggle.contains(e.target) && nav.classList.contains('active')) {
            mobileMenuToggle.classList.remove('active');
            nav.classList.remove('active');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Adjust offset for mobile
                const offset = window.innerWidth <= 768 ? 20 : 70;
                
                window.scrollTo({
                    top: targetElement.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Simple reveal animations on scroll
    const revealElements = document.querySelectorAll('.section');
    
    function checkReveal() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        revealElements.forEach(element => {
            const revealTop = element.getBoundingClientRect().top;
            
            if (revealTop < windowHeight - revealPoint) {
                element.classList.add('revealed');
            }
        });
    }
    
    // Add CSS for the reveal animation
    const style = document.createElement('style');
    style.textContent = `
        .section {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .section.revealed {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // Initial check and scroll event
    window.addEventListener('scroll', checkReveal);
    checkReveal();
    
    // Mobile menu toggle functionality
    const createMobileMenu = () => {
        // Only create if screen width is small
        if (window.innerWidth > 768) return;
        
        // Create mobile menu button if it doesn't exist
        if (!document.querySelector('.mobile-menu-btn')) {
            const nav = document.querySelector('nav');
            const btn = document.createElement('button');
            btn.className = 'mobile-menu-btn';
            btn.innerHTML = '<span></span><span></span><span></span>';
            btn.setAttribute('aria-label', 'Toggle menu');
            
            // Insert button before the nav
            nav.parentNode.insertBefore(btn, nav);
            
            // Add CSS for mobile menu
            const mobileStyle = document.createElement('style');
            mobileStyle.textContent = `
                @media (max-width: 768px) {
                    nav {
                        max-height: 0;
                        overflow: hidden;
                        transition: max-height 0.5s ease;
                    }
                    
                    nav.active {
                        max-height: 300px;
                    }
                    
                    .mobile-menu-btn {
                        display: block;
                        background: none;
                        border: none;
                        cursor: pointer;
                        padding: 10px;
                        margin: 10px auto;
                    }
                    
                    .mobile-menu-btn span {
                        display: block;
                        width: 25px;
                        height: 3px;
                        background-color: white;
                        margin: 5px 0;
                        transition: 0.3s;
                    }
                    
                    .mobile-menu-btn.active span:nth-child(1) {
                        transform: rotate(-45deg) translate(-5px, 6px);
                    }
                    
                    .mobile-menu-btn.active span:nth-child(2) {
                        opacity: 0;
                    }
                    
                    .mobile-menu-btn.active span:nth-child(3) {
                        transform: rotate(45deg) translate(-5px, -6px);
                    }
                }
                
                @media (min-width: 769px) {
                    .mobile-menu-btn {
                        display: none;
                    }
                }
            `;
            document.head.appendChild(mobileStyle);
            
            // Toggle menu on button click
            btn.addEventListener('click', function() {
                this.classList.toggle('active');
                nav.classList.toggle('active');
            });
            
            // Close menu when a link is clicked
            nav.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', function() {
                    btn.classList.remove('active');
                    nav.classList.remove('active');
                });
            });
        }
    };
    
    // Initialize mobile menu
    createMobileMenu();
    
    // Reconfigure on resize
    window.addEventListener('resize', createMobileMenu);
}); 