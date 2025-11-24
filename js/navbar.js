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
const navbar = document.querySelector('.lofi-nav');
window.addEventListener('scroll', () => {
    // Shrink navbar only after we've scrolled past a bit more than its own height (desktop behavior)
    const isDesktop = window.innerWidth >= 769;
    if (!navbar) return;

    // Increase threshold so user scrolls further before navbar shrinks
    const threshold = Math.round(navbar.offsetHeight * 1.5);

    if (!isDesktop) {
        // Ensure mobile never gets the 'scrolled' class (CSS handles mobile differently)
        navbar.classList.remove('scrolled');
    } else {
        if (window.scrollY > threshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
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
