document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        es: {
            "nav.home": "Inicio",
            "nav.about": "Acerca de mí",
            "nav.skills": "Habilidades",
            "nav.projects": "Proyectos",
            "nav.milestones": "Logros",
            "nav.contact": "Contacto",
            "nav.resumeButton": "Currículum",
            "intro.greeting": "Hola, soy",
            "intro.paragraph": "¡Bienvenido a mi portafolio! Mauro Candia es un desarrollador Full Stack con experiencia y pasión por crear experiencias web visualmente impresionantes e intuitivas. Con una combinación única de habilidades técnicas y talento creativo, tengo la confianza para ofrecer soluciones personalizadas para una variedad de requisitos de proyecto.",
            "intro.resumeButton": "Currículum",
            "intro.contactButton": "Contáctame",
            "intro.scrollDown": "Bajar",
            "about.sectionTitle": "Acerca de Mí",
            "about.experienceText": "Años de Experiencia",
            "about.projectsText": "Proyectos Completados",
            "about.strongestSidesTitle": "¿Cuáles son mis lados más fuertes y habilidades?",
            "about.paragraph1": "Una de mis cualidades más fuertes como desarrollador full stack es mi capacidad para pensar críticamente y resolver problemas. Me destaco en dividir proyectos complejos en partes manejables y en encontrar soluciones innovadoras para los problemas que surgen. También soy muy organizado y orientado a los detalles, lo que me permite completar asignaciones a tiempo y con los más altos estándares.",
            "about.paragraph2": "Como desarrollador full stack, soy competente en una variedad de lenguajes de programación y frameworks, incluyendo HTML, CSS, JavaScript y Python. Tengo experiencia trabajando con tecnologías populares como MongoDB, Express, React y Node.js, y soy hábil en el desarrollo de UI/UX, además de tener la capacidad de adaptarme rápidamente a nuevas tecnologías y frameworks. Tengo un amplio rango de conocimiento sobre tecnologías más allá de las mencionadas.",
            "about.paragraph3": "También soy un comunicador fuerte y capaz de colaborar eficazmente con clientes y miembros del equipo para entender sus necesidades y traducirlas en especificaciones funcionales. En general, estoy seguro de mi capacidad para entregar soluciones web de alta calidad que satisfacen las necesidades de mis clientes y superan sus expectativas.",
            "bio.sectionTitle": "Mi Biografía",
            "bio.title": "Biografía,<br />unas pocas palabras",
            "bio.paragraph1": "Hola, soy Mauro Candia, un desarrollador full-stack de Sri Lanka. Actualmente soy un estudiante universitario en NSBM Green University, donde estoy desarrollando una base sólida en ingeniería de software y una pasión por construir experiencias web estéticamente atractivas e intuitivas. Con un sólido historial de logros, me comprometo a usar mis habilidades y experiencia para crear soluciones innovadoras y efectivas para mis clientes.",
            "bio.paragraph2": "Soy un miembro activo de la comunidad FOSS y del club de Medios de NSBM y soy conocido por mi amplio rango de conocimientos e intereses. Estoy constantemente buscando nuevas oportunidades para mejorar mis habilidades y conocimientos.",
            "bio.paragraph3": "En mi tiempo libre, disfruto de pasatiempos como la fotografía, ver películas y viajar. También soy un ávido aprendiz y siempre estoy buscando formas de mejorar mis habilidades y conocimientos. Además de mis habilidades técnicas, soy una persona confiable y orientada al trabajo en equipo que siempre está lista para colaborar con los miembros del equipo y los clientes para asegurar que los proyectos se entreguen con los más altos estándares. Estoy emocionado de trabajar contigo y crear algo asombroso juntos.",
            "skills.sectionTitle": "Habilidades",
            "skills.programmingTitle": "Habilidades de Programación",
            "skills.toolsTitle": "Herramientas y Otras Habilidades",
            "skills.communicationTitle": "Habilidades de Comunicación",
            "projects.sectionTitle": "Proyectos",
            "milestones.sectionTitle": "Logros Especiales",
            "milestones.jobTitle1": "Desarrollador Full Stack",
            "milestones.jobCompany1": "HashX",
            "milestones.jobDescription1": "HashX se dedica a ofrecer sólidas capacidades de ciberseguridad, salvaguardando activos digitales con tecnologías avanzadas. Además, HashX presenta con orgullo la plataforma CTF Nº 1 de Sri Lanka, proporcionando un espacio para organizar competiciones CTF interuniversitarias.",
            "milestones.educationTitle1": "Licenciatura (Hons) en Ingeniería de Software (Estudiante)",
            "milestones.educationSchool1": "NSBM Green University",
            "milestones.educationDescription1": "Cursando la Licenciatura (Hons) en Ingeniería de Software en NSBM Green University, Mauro Candia se enfoca en dominar las tecnologías de front-end y back-end, combinando el conocimiento teórico con un fuerte énfasis en los principios clave del desarrollo de software.",
            "milestones.educationTitle2": "Examen G.C.E. (A/L)",
            "milestones.educationSchool2": "Escuela: V/Agrabodhi M.V",
            "milestones.educationDescription2": "Aprobé el examen de Nivel Avanzado (A-Level) de Sri Lanka. Esta calificación, similar al Nivel Avanzado británico, es una puerta de entrada a las universidades estatales de Sri Lanka, y se ofrece en cingalés, tamil, e inglés. Es administrado por el Ministerio de Educación de Sri Lanka.",
            "milestones.educationTitle3": "Examen G.C.E. (O/L)",
            "milestones.educationSchool3": "Escuela: V/Agrabodhi M.V",
            "milestones.educationDescription3": "Aprobé el examen de Nivel Ordinario (O-Level) de Sri Lanka en V/Agrabodhi M.V, una calificación GCE similar al Nivel Ordinario de la Universidad de Cambridge y prueba de finalización de la educación secundaria. Administrado por el Ministerio de Educación de Sri Lanka.",
            "contact.sectionTitle": "Contacto",
            "contact.title": "Llama o escribe <span class='green'>en cualquier momento</span>",
            "contact.fullNameLabel": "Nombre Completo",
            "contact.emailLabel": "Dirección de Correo Electrónico",
            "contact.messageLabel": "Mensaje",
            "contact.sendButton": "Enviar Mensaje",
            "footer.quickLinksHeading": "Enlaces Rápidos",
            "footer.supportHeading": "Soporte",
            "footer.getInTouchHeading": "Ponte en contacto",
            "footer.copyrightText": "Copyright &copy; 2020-2024 | Todos los derechos reservados. Hecho con <span id='heart-icon'>&#10084;</span> por <a href='https://MauroCandia.github.io' title='Sitio Oficial' target='_blank'>Mauro Candia</a>",
        },
        en: {
            "nav.home": "Home",
            "nav.about": "About me",
            "nav.skills": "Skills",
            "nav.projects": "Projects",
            "nav.milestones": "Milestones",
            "nav.contact": "Contact",
            "nav.resumeButton": "Resume",
            "intro.greeting": "Hi, I am",
            "intro.paragraph": "Welcome to my portfolio! Mauro Candia is an Experienced Full Stack Developer with a passion for creating visually stunning and intuitive web experiences. With a unique blend of technical skills and creative flair, there's confidence in the ability to deliver custom solutions to various project requirements.",
            "intro.resumeButton": "Resume",
            "intro.contactButton": "Contact Me",
            "intro.scrollDown": "Scroll Down",
            "about.sectionTitle": "About Me",
            "about.experienceText": "Job Experience",
            "about.projectsText": "Projects Completed",
            "about.strongestSidesTitle": "What are my strongest sides and skills?",
            "about.paragraph1": "One of my strongest qualities as a full stack developer is my ability to think critically and solve problems. I excel at breaking down complex projects into manageable chunks and coming up with innovative solutions to problems that arise. I am also very organized and detail-oriented, which allows me to complete assignments on time and to the highest standards.",
            "about.paragraph2": "As a full stack developer, I am proficient in a variety of programming languages and frameworks, including HTML, CSS, JavaScript, and Python. I have experience working with popular technologies such as MongoDB, Express, React, and Node.js, and am skilled in UI/UX development as well as I have the ability to quickly adapt to new technologies and frameworks. I have a wide range of knowledge about technologies beyond those mentioned.",
            "about.paragraph3": "I am also a strong communicator and able to effectively collaborate with clients and team members to understand their needs and translate them into functional specifications. Overall, I am confident in my ability to deliver high-quality web solutions that meet the needs of my clients and exceed their expectations.",
            "bio.sectionTitle": "My Bio",
            "bio.title": "Biography,<br />a few words",
            "bio.paragraph1": "Hi, I'm Mauro Candia, a full-stack developer from Sri Lanka. I am currently an undergraduate at NSBM Green University, where I am developing a solid foundation in software engineering and a passion for building aesthetically attractive and intuitive web experiences. With a strong track record of achievement, I am committed to using my skills and expertise to create innovative and effective solutions for my clients.",
            "bio.paragraph2": "I am an active member of the FOSS community and Media club of NSBM and am known for my broad range of knowledge and interests. I am constantly seeking out new opportunities to improve my skills and knowledge.",
            "bio.paragraph3": "In my free time, I enjoy hobbies such as photography, watching movies, and traveling. I am also an avid learner and am always looking for ways to improve my skills and knowledge. In addition to my technical skills, I am a reliable and team-oriented individual who is always ready to collaborate with team members and clients to ensure that projects are delivered to the highest standards. I am excited to work with you and create something amazing together.",
            "skills.sectionTitle": "Skills",
            "skills.programmingTitle": "Programming Skills",
            "skills.toolsTitle": "Tools & Other Skills",
            "skills.communicationTitle": "Communication Skills",
            "projects.sectionTitle": "Projects",
            "milestones.sectionTitle": "Special Milestones",
            "milestones.jobTitle1": "Full Stack Developer",
            "milestones.jobCompany1": "HashX",
            "milestones.jobDescription1": "HashX is dedicated to offering robust cybersecurity capabilities, safeguarding digital assets with advanced technologies. Moreover, HashX proudly presents Sri Lanka's No #1 CTF platform, providing a space to host competitive inter university CTF competitions.",
            "milestones.educationTitle1": "BSc (Hons) in Software Engineering (Undergraduate)",
            "milestones.educationSchool1": "NSBM Green University",
            "milestones.educationDescription1": "Pursuing BSc (Hons) in Software Engineering at NSBM Green University, Mauro Candia focuses on mastering front-end and back-end technologies blending theoretical knowledge with a strong emphasis on key software development principles.",
            "milestones.educationTitle2": "G.C.E. (A/L) Examination",
            "milestones.educationSchool2": "School : V/Agrabodhi M.V",
            "milestones.educationDescription2": "Passed the Sri Lankan Advanced Level (A-Level) Examination. This qualification, similar to the British Advanced Level and this is a gateway to Sri Lankan state universities, offered in Sinhala, Tamil, and English. Conducted by the Ministry of Education Sri Lanka.",
            "milestones.educationTitle3": "G.C.E. (O/L) Examination",
            "milestones.educationSchool3": "Escuela: V/Agrabodhi M.V",
            "milestones.educationDescription3": "Passed the Sri Lankan Ordinary Level (O-Level) Examination at V/Agrabodhi M.V, a GCE qualification similar to the Cambridge University Ordinary Level and proof of completion Secondary Education. Conducted by the Ministry of Education Sri Lanka.",
            "contact.sectionTitle": "Contact",
            "contact.title": "Call or write <span class='green'>anytime</span>",
            "contact.fullNameLabel": "Full Name",
            "contact.emailLabel": "E-Mail Address",
            "contact.messageLabel": "Message",
            "contact.sendButton": "Send Message",
            "footer.quickLinksHeading": "Quick Links",
            "footer.supportHeading": "Support",
            "footer.getInTouchHeading": "Get in touch",
            "footer.copyrightText": "Copyright &copy; 2020-2024 | All rights reserved. Made with <span id='heart-icon'>&#10084;</span> by <a href='https://MauroCandia.github.io' title='Official Website' target='_blank'>Mauro Candia</a>",
        },
    };

    const languageSelector = document.getElementById('language-selector');

    function setLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            } else {
                console.error(`Missing translation key: ${key} for language: ${lang}`);
            }
        });
        localStorage.setItem('lang', lang);
    }

    const savedLang = localStorage.getItem('lang') || 'en';
    setLanguage(savedLang);

    if (languageSelector) {
        languageSelector.addEventListener('click', (event) => {
            if (event.target.tagName === 'BUTTON') {
                const lang = event.target.getAttribute('data-lang');
                setLanguage(lang);
                document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
                event.target.classList.add('active');
            }
        });
    }
});