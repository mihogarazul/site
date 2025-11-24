// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});

// Scroll to Top Button Logic
const scrollToTopBtn = document.getElementById('scrollToTop');
const banner = document.getElementById('banner');

// Show/Hide button based on scroll position relative to banner
window.addEventListener('scroll', () => {
    if (!banner || !scrollToTopBtn) return;

    // Get the bottom position of the banner
    const bannerBottom = banner.offsetTop + banner.offsetHeight;

    if (window.scrollY > bannerBottom) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

// Scroll to top when clicked
if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
