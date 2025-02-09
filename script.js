/*
 * Improved script.js
 * Handles GSAP animations and smooth scrolling for navigation links.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Animate the hero section if GSAP is available
    if (typeof gsap !== 'undefined') {
      gsap.from('.hero-content', {
        duration: 1.5,
        opacity: 0,
        y: -50,
        ease: 'power2.out'
      });
    } else {
      console.warn("GSAP library is not loaded.");
    }
  
    // Smooth scrolling for navigation links using GSAP ScrollToPlugin if available
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          if (typeof gsap !== 'undefined' && gsap.to) {
            gsap.to(window, {
              duration: 1,
              scrollTo: { y: targetSection, offsetY: 70 },
              ease: 'power2.inOut'
            });
          } else {
            // Fallback smooth scroll
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        } else {
          console.warn(`Target section not found for selector: ${targetId}`);
        }
      });
    });
  });
  