// Mobile menu toggle
        const menuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');

        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Scroll reveal animation
        window.addEventListener('scroll', reveal);

        function reveal() {
            const reveals = document.querySelectorAll('.feature-card, .city-card, .testimonial-card');
            
            for(let i = 0; i < reveals.length; i++) {
                const windowHeight = window.innerHeight;
                const revealTop = reveals[i].getBoundingClientRect().top;
                const revealPoint = 150;
                
                if(revealTop < windowHeight - revealPoint) {
                    reveals[i].classList.add('active');
                }
                else {
                    reveals[i].classList.remove('active');
                }
            }
        }

        // Initialize by checking scroll position on page load
        window.addEventListener('DOMContentLoaded', () => {
            reveal();
        });
