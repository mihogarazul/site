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

if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
}

if (lightboxNext) {
    lightboxNext.addEventListener('click', (e) => {
        e.stopPropagation();
        showNextImage();
    });
}

if (lightboxPrev) {
    lightboxPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        showPrevImage();
    });
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (lightbox && !lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNextImage();
    if (e.key === 'ArrowLeft') showPrevImage();
});

// Touch Navigation (Swipe)
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

if (lightbox) {
    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    });

    lightbox.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    });
}

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
        if (diffY < -50) { // Swipe Down -> Close
            closeLightbox();
        }
    }
}

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
