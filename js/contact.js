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
