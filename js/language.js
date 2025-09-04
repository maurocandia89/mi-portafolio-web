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
            "about.paragraph1": "Mi viaje como desarrollador comenzó con mi formación en la Universidad Tecnológica Nacional (UTN) de Mendoza, donde obtuve el título de Técnico Universitario en Desarrollo de Software. Allí, adquirí una base sólida en principios de programación y me especialicé en tecnologías tanto de front-end como de back-end.",
            "about.paragraph2": "Al poco tiempo de graduarme, me uní a Global Assist Group SA, donde trabajé como desarrollador y profundicé mi conocimiento en el ecosistema .NET, incluyendo ASP.NET Core, Blazor, NET MAUI y C#. Además, gané experiencia práctica con Node.js, Angular, PostgreSQL y Docker, lo que me permitió participar en el ciclo completo de desarrollo de aplicaciones, desde la concepción hasta el despliegue.",
            "about.paragraph3": "En paralelo a mi trabajo en la empresa, desarrollé una carrera como freelancer. Esto me ha enseñado a gestionar proyectos de forma autónoma y a dominar herramientas de despliegue como Vercel, Render y Neon. Esta experiencia dual me ha brindado una perspectiva completa y la agilidad para adaptarme a diversas necesidades del mercado.",
            "bio.sectionTitle": "Mi Biografía",
            "bio.title": "Biografía,<br />unas pocas palabras",
            "bio.paragraph1": "Soy Mauro Candia, un desarrollador Full Stack de Mendoza, Argentina. Si bien mi carrera es mi pasión, mi vida se enriquece con mis intereses personales. En mi tiempo libre, me encanta sumergirme en el arte, ya sea a través del dibujo o la pintura, y mantenerme activo con la natación y el gimnasio.",
            "bio.paragraph2": "También soy un apasionado de la cultura. Me considero un cinéfilo dedicado, siempre en busca de nuevas historias en la pantalla grande. Me encanta viajar y conocer nuevas culturas, lo que me permite ver el mundo desde diferentes perspectivas. Además, disfruto de la lectura, devorando libros de psicología, desarrollo personal y novelas policiales que desafían la mente. Esta curiosidad por aprender va más allá de mis habilidades técnicas.",
            "bio.paragraph3": "Me comprometo a un crecimiento constante, no solo profesional sino también personal. Actualmente, me esfuerzo por perfeccionar mi inglés y tengo el objetivo de aprender otros idiomas en el futuro. Me considero una persona confiable y orientada al trabajo en equipo, siempre listo para colaborar y dar lo mejor de mí en cualquier proyecto, técnico o personal.",
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
            "about.paragraph1": "My journey as a developer began with my studies at the National Technological University (UTN) in Mendoza, where I earned a degree as a University Technician in Software Development. This education gave me a solid foundation in programming principles and a specialization in both front-end and back-end technologies.",
            "about.paragraph2": "Shortly after graduating, I joined Global Assist Group SA as a developer, where I deepened my knowledge of the .NET ecosystem, including ASP.NET Core, Blazor, .NET MAUI and C#. I also gained hands-on experience with Node.js, Angular, PostgreSQL, and Docker, allowing me to manage the full application development cycle, from concept to deployment.",
            "about.paragraph3": "In parallel with my full-time job, I've built a career as a freelance developer. This work has taught me how to independently manage projects and master deployment tools like Vercel, Render, and Neon. This dual experience provides me with a comprehensive perspective and the agility to adapt to diverse market needs.",
            "bio.sectionTitle": "My Bio",
            "bio.title": "Biography,<br />a few words",
            "bio.paragraph1": "I am Mauro Candia, a Full Stack Developer from Mendoza, Argentina. While my career is a driving passion, my life is enriched by my personal interests. In my free time, I love diving into art through drawing and painting, and staying active with swimming and gym workouts.",
            "bio.paragraph2": "I'm also a culture enthusiast. I consider myself a dedicated cinephile, always searching for new stories on the big screen. I love to travel and explore new cultures, which allows me to see the world from different perspectives. In addition, I enjoy reading, devouring books on psychology, personal development, and crime novels that challenge my mind. This love for learning extends far beyond my technical skills.",
            "bio.paragraph3": "I am committed to constant growth, both professionally and personally. Currently, I'm focused on perfecting my English and have a goal of learning other languages in the future. I see myself as a reliable, team-oriented individual, always ready to collaborate and give my best to any project, whether it's technical or personal.",
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