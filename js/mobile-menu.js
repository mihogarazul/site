// Mobile Navigation Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenuSheet = document.getElementById('mobile-menu-sheet');
const closeSheetBtn = document.querySelector('.close-sheet-btn');
const sheetOverlay = document.querySelector('.sheet-overlay');
const sheetLinks = document.querySelectorAll('.sheet-link');
const tabItems = document.querySelectorAll('.tab-item');

function toggleBottomSheet() {
    if (mobileMenuSheet) mobileMenuSheet.classList.toggle('active');
}

function closeBottomSheet() {
    if (mobileMenuSheet) mobileMenuSheet.classList.remove('active');
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
        // const sectionHeight = section.clientHeight; // Unused
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
