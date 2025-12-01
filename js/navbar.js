const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
    if (hamburger) hamburger.classList.remove('active');
    if (navLinks) navLinks.classList.remove('active');
}));

// Navbar Shrink on Scroll
// Navbar Shrink on Scroll
const navbar = document.querySelector('.lofi-nav');
let lastScrollY = window.scrollY;
let ticking = false;
let navbarHeight = navbar ? navbar.offsetHeight : 0;
let isDesktop = window.innerWidth >= 1151; // Matching CSS media query

// Update cached values on resize
window.addEventListener('resize', () => {
    if (navbar) navbarHeight = navbar.offsetHeight;
    isDesktop = window.innerWidth >= 1151;
    updateNavbar(); // Force update on resize
});

function updateNavbar() {
    if (!navbar) return;

    // Threshold: 1.5x navbar height
    const threshold = Math.round(navbarHeight * 1.5);

    if (!isDesktop) {
        navbar.classList.remove('scrolled');
    } else {
        if (lastScrollY > threshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    ticking = false;
}

window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
    }
});

// Active Section Highlighting
const sections = document.querySelectorAll('section, header[id]');
const navLinks_a = document.querySelectorAll('.nav-links a');

const observerOptions = {
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks_a.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});
