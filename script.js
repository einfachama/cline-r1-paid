// GSAP animations
document.addEventListener('DOMContentLoaded', () => {
    // Animate the hero section
    gsap.from('.hero-content', {
        duration: 1.5,
        opacity: 0,
        y: -50,
        ease: 'power2.out'
    });

    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            gsap.to(window, {
                duration: 1,
                scrollTo: { y: targetSection, offsetY: 70 },
                ease: 'power2.inOut'
            });
        });
    });
});
