const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
}));

const activitiesData = {
    sensorial: `
        <div class="detail-hero">
            <div class="hero-bg"></div>
            <div class="hero-content">
                <div class="hero-icon-wrapper">
                    <span class="hero-icon">✨</span>
                </div>
                <h2>Estimulación Sensorial</h2>
                <p class="hero-subtitle">Despertando los sentidos</p>
            </div>
        </div>
        <div class="detail-content-wrapper">
            <div class="detail-card glass-effect">
                <p class="detail-description">Nuestras sesiones de estimulación sensorial están diseñadas para despertar la curiosidad natural de tu bebé. Utilizamos una variedad de materiales seguros y atractivos para crear experiencias únicas que fomentan las conexiones neuronales.</p>
                
                <div class="detail-section">
                    <h3>¿Qué incluye la experiencia?</h3>
                    <ul class="benefit-grid">
                        <li class="benefit-item">
                            <span class="benefit-icon">🧸</span>
                            <div class="benefit-text">
                                <strong>Exploración Táctil</strong>
                                <p>Texturas suaves, rugosas y lisas.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">💡</span>
                            <div class="benefit-text">
                                <strong>Estimulación Visual</strong>
                                <p>Juegos de luces tenues y sombras.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">🎵</span>
                            <div class="benefit-text">
                                <strong>Armonía Auditiva</strong>
                                <p>Sonidos de la naturaleza y música.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">🌸</span>
                            <div class="benefit-text">
                                <strong>Aromaterapia</strong>
                                <p>Esencias suaves y seguras.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="action-area">
                    <button class="back-btn" onclick="showList()">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M19 12H5M12 19l-7-7 7-7"/>
                        </svg>
                        Regresar a Servicios
                    </button>
                </div>
            </div>
        </div>
    `,
    motricidad: `
        <div class="detail-hero hero-motricidad">
            <div class="hero-bg"></div>
            <div class="hero-content">
                <div class="hero-icon-wrapper">
                    <span class="hero-icon">🏃‍♂️</span>
                </div>
                <h2>Motricidad</h2>
                <p class="hero-subtitle">Movimiento y Libertad</p>
            </div>
        </div>
        <div class="detail-content-wrapper">
            <div class="detail-card glass-effect">
                <p class="detail-description">Fomentamos el movimiento libre y el desarrollo físico a través del juego. Cada ejercicio está adaptado a la etapa de desarrollo de tu pequeño para fortalecer sus músculos y mejorar su coordinación.</p>
                
                <div class="detail-section">
                    <h3>Actividades Principales</h3>
                    <ul class="benefit-grid">
                        <li class="benefit-item">
                            <span class="benefit-icon">🧗</span>
                            <div class="benefit-text">
                                <strong>Circuitos</strong>
                                <p>Gateo y obstáculos suaves.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">👐</span>
                            <div class="benefit-text">
                                <strong>Coordinación</strong>
                                <p>Ejercicios de agarre ojo-mano.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">💃</span>
                            <div class="benefit-text">
                                <strong>Ritmo</strong>
                                <p>Bailes y movimientos divertidos.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">🐢</span>
                            <div class="benefit-text">
                                <strong>Tummy Time</strong>
                                <p>Fortalecimiento de cuello y espalda.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="action-area">
                    <button class="back-btn" onclick="showList()">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M19 12H5M12 19l-7-7 7-7"/>
                        </svg>
                        Regresar a Servicios
                    </button>
                </div>
            </div>
        </div>
    `,
    social: `
        <div class="detail-hero hero-social">
            <div class="hero-bg"></div>
            <div class="hero-content">
                <div class="hero-icon-wrapper">
                    <span class="hero-icon">🤝</span>
                </div>
                <h2>Juego Social</h2>
                <p class="hero-subtitle">Amistad y Convivencia</p>
            </div>
        </div>
        <div class="detail-content-wrapper">
            <div class="detail-card glass-effect">
                <p class="detail-description">El primer contacto con otros niños es fundamental. Creamos un espacio seguro donde los pequeños pueden interactuar, aprender unos de otros y hacer sus primeros amigos en un ambiente controlado.</p>
                
                <div class="detail-section">
                    <h3>Beneficios del Grupo</h3>
                    <ul class="benefit-grid">
                        <li class="benefit-item">
                            <span class="benefit-icon">❤️</span>
                            <div class="benefit-text">
                                <strong>Empatía</strong>
                                <p>Desarrollo emocional temprano.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">👀</span>
                            <div class="benefit-text">
                                <strong>Imitación</strong>
                                <p>Aprendizaje observando a otros.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">🧩</span>
                            <div class="benefit-text">
                                <strong>Cooperación</strong>
                                <p>Juegos simples en equipo.</p>
                            </div>
                        </li>
                        <li class="benefit-item">
                            <span class="benefit-icon">👨‍👩‍👧‍👦</span>
                            <div class="benefit-text">
                                <strong>Comunidad</strong>
                                <p>Vínculo entre familias.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="action-area">
                    <button class="back-btn" onclick="showList()">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M19 12H5M12 19l-7-7 7-7"/>
                        </svg>
                        Regresar a Servicios
                    </button>
                </div>
            </div>
        </div>
    `
};

const activitiesList = document.getElementById('activities-list');
const activityDetail = document.getElementById('activity-detail');

document.querySelectorAll('.activity-card').forEach(card => {
    card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        if (activitiesData[id]) {
            activityDetail.innerHTML = activitiesData[id];
            activitiesList.classList.add('hidden');
            activityDetail.classList.remove('hidden');
            activityDetail.classList.add('activity-detail');
        }
    });
});

function showList() {
    activityDetail.classList.add('hidden');
    activitiesList.classList.remove('hidden');
    document.getElementById('activities').scrollIntoView({ behavior: 'smooth' });
}

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        const isActive = item.classList.contains('active');

        // Close all other items
        document.querySelectorAll('.faq-item').forEach(i => {
            i.classList.remove('active');
            i.querySelector('.faq-answer').style.maxHeight = null;
        });

        // Toggle current item
        if (!isActive) {
            item.classList.add('active');
            const answer = item.querySelector('.faq-answer');
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
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

// Gallery Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');

let currentIndex = 0;
let lastFocusedElement = null;
let currentGalleryItems = []; // Store current visible gallery items

// Helper to get current visible gallery images
function getCurrentGalleryItems() {
    const activeContent = document.querySelector('.gallery-content.active');
    if (activeContent) {
        return Array.from(activeContent.querySelectorAll('.gallery-item img'));
    }
    return [];
}

function openLightbox(index) {
    currentGalleryItems = getCurrentGalleryItems(); // Refresh the list
    currentIndex = index;

    // Save focused element to restore focus on close
    lastFocusedElement = document.activeElement;

    // Ensure the lightbox is a direct child of <body> to avoid stacking-context issues
    if (lightbox.parentElement !== document.body) {
        document.body.appendChild(lightbox);
    }

    // Force very high z-index in case other elements create new stacking contexts
    lightbox.style.zIndex = '2147483647';
    lightbox.setAttribute('aria-hidden', 'false');

    // Calculate scrollbar width to prevent layout shift
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    // Prevent scrolling and compensate for scrollbar width
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    // Prepare the image with initial state (hidden and scaled down)
    lightboxImg.style.opacity = '0';
    lightboxImg.style.transform = 'scale(0.8)';

    // Show the lightbox background first
    lightbox.classList.remove('hidden');
    // Force reflow to enable transition
    void lightbox.offsetWidth;
    lightbox.classList.add('active');

    // Preload the image before showing it
    const imgToLoad = new Image();
    imgToLoad.onload = () => {
        // Set the source
        lightboxImg.src = currentGalleryItems[currentIndex].src;

        // Animate the image in with a slight delay
        setTimeout(() => {
            lightboxImg.style.opacity = '1';
            lightboxImg.style.transform = 'scale(1)';
        }, 50);
    };

    imgToLoad.onerror = () => {
        // Even if error, show something
        lightboxImg.src = currentGalleryItems[currentIndex].src;
        lightboxImg.style.opacity = '1';
        lightboxImg.style.transform = 'scale(1)';
    };

    imgToLoad.src = currentGalleryItems[currentIndex].src;

    // Move focus to the close button for accessibility
    if (lightboxClose) {
        lightboxClose.focus();
    }
}

function closeLightbox() {
    // Restore focus FIRST to avoid "aria-hidden" error on active element
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
    }

    // Animate image out (reverse of opening animation)
    lightboxImg.style.opacity = '0';
    lightboxImg.style.transform = 'scale(0.8)';

    // Fade out lightbox background
    lightbox.classList.remove('active');

    setTimeout(() => {
        lightbox.classList.add('hidden');
        lightboxImg.src = '';

        // Restore scrolling and remove padding compensation
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    }, 300); // Match transition duration

    lightbox.setAttribute('aria-hidden', 'true');
}

function showNextImage() {
    // Fade out current image
    lightboxImg.style.opacity = '0';
    lightboxImg.style.transform = 'scale(0.9)';

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % currentGalleryItems.length;
        lightboxImg.src = currentGalleryItems[currentIndex].src;

        // Fade in new image
        setTimeout(() => {
            lightboxImg.style.opacity = '1';
            lightboxImg.style.transform = 'scale(1)';
        }, 50);
    }, 200);
}

function showPrevImage() {
    // Fade out current image
    lightboxImg.style.opacity = '0';
    lightboxImg.style.transform = 'scale(0.9)';

    setTimeout(() => {
        currentIndex = (currentIndex - 1 + currentGalleryItems.length) % currentGalleryItems.length;
        lightboxImg.src = currentGalleryItems[currentIndex].src;

        // Fade in new image
        setTimeout(() => {
            lightboxImg.style.opacity = '1';
            lightboxImg.style.transform = 'scale(1)';
        }, 50);
    }, 200);
}

// Event Delegation - Use event listener on gallery section instead of individual items
const gallerySection = document.getElementById('gallery');
if (gallerySection) {
    gallerySection.addEventListener('click', (e) => {
        // Check if clicked element is a gallery image
        const clickedImg = e.target.closest('.gallery-item img');
        if (clickedImg) {
            currentGalleryItems = getCurrentGalleryItems();
            const index = currentGalleryItems.indexOf(clickedImg);
            if (index !== -1) {
                openLightbox(index);
            }
        }
    });
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

lightboxNext.addEventListener('click', (e) => {
    e.stopPropagation();
    showNextImage();
});

lightboxPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    showPrevImage();
});

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNextImage();
    if (e.key === 'ArrowLeft') showPrevImage();
});

// Prevent form from reloading the page and provide simple feedback
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = contactForm.querySelector('.submit-btn');
        if (!submitBtn) return;
        const oldText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
        // Simulate async send
        setTimeout(() => {
            submitBtn.textContent = 'Enviado';
            setTimeout(() => {
                submitBtn.textContent = oldText;
                submitBtn.disabled = false;
            }, 1200);
        }, 800);
        console.log('Formulario simulado: ', {
            name: contactForm.name?.value,
            email: contactForm.email?.value,
            message: contactForm.message?.value
        });
    });
}

// Touch Navigation (Swipe)
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
});

lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;

    // Horizontal Swipe (Navigation)
    if (Math.abs(diffX) > Math.abs(diffY)) {
        if (Math.abs(diffX) > 50) { // Threshold
            if (diffX > 0) showNextImage(); // Swipe Left -> Next
            else showPrevImage(); // Swipe Right -> Prev
        }
    }
    // Vertical Swipe (Close)
    else {
        if (diffY < -50) { // Swipe Down -> Close (negative because swipe down means endY > startY, so startY - endY is negative... wait. Swipe down: finger moves down. Y increases. StartY < EndY. DiffY = StartY - EndY < 0. Correct.)
            closeLightbox();
        }
    }
}

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

// Banner Canvas Animation (Cute Lofi Blobs)
const canvas = document.getElementById('banner-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let blobs = [];

function resize() {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
}

class Blob {
    constructor() {
        this.init();
    }

    init() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 100 + 50; // 50-150px
        this.speedX = (Math.random() - 0.5) * 0.5; // Slow movement
        this.speedY = (Math.random() - 0.5) * 0.5;
        // Pastel Colors: Soft Sage, Misty Rose, Pale Blue, Lavender
        const colors = ['#E8F5E9', '#FCE4EC', '#E3F2FD', '#F3E5F5'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x < -this.size || this.x > width + this.size) this.speedX *= -1;
        if (this.y < -this.size || this.y > height + this.size) this.speedY *= -1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

function initBlobs() {
    blobs = [];
    // Use fewer blobs for better performance on lower-end devices
    for (let i = 0; i < 8; i++) {
        blobs.push(new Blob());
    }
}

function animate() {
    ctx.clearRect(0, 0, width, height);
    blobs.forEach(blob => {
        blob.update();
        blob.draw();
    });
    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    resize();
    initBlobs();
});

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

// Start animation lazily when banner enters the viewport to save CPU on load
function startBannerAnimation() {
    // Avoid starting multiple times
    if (window.__bannerAnimationStarted) return;
    window.__bannerAnimationStarted = true;
    resize();
    initBlobs();
    animate();
}

const bannerEl = document.getElementById('banner');
if (bannerEl && 'IntersectionObserver' in window) {
    const bannerObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startBannerAnimation();
                obs.unobserve(entry.target);
            }
        });
    }, { root: null, threshold: 0 });
    bannerObserver.observe(bannerEl);
} else {
    // Fallback: start immediately
    startBannerAnimation();
}

// Audio Visualizer & Player
const audioControl = document.querySelector('.audio-control');
const audioIcon = document.getElementById('audio-icon');
const audio = document.getElementById('bg-music');
const visualizerCanvas = document.getElementById('audio-visualizer');
const vCtx = visualizerCanvas.getContext('2d');

let audioContext, analyser, source;
let isPlaying = false;

// Initialize Audio Context on first interaction (browser policy)
function initAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        source = audioContext.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(audioContext.destination);
        analyser.fftSize = 64; // Low resolution for "lofi" look
    }
}

function togglePlay() {
    initAudio();

    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }

    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        // Play Icon SVG
        audioIcon.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M8 5v14l11-7z"/></svg>';
        audioIcon.classList.remove('playing');
    } else {
        audio.play().then(() => {
            isPlaying = true;
            // Pause Icon SVG
            audioIcon.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
            audioIcon.classList.add('playing');
            renderVisualizer();
        }).catch(e => console.log("Playback failed:", e));
    }
}

audioControl.addEventListener('click', togglePlay);

// Attempt autoplay on load (will likely fail without interaction, but worth a try)
// Autoplay disabled by user request
// window.addEventListener('load', () => {
//     // Attempt autoplay
//     const playPromise = audio.play();

//     if (playPromise !== undefined) {
//         playPromise.then(_ => {
//             // Autoplay started!
//             isPlaying = true;
//             audioIcon.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
//             audioIcon.classList.add('playing');
//             initAudio();
//             renderVisualizer();
//         }).catch(error => {
//             // Auto-play was prevented
//             console.log("Autoplay prevented by browser policy. User interaction needed.");
//         });
//     }
// });

function renderVisualizer() {
    if (!isPlaying) {
        // Clear canvas when paused (no flat line)
        vCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
        return;
    }

    requestAnimationFrame(renderVisualizer);

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyser.getByteFrequencyData(dataArray);

    vCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);

    const barWidth = (visualizerCanvas.width / bufferLength) * 2.5;
    let barHeight;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
        // Extreme sensitivity: Non-linear scaling
        // Subtract a lower floor to catch quiet sounds, then power of 1.5 or 2 for drama
        let val = Math.max(0, dataArray[i] - 10);
        barHeight = Math.pow(val / 255, 1.5) * visualizerCanvas.height * 1.8;

        // Ensure some minimum height if there's any sound
        if (val > 0 && barHeight < 2) barHeight = 2;

        // Elegant pastel bars
        vCtx.fillStyle = `rgb(${barHeight * 4 + 100}, 180, 200)`;
        vCtx.fillRect(x, visualizerCanvas.height - barHeight, barWidth, barHeight); // Draw from bottom up for more impact

        x += barWidth + 1;
    }
}

// Initial setup (No draw)
visualizerCanvas.width = 60;
visualizerCanvas.height = 30;

// Scroll to Top Button Logic
const scrollToTopBtn = document.getElementById('scrollToTop');
const banner = document.getElementById('banner');

// Show/Hide button based on scroll position relative to banner
window.addEventListener('scroll', () => {
    if (!banner) return;

    // Get the bottom position of the banner
    const bannerBottom = banner.offsetTop + banner.offsetHeight;

    if (window.scrollY > bannerBottom) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

// Scroll to top when clicked
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Mobile Navigation Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenuSheet = document.getElementById('mobile-menu-sheet');
const closeSheetBtn = document.querySelector('.close-sheet-btn');
const sheetOverlay = document.querySelector('.sheet-overlay');
const sheetLinks = document.querySelectorAll('.sheet-link');
const tabItems = document.querySelectorAll('.tab-item');

function toggleBottomSheet() {
    mobileMenuSheet.classList.toggle('active');
}

function closeBottomSheet() {
    mobileMenuSheet.classList.remove('active');
}

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleBottomSheet();
    });
}

if (closeSheetBtn) {
    closeSheetBtn.addEventListener('click', closeBottomSheet);
}

if (sheetOverlay) {
    sheetOverlay.addEventListener('click', closeBottomSheet);
}

sheetLinks.forEach(link => {
    link.addEventListener('click', closeBottomSheet);
});

// Update Active Tab based on Scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section, header');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    tabItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });

    sheetLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Gallery Tabs Logic
const galleryTabs = document.querySelectorAll('.gallery-tab');
const galleryContents = document.querySelectorAll('.gallery-content');

// Function to load gallery tab content with loader
function loadGalleryTab(tabId) {
    const loader = document.getElementById('gallery-loader');
    const targetContent = document.getElementById(`gallery-${tabId}`);

    if (!targetContent) return;

    // Hide all other contents first
    galleryContents.forEach(content => {
        if (content !== targetContent) {
            content.classList.remove('active');
            content.classList.add('hidden');
            content.style.opacity = '0';
        }
    });

    // Show loader
    if (loader) loader.classList.remove('hidden');

    // Make target content visible in DOM (but transparent) so lazy images can load
    targetContent.classList.remove('hidden');
    targetContent.style.opacity = '0'; // Keep it invisible while loading

    // Force eager loading for images in this tab
    const images = targetContent.querySelectorAll('img');
    images.forEach(img => {
        if (img.loading === 'lazy') {
            img.loading = 'eager';
        }
    });

    // Simulate minimum loading time for UX (150ms) + Image Loading
    const minDelay = 150;
    const startTime = Date.now();

    // Create promises for image loading
    const imagePromises = Array.from(images).map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise(resolve => {
            img.onload = resolve;
            img.onerror = resolve; // Proceed even if error
        });
    });

    // Create a timeout promise as a fallback (1.5 seconds max)
    const timeoutPromise = new Promise(resolve => {
        setTimeout(resolve, 1500);
    });

    // Race between image loading and timeout
    Promise.race([
        Promise.all(imagePromises),
        timeoutPromise
    ]).then(() => {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minDelay - elapsedTime);

        setTimeout(() => {
            if (loader) loader.classList.add('hidden');
            targetContent.classList.add('active');
            // Fade in the content
            targetContent.style.opacity = '1';
        }, remainingTime);
    });
}

// Load initial tab on page load (use DOMContentLoaded for faster initial load)
document.addEventListener('DOMContentLoaded', () => {
    const activeTab = document.querySelector('.gallery-tab.active');
    if (activeTab) {
        const initialTabId = activeTab.getAttribute('data-tab');
        loadGalleryTab(initialTabId);

        // Preload images from inactive tabs in background after initial load
        setTimeout(() => {
            galleryContents.forEach(content => {
                const contentId = content.id.replace('gallery-', '');
                if (contentId !== initialTabId) {
                    // Preload images for this tab
                    const images = content.querySelectorAll('img');
                    images.forEach(img => {
                        if (img.loading === 'lazy') {
                            img.loading = 'eager';
                        }
                        // Force browser to start downloading
                        const tempImg = new Image();
                        tempImg.src = img.src;
                    });
                }
            });
        }, 2000); // Wait 2 seconds after initial load to not interfere
    }
});

// Tab click handlers
galleryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        galleryTabs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        tab.classList.add('active');

        // Load the selected tab
        const targetId = tab.getAttribute('data-tab');
        loadGalleryTab(targetId);
    });
});
