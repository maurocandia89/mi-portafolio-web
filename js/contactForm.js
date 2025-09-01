document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const messageTextarea = document.getElementById('message');
    const submitButton = document.querySelector('.btn-send-message');
    const buttonTextSpan = document.getElementById('button-text');
    const formMessage = document.getElementById('form-message');

    // Define la URL de tu API aquí
    const API_URL = "https://massages-api.onrender.com/api/Portfolio/send-contact-form";

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        submitButton.disabled = true;
        const originalButtonText = buttonTextSpan.textContent;
        buttonTextSpan.textContent = 'Enviando...';
        formMessage.textContent = '';
        formMessage.className = 'text-center mt-3';

        const data = {
            name: fullNameInput.value,
            email: emailInput.value,
            message: messageTextarea.value,
        };

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                formMessage.textContent = result.message;
                formMessage.classList.add('text-success');
                form.reset();
            } else {
                formMessage.textContent = `Error: ${result.message || 'No se pudo enviar el mensaje.'}`;
                formMessage.classList.add('text-danger');
            }
        } catch (error) {
            console.error('Network or server error:', error);
            formMessage.textContent = 'Ocurrió un error al conectar con el servidor. Por favor, inténtalo de nuevo.';
            formMessage.classList.add('text-danger');
        } finally {
            submitButton.disabled = false;
            buttonTextSpan.textContent = originalButtonText;
        }
    });

    // Asegura que el texto del botón se traduzca al cambiar el idioma
    document.addEventListener('languageChanged', () => {
        const currentLang = localStorage.getItem('lang') || 'en';
        if (window.translations && window.translations[currentLang]) {
            buttonTextSpan.textContent = window.translations[currentLang]['contact.sendButton'];
        }
    });
});