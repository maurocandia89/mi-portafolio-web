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
            "intro.paragraph": "¡Bienvenido a mi portafolio! Soy un desarrollador Full Stack con experiencia en tecnologías modernas. Mi pasión es crear soluciones web robustas y visualmente atractivas que resuelvan problemas reales. Estoy listo para enfrentar nuevos desafíos y colaborar en proyectos que superen las expectativas.",
            "intro.resumeButton": "Currículum",
            "intro.contactButton": "Contáctame",
            "intro.scrollDown": "Bajar",
            "about.sectionTitle": "Acerca de Mí",
            "about.experienceText": "Años de Experiencia",
            "about.projectsText": "Proyectos Completados",
            "about.strongestSidesTitle": "¿Cuáles son mis lados más fuertes y habilidades?",
            "about.paragraph1": "Mi principal fortaleza es mi enfoque en la resolución de problemas y el pensamiento crítico. Me destaco en la capacidad de tomar proyectos complejos y desglosarlos en tareas manejables, encontrando soluciones innovadoras para los desafíos que surgen. Soy una persona organizada y orientada a los detalles, lo que garantiza entregas a tiempo y con los más altos estándares de calidad.",
            "about.paragraph2": "Como desarrollador Full Stack, domino una amplia variedad de tecnologías. Tengo experiencia en .NET (ASP.NET Core, Blazor, .NET MAUI), C#, Angular (con Redux), Flutter, Dart, y bases de datos como PostgreSQL. Mi capacidad para adaptarme y aprender nuevas herramientas me permite construir soluciones eficientes para cualquier tipo de proyecto.",
            "about.paragraph3": "Además de mis habilidades técnicas, soy un comunicador eficaz. Colaboro de manera fluida con clientes y equipos para entender sus necesidades y convertirlas en especificaciones funcionales, asegurando que el producto final no solo cumpla, sino que supere sus expectativas. Mi experiencia como freelancer me ha dado un conocimiento práctico en el despliegue de proyectos en plataformas como Render, Vercel y Neon.",
            "bio.sectionTitle": "Mi Biografía",
            "bio.title": "Biografía,<br />unas pocas palabras",
            "bio.paragraph1": "Hola, soy Mauro Candia, un desarrollador Full Stack de Mendoza, Argentina. Actualmente trabajo para Global Assist Group SA y también como desarrollador freelance. Mi compromiso es aplicar mis habilidades y experiencia para construir soluciones innovadoras y efectivas.",
            "bio.paragraph2": "Como programador, disfruto explorando nuevas tecnologías y desarrollando proyectos que aborden problemas del mundo real. Mi objetivo es crear aplicaciones web funcionales y estéticamente agradables que ofrezcan una excelente experiencia de usuario.",
            "bio.paragraph3": "En mi tiempo libre, me gusta hacer ejercicio, dibujar, leer y viajar. Siempre busco mejorar mis habilidades y conocimientos. Soy una persona confiable, orientada al trabajo en equipo y lista para colaborar para asegurar que los proyectos se entreguen con los más altos estándares.",
            "skills.sectionTitle": "Habilidades",
            "skills.programmingTitle": "Habilidades de Programación",
            "skills.toolsTitle": "Herramientas y Otras Habilidades",
            "skills.communicationTitle": "Habilidades de Comunicación",
            "projects.sectionTitle": "Proyectos",
            "milestones.sectionTitle": "Logros Especiales",
            "milestones.educationTitle3": "Técnico Industrial (2011-2016)",
            "milestones.educationSchool3": "Universidad de Mendoza",
            "milestones.educationDescription3": "Estudié y completé el cursado de la carrera de Ingeniería Industrial, en el cual obtuve el título de Técnico Industrial.",
            "milestones.educationTitle1": "Técnico Universitario en Desarrollo de Software (2019-2021)",
            "milestones.educationSchool1": "Universidad Tecnológica Nacional Facultad Regional Mendoza",
            "milestones.educationDescription1": "Completé mi formación en la UTN, donde me enfoqué en dominar tecnologías de front-end y back-end, combinando la teoría con la práctica de los principios clave del desarrollo de software.",
            "milestones.educationTitle2": "Curso de Inglés B1 plus",
            "milestones.educationSchool2": "Universidad Nacional de Cuyo, Idiomas UNCuyo(2024)",
            "milestones.educationDescription2": "Aprobé el examen de Nivel B1 plus de Inglés, administrado por la Facultad de Filosofía y Letras de la Universidad de Cuyo.",
            "contact.sectionTitle": "Contacto",
            "contact.title": "Llama o escribe <span class='green'>en cualquier momento</span>",
            "contact.fullNameLabel": "Nombre Completo",
            "contact.emailLabel": "Dirección de Correo Electrónico",
            "contact.messageLabel": "Mensaje",
            "contact.sendButton": "Enviar Mensaje",
            "footer.quickLinksHeading": "Enlaces Rápidos",
            "footer.supportHeading": "Soporte",
            "footer.terms": "Términos y Condiciones",
            "footer.privacy": "Privacidad",
            "footer.cookies": "Preferencias de Cookies",
            "footer.getInTouchHeading": "Ponte en contacto",
            "footer.copyrightText": "Derechos de autor &copy; 2021-2025 | Todos los derechos reservados. Hecho con <span id='heart-icon'>&#10084;</span> por <a href='https://MauroCandia.github.io' title='Sitio Oficial' target='_blank'>Mauro Candia</a>",
            "projects.descriptions.metroin": "Plataforma web para la gestión operativa y documental de empresas. Desarrollada en ASP.NET Core, TypeScript y Kendo UI/Telerik.",
            "projects.descriptions.apptrabajador": "Aplicación móvil para trabajadores que permite listar habilitaciones, generar códigos QR para acceso, y gestionar perfiles de usuario.",
            "projects.descriptions.appgarita": "Aplicación móvil para guardias de seguridad. Permite controlar el acceso, visualizar los últimos movimientos y recibir notificaciones en tiempo real.",
            "projects.descriptions.wabi": "Aplicación para la venta de entradas, promociones y combos para eventos.",
            "projects.descriptions.psg": "Plataforma web para la gestión operativa y documental, desarrollada en Angular y TypeScript.",
            "projects.descriptions.massage": "Sitio web responsivo para la gestión de tratamientos y turnos, con roles de Administrador y Cliente.",
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
            "intro.paragraph": "Welcome to my portfolio! I'm an experienced Full Stack Developer with a passion for creating robust, visually appealing, and intuitive web solutions. With a unique blend of technical expertise and creative problem-solving, I'm confident in my ability to deliver custom solutions that exceed project requirements.",
            "intro.resumeButton": "Resume",
            "intro.contactButton": "Contact Me",
            "intro.scrollDown": "Scroll Down",
            "about.sectionTitle": "About Me",
            "about.experienceText": "Years of Experience",
            "about.projectsText": "Projects Completed",
            "about.strongestSidesTitle": "What are my strongest sides and skills?",
            "about.paragraph1": "My greatest strengths are my critical thinking and problem-solving skills. I excel at breaking down complex challenges into manageable parts and finding innovative solutions. I am highly organized and detail-oriented, ensuring that I complete assignments on time and to the highest standards.",
            "about.paragraph2": "As a Full Stack Developer, I'm proficient in a wide range of technologies. My expertise includes .NET (ASP.NET Core, Blazor, .NET MAUI), C#, Angular (with Redux), Flutter, Dart, and databases like PostgreSQL. My ability to quickly adapt to new tools and frameworks allows me to build efficient solutions for any project.",
            "about.paragraph3": "In addition to my technical skills, I am a strong communicator. I effectively collaborate with clients and team members to understand their needs and translate them into functional specifications. My freelance experience has given me hands-on knowledge in deploying projects using platforms like Render, Vercel, and Neon.",
            "bio.sectionTitle": "My Bio",
            "bio.title": "Biography,<br />a few words",
            "bio.paragraph1": "Hi, I'm Mauro Candia, a Full Stack Developer from Mendoza, Argentina. I work as a software developer for Global Assist Group SA and as a freelance developer. I'm committed to using my skills to create innovative and effective solutions for my clients.",
            "bio.paragraph2": "As a passionate programmer, I enjoy exploring new technologies and building projects that solve real-world problems. My goal is to create functional and aesthetically pleasing web applications that provide great user experiences.",
            "bio.paragraph3": "In my free time, I enjoy physical activity, drawing, reading, watching TV shows, and traveling. I'm a continuous learner, always seeking ways to improve my skills and knowledge. I am also a reliable and team-oriented person, always ready to collaborate to ensure projects are delivered to the highest standards.",
            "skills.sectionTitle": "Skills",
            "skills.programmingTitle": "Programming Skills",
            "skills.toolsTitle": "Tools & Other Skills",
            "skills.communicationTitle": "Communication Skills",
            "projects.sectionTitle": "Projects",
            "milestones.sectionTitle": "Special Milestones",
            "milestones.educationTitle3": "Industrial Technician (2011-2016)",
            "milestones.educationSchool3": "University of Mendoza",
            "milestones.educationDescription3": "I studied and completed the coursework for the Industrial Engineering degree, in which I obtained the title of Industrial Technician.",
            "milestones.educationTitle1": "University Technician in Software Development (2019-2021)",
            "milestones.educationSchool1": "National Technological University Regional Faculty of Mendoza",
            "milestones.educationDescription1": "I completed my degree at UTN, focusing on mastering front-end and back-end technologies. My training combined theoretical knowledge with a strong emphasis on core software development principles.",
            "milestones.educationTitle2": "B1 Plus English Course",
            "milestones.educationSchool2": "National University of Cuyo, Languages UNCuyo (2024)",
            "milestones.educationDescription2": "I passed the B1 Plus English level exam, administered by the Faculty of Philosophy and Letters of the University of Cuyo.",
            "contact.sectionTitle": "Contact",
            "contact.title": "Call or write <span class='green'>anytime</span>",
            "contact.fullNameLabel": "Full Name",
            "contact.emailLabel": "E-Mail Address",
            "contact.messageLabel": "Message",
            "contact.sendButton": "Send Message",
            "footer.quickLinksHeading": "Quick Links",
            "footer.supportHeading": "Support",
            "footer.terms": "Terms & Conditions",
            "footer.privacy": "Privacy",
            "footer.cookies": "Cookie preferences",
            "footer.getInTouchHeading": "Get in touch",
            "footer.copyrightText": "Copyright &copy; 2021-2025 | All rights reserved. Made with <span id='heart-icon'>&#10084;</span> by <a href='https://MauroCandia.github.io' title='Official Website' target='_blank'>Mauro Candia</a>",
            "projects.descriptions.metroin": "A web platform for operational and document management, developed in ASP.NET Core, TypeScript, and Kendo UI/Telerik.",
            "projects.descriptions.apptrabajador": "A mobile app for workers to list authorizations, generate QR codes for access, and manage user profiles.",
            "projects.descriptions.appgarita": "A mobile app for security guards to control access, view recent movements, and receive real-time notifications.",
            "projects.descriptions.wabi": "An application for purchasing tickets, promotions, and combos for various events.",
            "projects.descriptions.psg": "A web platform for operational and document management, developed in Angular and TypeScript.",
            "projects.descriptions.massage": "A responsive website for managing treatments and appointments, with Admin and Client roles.",
        },
    };

    window.translations = translations;
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
        
        const event = new Event('languageChanged');
        document.dispatchEvent(event);
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
    document.dispatchEvent(new Event('translationsLoaded'));
});