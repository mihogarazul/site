// Banner Canvas Animation (Cute Lofi Blobs)
const canvas = document.getElementById('banner-canvas');

if (canvas) {
    const ctx = canvas.getContext('2d');

    let width, height;
    let blobs = [];

    function resize() {
        if (!canvas.parentElement) return;
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
}
