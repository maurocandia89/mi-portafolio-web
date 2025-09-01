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
            "about.paragraph2": "Como desarrollador full stack, soy competente en una variedad de lenguajes de programación y frameworks, incluyendo HTML, CSS, JavaScript, TypeScript y CSharp. Tengo experiencia trabajando con tecnologías populares como PostgreSQL, Asp.Net, Blazor, NET MAUI, Angular, React y Node.js, además de tener la capacidad de adaptarme rápidamente a nuevas tecnologías y frameworks. Tengo un amplio rango de conocimiento sobre tecnologías más allá de las mencionadas.",
            "about.paragraph3": "También soy un comunicador fuerte y capaz de colaborar eficazmente con clientes y miembros del equipo para entender sus necesidades y traducirlas en especificaciones funcionales. En general, estoy seguro de mi capacidad para entregar soluciones web de alta calidad que satisfacen las necesidades de mis clientes y superan sus expectativas.",
            "bio.sectionTitle": "Mi Biografía",
            "bio.title": "Biografía,<br />unas pocas palabras",
            "bio.paragraph1": "Hola, soy Mauro Candia, un desarrollador full-stack de Mendoza, Argentina. Actualmente trabajo como desarrollador de software para Global Assist Group SA y también como desarrollador freelance. Con un sólido historial de logros, me comprometo a usar mis habilidades y experiencia para crear soluciones innovadoras y efectivas para mis clientes.",
            "bio.paragraph2": "",
            "bio.paragraph3": "En mi tiempo libre, disfruto de pasatiempos como hacer actividad fisica, dibujar, leer, ver series y viajar. También soy un ávido aprendiz y siempre estoy buscando formas de mejorar mis habilidades y conocimientos. Además de mis habilidades técnicas, soy una persona confiable y orientada al trabajo en equipo que siempre está lista para colaborar con los miembros del equipo y los clientes para asegurar que los proyectos se entreguen con los más altos estándares. Estoy emocionado de trabajar contigo y crear algo asombroso juntos.",
            "skills.sectionTitle": "Habilidades",
            "skills.programmingTitle": "Habilidades de Programación",
            "skills.toolsTitle": "Herramientas y Otras Habilidades",
            "skills.communicationTitle": "Habilidades de Comunicación",
            "projects.sectionTitle": "Proyectos",
            "milestones.sectionTitle": "Logros Especiales",
            "milestones.jobTitle1": "Desarrollador Full Stack",
            "milestones.jobCompany1": "GAG",
            "milestones.jobDescription1": "GAG es una Organización de servicios personales y empresariales con más de 20 años de experiencia en la comercialización y prestación de asistencias al hogar, personas, vehículos y mascotas.",
            "milestones.educationTitle1": "Técnico Universitario en Desarrollo de Software (2019-2021)",
            "milestones.educationSchool1": "Universidad Tecnológica Nacional Facultad Regional Mendoza",
            "milestones.educationDescription1": "Carrera finalizada de Técnico Universitario en Programación en UTN FRM, Mauro Candia se enfoca en dominar las tecnologías de front-end y back-end, combinando el conocimiento teórico con un fuerte énfasis en los principios clave del desarrollo de software.",
            "milestones.educationTitle2": "Curso de Inglés B1 plus",
            "milestones.educationSchool2": "Universidad Nacional de Cuyo, Idiomas UNCuyo(2024)",
            "milestones.educationDescription2": "Aprobé el examen de Nivel B1 plus de Inglés. Administrado por La Facultad de Filosofía y Letras de la Universidad de Cuyo.",
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
            "projects.descriptions.metroin": "MetroIN es una plataforma web desarrollada en ASP.NET Core con integración de TypeScript, Kendo UI y Telerik, orientada a la gestión operativa y documental de ubicaciones, clientes, unidades y asegurables dentro de un entorno empresarial.",
            "projects.descriptions.apptrabajador": "APP trabajador te permite listar todas tus habilitaciones y generar el código QR único que te garantiza el acceso en todas las ubicaciones que tienes habilitadas. Además podrás visualizar tu perfil y gestionar los cambios sobre el mismo.",
            "projects.descriptions.appgarita": "APP Garita te permite como guardia controlar los ingresos. Podrás visualizar los últimos movimientos y recibir las notificaciones. Forma parte de la plataforma de soluciones de MetroIN Argentina.",
            "projects.descriptions.wabi": "Aplicación que te permite comprar tus tickets, promos y combos para diferentes eventos que se realizan en el establecimiento.",
            "projects.descriptions.psg": "PSG es una plataforma web desarrollada en Angular con integración de TypeScript, orientada a la gestión operativa y documental de ubicaciones, clientes, unidades y asegurables dentro de un entorno empresarial.",
            "projects.descriptions.massage": "Sitio Web responsivo que te permite gestionar tratamientos y turnos con el Rol de Admin o gestionar la creacion de turnos cumpliendo el Rol de Cliente.",
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
            "intro.paragraph": "Welcome to my portfolio! Mauro Candia is an Experienced Full Stack Developer with a passion for creating visually stunning and intuitive web experiences. With a unique blend of technical skills and creative flair, I am confident in my ability to deliver custom solutions to a variety of project requirements.",
            "intro.resumeButton": "Resume",
            "intro.contactButton": "Contact Me",
            "intro.scrollDown": "Scroll Down",
            "about.sectionTitle": "About Me",
            "about.experienceText": "Years of Experience",
            "about.projectsText": "Projects Completed",
            "about.strongestSidesTitle": "What are my strongest sides and skills?",
            "about.paragraph1": "One of my strongest qualities as a full stack developer is my ability to think critically and solve problems. I excel at breaking down complex projects into manageable parts and finding innovative solutions to problems that arise. I am also very organized and detail-oriented, which allows me to complete assignments on time and to the highest standards.",
            "about.paragraph2": "As a full stack developer, I am proficient in a variety of programming languages and frameworks, including HTML, CSS, JavaScript, and Python. I have experience working with popular technologies such as MongoDB, Express, React, and Node.js, and am skilled in UI/UX development, as well as having the ability to quickly adapt to new technologies and frameworks. I have a wide range of knowledge about technologies beyond those mentioned.",
            "about.paragraph3": "I am also a strong communicator and able to effectively collaborate with clients and team members to understand their needs and translate them into functional specifications. Overall, I am confident in my ability to deliver high-quality web solutions that meet the needs of my clients and exceed their expectations.",
            "bio.sectionTitle": "My Bio",
            "bio.title": "Biography,<br />a few words",
            "bio.paragraph1": "Hi, I'm Mauro Candia, a full-stack developer from Mendoza, Argentina. I currently work as a software developer for Global Assist Group SA and also as a freelance developer. With a solid track record of achievements, I'm committed to using my skills and experience to create innovative and effective solutions for my clients.",
            "bio.paragraph2": "",
            "bio.paragraph3": "In my free time, I enjoy hobbies such as physical activity, drawing, reading, watching TV shows, and traveling. I'm also an avid learner and always looking for ways to improve my skills and knowledge. In addition to my technical abilities, I'm a reliable and team-oriented person who is always ready to collaborate with team members and clients to ensure projects are delivered to the highest standards. I'm excited to work with you and create something amazing together.",
            "skills.sectionTitle": "Skills",
            "skills.programmingTitle": "Programming Skills",
            "skills.toolsTitle": "Tools & Other Skills",
            "skills.communicationTitle": "Communication Skills",
            "projects.sectionTitle": "Projects",
            "milestones.sectionTitle": "Special Milestones",
            "milestones.jobTitle1": "Full Stack Developer",
            "milestones.jobDescription1": "GAG is a personal and business services organization with more than 20 years of experience in marketing and providing assistance to homes, people, vehicles, and pets.",
            "milestones.educationTitle1": "University Technician in Software Development (2019-2021)",
            "milestones.educationSchool1": "National Technological University Regional Faculty of Mendoza",
            "milestones.educationDescription1": "Having completed his Technical Degree in Programming at UTN FRM, Mauro Candia focuses on mastering front-end and back-end technologies, combining theoretical knowledge with a strong emphasis on the key principles of software development.",
            "milestones.educationTitle2": "B1 plus English Course",
            "milestones.educationSchool2": "National University of Cuyo, Languages ​​UNCuyo (2024)",
            "milestones.educationDescription2": "I passed the B1 plus English level exam. Administered by the Faculty of Philosophy and Letters of the University of Cuyo.",
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
            "projects.descriptions.metroin": "MetroIN is a web platform developed in ASP.NET Core with TypeScript, Kendo UI, and Telerik integration, focused on the operational and documentary management of locations, clients, units, and insurees within an enterprise environment.",
            "projects.descriptions.apptrabajador": "The Worker App allows you to list all your authorizations and generate the unique QR code that guarantees you access to all enabled locations. Additionally, you can view your profile and manage changes to it.",
            "projects.descriptions.appgarita": "The Garita App allows you, as a guard, to control entries. You can view the latest movements and receive notifications. It is part of the MetroIN Argentina solutions platform.",
            "projects.descriptions.wabi": "An application that allows you to buy your tickets, promotions, and combos for various events held at the venue.",
            "projects.descriptions.psg": "PSG is a web platform developed in Angular with TypeScript integration, focused on the operational and documentary management of locations, clients, units, and insurees within an enterprise environment.",
            "projects.descriptions.massage": "A responsive website that allows you to manage treatments and appointments with an Admin role or manage the creation of appointments with a Client role.",
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
        
        // Dispara un evento personalizado para notificar a otros scripts
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
});