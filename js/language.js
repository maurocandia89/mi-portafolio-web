document.addEventListener("DOMContentLoaded", () => {
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
      "intro.paragraph":
        "¡Bienvenido a mi portafolio! Soy un desarrollador Full Stack con experiencia en tecnologías modernas. Mi pasión es crear soluciones web robustas y visualmente atractivas que resuelvan problemas reales. Estoy listo para enfrentar nuevos desafíos y colaborar en proyectos que superen las expectativas.",
      "intro.resumeButton": "Currículum",
      "intro.contactButton": "Contáctame",
      "intro.scrollDown": "Bajar",
      "intro.resumeEnglish": "CV Inglés",
      "intro.resumeSpanish": "CV Español",
      "about.sectionTitle": "Acerca de Mí",
      "about.experienceText": "Años de Experiencia",
      "about.projectsText": "Proyectos Completados",
      "about.strongestSidesTitle":
        "¿Cuáles son mis lados más fuertes y habilidades?",
      //
      "about.paragraph1":
        "Soy Software Developer Semi Senior & Data Enginner Jr con experiencia en diseño de pipelines de datos, integración de sistemas y despliegue de infraestructura en AWS. Me especializo en construir soluciones robustas de ingestión, transformación y persistencia de datos, trabajando con arquitecturas distribuidas y múltiples APIs externas. Mi viaje como desarrollador comenzó con mi formación en la Universidad Tecnológica Nacional (UTN) de Mendoza...",
      "about.paragraph2":
        "Al poco tiempo de graduarme, me uní a Global Assist Group SA, donde trabajé como desarrollador y profundicé mi conocimiento en el ecosistema .NET, incluyendo ASP.NET Core, Blazor, NET MAUI y C#. Además, gané experiencia práctica con Node.js, Angular, PostgreSQL y Docker, lo que me permitió participar en el ciclo completo de desarrollo de aplicaciones, desde la concepción hasta el despliegue.",
      "about.paragraph3":
        "En paralelo a mi trabajo en la empresa, desarrollé una carrera como freelancer. Esto me ha enseñado a gestionar proyectos de forma autónoma y a dominar herramientas de despliegue como Vercel, Render y Neon. Esta experiencia dual me ha brindado una perspectiva completa y la agilidad para adaptarme a diversas necesidades del mercado.",
      "bio.sectionTitle": "Biografía",
      "bio.title": "Mi biografía,<br />en pocas palabras",
      // "bio.paragraph1": "Soy Mauro Candia, un desarrollador Full Stack de Mendoza, Argentina. Si bien mi carrera es mi pasión, mi vida se enriquece con mis intereses personales. En mi tiempo libre, me encanta sumergirme en el arte, ya sea a través del dibujo o la pintura, y mantenerme activo con la natación y el gimnasio.",
      // "bio.paragraph2": "También soy un apasionado de la cultura. Me considero un cinéfilo dedicado, siempre en busca de nuevas historias en la pantalla grande. Me encanta viajar y conocer nuevas culturas, lo que me permite ver el mundo desde diferentes perspectivas. Además, disfruto de la lectura, devorando libros de psicología, desarrollo personal y novelas policiales que desafían la mente. Esta curiosidad por aprender va más allá de mis habilidades técnicas.",
      // "bio.paragraph3": "Me comprometo a un crecimiento constante, no solo profesional sino también personal. Actualmente, me esfuerzo por perfeccionar mi inglés y tengo el objetivo de aprender otros idiomas en el futuro. Me considero una persona confiable y orientada al trabajo en equipo, siempre listo para colaborar y dar lo mejor de mí en cualquier proyecto, técnico o personal.",
      // "skills.sectionTitle": "Habilidades",
      "bio.paragraph1":
        "Soy Mauro Candia, Software Developer Semi Senior & Data Enginner Jr de Mendoza, Argentina. Actualmente formo parte del equipo de Unistore, donde lidero el diseño e implementación de pipelines de datos distribuidos e integración de sistemas empresariales. En Unistore, desarrollo APIs de persistencia, modelos y procesos ETL robustos, trabajando con tecnologías como NestJS, Prisma y PostgreSQL, todo desplegado en infraestructura cloud AWS. Me encargo de la sincronización de datos entre plataformas como Tienda Nube, Contabilium, Mercado Libre y DIGIP, garantizando integridad, trazabilidad y calidad de la información.",

      "bio.paragraph2":
        "En mi día a día, implemento arquitecturas basadas en microservicios, manejo CRON jobs automatizados para la actualización y reconciliación de datos, aplico validaciones de Data Quality y orquesto el despliegue de soluciones productivas en EC2 y AWS Amplify. Mi trabajo en Unistore requiere habilidades como el modelado relacional, la integración con múltiples APIs externas, la automatización de procesos y la resolución de incidentes complejos de datos. Antes de Unistore, trabajé en Global Assist Group SA, donde forjé mis bases en desarrollo web, .NET, Angular, Node.js y herramientas de despliegue modernas.",

      "bio.paragraph3":
        "Me apasionan los desafíos tecnológicos y el aprendizaje constante. Complemento mi carrera profesional con intereses personales, disfrutando del arte, la natación, el cine, los viajes y la lectura. Creo en la colaboración, la mejora continua y la adaptación a nuevos entornos y tecnologías. Mi objetivo es seguir aportando valor en equipos multidisciplinarios y seguir creciendo como Data Engineer, integrando conocimientos tanto técnicos como humanos.",
      "skills.toolsTitle": "Herramientas y Otras Habilidades",
      "skills.communicationTitle": "Habilidades de Comunicación",
      "projects.sectionTitle": "Proyectos",
      "milestones.sectionTitle": "Logros",
      "milestones.educationTitle0": "Técnico Industrial",
      "milestones.educationSchool0": "Universidad de Mendoza",
      "milestones.educationDescription0":
        "Estudié y completé el plan de estudios para la carrera de Ingeniería Industrial, en la cual obtuve el título de Técnico Industrial.",
      "milestones.educationTitle1": "Curso Java",
      "milestones.educationSchool1":
        "Universidad Tecnológica Nacional Facultad Regional Mendoza",
      "milestones.educationDescription1":
        "Curso de Fundación Proydesa-Proyectos y Desarrollos Argentinos.",
      "milestones.educationTitle2":
        "Técnico Universitario en Desarrollo de Software",
      "milestones.educationSchool2":
        "Universidad Tecnológica Nacional Facultad Regional Mendoza",
      "milestones.educationDescription2":
        "Completé mi formación en la UTN, donde me enfoqué en dominar tecnologías de front-end y back-end, combinando la teoría con la práctica de los principios clave del desarrollo de software.",
      "milestones.educationTitle3": "Curso de Inglés B1",
      "milestones.educationSchool3":
        "Universidad Nacional de Cuyo, Idiomas UNCuyo",
      "milestones.educationDescription3":
        "Aprobé el examen de Nivel B1 plus de Inglés, administrado por la Facultad de Filosofía y Letras de la Universidad de Cuyo.",
      "milestones.educationTitle4": "Curso de Inglés B2",
      "milestones.educationSchool4":
        "Universidad Nacional de Cuyo, Idiomas UNCuyo",
      "milestones.educationDescription4":
        "Aprobé el examen de Nivel B2 de Inglés, administrado por la Facultad de Filosofía y Letras de la Universidad de Cuyo.",
      // "milestones.educationTitle5": "Data Engineer en Unistore / Unidrop",
      // "milestones.educationSchool5": "Unistore / Unidrop",
      // "milestones.educationDescription5":
      //   "Diseño e implementación de pipelines de datos distribuidos, integración de sistemas, despliegue de infraestructura AWS, data quality y CRON jobs.",

      "milestones.educationTitle5": "Curso de Web Scraping con Python",
      "milestones.educationSchool5": "Platzi",
      "milestones.educationDescription5":
        "Desarrollo de procesos automatizados para extracción, procesamiento y almacenamiento de información desde sitios web utilizando Python. Implementación de técnicas de scraping, manejo de datos estructurados y automatización de flujos para recolección de información a gran escala.",

      "milestones.educationTitle6": "Curso de Serverless Framework en AWS",
      "milestones.educationSchool6": "Platzi",
      "milestones.educationDescription6":
        "Diseño e implementación de aplicaciones serverless utilizando AWS Lambda, API Gateway y Serverless Framework. Automatización de despliegues, configuración de infraestructura como código y desarrollo de servicios escalables basados en eventos dentro del ecosistema AWS.",

      "milestones.educationTitle7": "Curso Práctico de Bases de Datos en AWS",
      "milestones.educationSchool7": "Platzi",
      "milestones.educationDescription7":
        "Diseño, administración y optimización de bases de datos en entornos cloud utilizando servicios de AWS. Configuración de instancias, gestión de seguridad, monitoreo, respaldos y buenas prácticas para aplicaciones productivas orientadas a la escalabilidad y disponibilidad.",

      "contact.sectionTitle": "Contacto",
      "contact.title":
        "Llama o escribe <span class='green'>en cualquier momento</span>",
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
      "footer.copyrightText":
        "Derechos de autor &copy; 2021-2025 | Todos los derechos reservados. Hecho con <span id='heart-icon'>&#10084;</span> por <a title='Sitio Oficial'>Mauro Candia</a>",
      "projects.descriptions.metroin":
        "Plataforma web para la gestión operativa y documental de empresas. Desarrollada en ASP.NET Core, TypeScript y Kendo UI/Telerik.",
      "projects.descriptions.apptrabajador":
        "Aplicación móvil para trabajadores que permite listar habilitaciones, generar códigos QR para acceso, y gestionar perfiles de usuario.",
      "projects.descriptions.appgarita":
        "Aplicación móvil para guardias de seguridad. Permite controlar el acceso, visualizar los últimos movimientos y recibir notificaciones en tiempo real.",
      "projects.descriptions.wabi":
        "Aplicación para la venta de entradas, promociones y combos para eventos.",
      "projects.descriptions.psg":
        "Plataforma web para la gestión operativa y documental, desarrollada en Angular y TypeScript.",
      "projects.descriptions.massage":
        "Sitio web responsivo para la gestión de tratamientos y turnos, con roles de Administrador y Cliente.",
      "projects.descriptions.pokédex":
        "Sitio web responsivo que utiliza la API oficial de Pokémon, permitiendote ver el listado y poder elegir tus pokémons favoritos.",
      "projects.descriptions.unidrop":
        "Diseño e implementación de un pipeline de datos distribuido integrando múltiples sistemas (Tienda Nube, Contabilium, Mercado Libre, DIGIP). Desarrollo de API de persistencia con NestJS y Prisma en AWS, implementación de procesos ETL robustos, Data Quality, integración y reconciliación con sistemas externos, despliegue en la nube y automatización con CRON Jobs.",
      "projects.descriptions.unistore":
        "Desarrollo de la base de datos central para persistir toda la actividad de la web de Unistore, integrando y normalizando datos desde APIs externas como Tienda Nube, Contabilium, DIGIP y Mercado Libre. Implementación de procesos ETL y arquitecturas robustas de datos en AWS, garantizando trazabilidad, calidad y automatización para gestionar compras mayoristas, clientes y facturación.",

      "projects.status.discontinued": "Proyecto descontinuado",
      "projects.status.private": "Proyecto privado",
      "projects.status.historical": "Proyecto historico",

      "nav.resumeEnglish": "CV EN",
      "nav.resumeSpanish": "CV ES",
      "skills.sectionTitle": "Habilidades",
      "skills.programmingTitle": "Habilidades de Programación",
      "nav.downloadCv": "Descargar CV",
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
      "intro.paragraph":
        "Welcome to my portfolio! I'm an experienced Full Stack Developer with a passion for creating robust, visually appealing, and intuitive web solutions. With a unique blend of technical expertise and creative problem-solving, I'm confident in my ability to deliver custom solutions that exceed project requirements.",
      "intro.resumeButton": "Resume",
      "intro.contactButton": "Contact Me",
      "intro.scrollDown": "Scroll Down",
      "intro.resumeEnglish": "CV English",
      "intro.resumeSpanish": "CV Spanish",
      "about.sectionTitle": "About Me",
      "about.experienceText": "Years of Experience",
      "about.projectsText": "Projects Completed",
      "about.strongestSidesTitle": "What are my strongest sides and skills?",
      // "about.paragraph1": "My journey as a developer began with my studies at the National Technological University (UTN) in Mendoza, where I earned a degree as a University Technician in Software Development. This education gave me a solid foundation in programming principles and a specialization in both front-end and back-end technologies.",
      "about.paragraph1":
        "I am a Software Developer Semi Senior & Data Engineer Jr skilled in designing data pipelines, systems integration, and AWS infrastructure deployment. I specialize in building robust solutions for data ingestion, transformation, and persistence, working with distributed architectures and multiple external APIs. My journey as a developer began with my studies at the National Technological University (UTN) in Mendoza...",
      "about.paragraph2":
        "Shortly after graduating, I joined Global Assist Group SA as a developer, where I deepened my knowledge of the .NET ecosystem, including ASP.NET Core, Blazor, .NET MAUI and C#. I also gained hands-on experience with Node.js, Angular, PostgreSQL, and Docker, allowing me to manage the full application development cycle, from concept to deployment.",
      "about.paragraph3":
        "In parallel with my full-time job, I've built a career as a freelance developer. This work has taught me how to independently manage projects and master deployment tools like Vercel, Render, and Neon. This dual experience provides me with a comprehensive perspective and the agility to adapt to diverse market needs.",
      "bio.sectionTitle": "Biography",
      "bio.title": "My biography,<br />a few words",
      // "bio.paragraph1": "I am Mauro Candia, a Full Stack Developer from Mendoza, Argentina. While my career is a driving passion, my life is enriched by my personal interests. In my free time, I love diving into art through drawing and painting, and staying active with swimming and gym workouts.",
      // "bio.paragraph2": "I'm also a culture enthusiast. I consider myself a dedicated cinephile, always searching for new stories on the big screen. I love to travel and explore new cultures, which allows me to see the world from different perspectives. In addition, I enjoy reading, devouring books on psychology, personal development, and crime novels that challenge my mind. This love for learning extends far beyond my technical skills.",
      // "bio.paragraph3": "I am committed to constant growth, both professionally and personally. Currently, I'm focused on perfecting my English and have a goal of learning other languages in the future. I see myself as a reliable, team-oriented individual, always ready to collaborate and give my best to any project, whether it's technical or personal.",
      "bio.paragraph1":
        "I am Mauro Candia, a Software Developer Semi Senior & Data Engineer Jr from Mendoza, Argentina. I currently work at Unistore, where I lead the design and implementation of distributed data pipelines and enterprise system integration. At Unistore, I build robust persistence APIs, data models, and ETL processes using technologies such as NestJS, Prisma, and PostgreSQL, deployed on AWS cloud infrastructure. I am responsible for orchestrating data synchronization between platforms like Tienda Nube, Contabilium, Mercado Libre, and DIGIP, ensuring information integrity, traceability, and high data quality.",

      "bio.paragraph2":
        "My day-to-day involves implementing microservices architectures, managing automated CRON jobs for incremental synchronization and data reconciliation, applying Data Quality validations, and deploying productive solutions in EC2 and AWS Amplify. My work at Unistore demands skills such as relational data modeling, integration with multiple external APIs, process automation, and solving complex data consistency issues. Before Unistore, I worked at Global Assist Group SA, where I built strong foundations in web development, .NET, Angular, Node.js, and modern deployment tools.",

      "bio.paragraph3":
        "I am passionate about technological challenges and continuous learning. I complement my professional career with personal interests such as art, swimming, cinema, travel, and reading. I believe in collaboration, continuous improvement, and adapting to new environments and technologies. My goal is to keep creating value in multidisciplinary teams and keep growing as a Data Engineer, integrating both technical and human skills.",
      "skills.sectionTitle": "Skills",
      "skills.programmingTitle": "Programming Skills",
      "skills.toolsTitle": "Tools & Other Skills",
      "skills.communicationTitle": "Communication Skills",
      "projects.sectionTitle": "Projects",
      "milestones.sectionTitle": "Milestones",
      "milestones.educationTitle0": "Industrial Technician",
      "milestones.educationSchool0": "University of Mendoza",
      "milestones.educationDescription0":
        "I studied and completed the coursework for the Industrial Engineering degree, in which I obtained the title of Industrial Technician.",
      "milestones.educationTitle1": "Java Course",
      "milestones.educationSchool1":
        "National Technological University Regional Faculty of Mendoza",
      "milestones.educationDescription1":
        "Proydesa Foundation Course - Argentine Projects and Developments.",
      "milestones.educationTitle2":
        "University Technician in Software Development",
      "milestones.educationSchool2":
        "National Technological University Regional Faculty of Mendoza",
      "milestones.educationDescription2":
        "I completed my degree at UTN, focusing on mastering front-end and back-end technologies. My training combined theoretical knowledge with a strong emphasis on core software development principles.",
      "milestones.educationTitle3": "B1 English Course",
      "milestones.educationSchool3":
        "National University of Cuyo, Languages UNCuyo",
      "milestones.educationDescription3":
        "I passed the B1 English level exam, administered by the Faculty of Philosophy and Letters of the University of Cuyo.",
      "milestones.educationTitle4": "B2 English Course",
      "milestones.educationSchool4":
        "National University of Cuyo, Languages UNCuyo",
      "milestones.educationDescription4":
        "I passed the B2 English level exam, administered by the Faculty of Philosophy and Letters of the University of Cuyo.",
      // "milestones.educationTitle5": "Data Engineer en Unistore / Unidrop",
      // "milestones.educationSchool5": "Unistore / Unidrop",
      // "milestones.educationDescription5":
      //   "Design and implementation of distributed data pipelines, systems integration, AWS infrastructure deployment, data quality and CRON jobs.",

      "milestones.educationTitle5": "Web Scraping Course with Python",
      "milestones.educationSchool5": "Platzi",
      "milestones.educationDescription5":
        "Development of automated processes for extracting, processing, and storing information from websites using Python. Implementation of web scraping techniques, structured data handling, and workflow automation for large-scale data collection.",

      "milestones.educationTitle6": "Serverless Framework Course on AWS",
      "milestones.educationSchool6": "Platzi",
      "milestones.educationDescription6":
        "Design and implementation of serverless applications using AWS Lambda, API Gateway, and Serverless Framework. Automation of deployments, configuration of infrastructure as code, and development of scalable, event-driven services within the AWS ecosystem.",

      "milestones.educationTitle7": "Practical Course on Databases in AWS",
      "milestones.educationSchool7": "Platzi",
      "milestones.educationDescription7":
        "Design, administration, and optimization of databases in cloud environments using AWS services. Instance configuration, security management, monitoring, backups, and best practices for production applications focused on scalability and availability.",

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
      "footer.copyrightText":
        "Copyright &copy; 2021-2025 | All rights reserved. Made with <span id='heart-icon'>&#10084;</span> by <a href='https://MauroCandia.github.io' title='Official Website' target='_blank'>Mauro Candia</a>",
      "projects.descriptions.metroin":
        "A web platform for operational and document management, developed in ASP.NET Core, TypeScript, and Kendo UI/Telerik.",
      "projects.descriptions.apptrabajador":
        "A mobile app for workers to list authorizations, generate QR codes for access, and manage user profiles.",
      "projects.descriptions.appgarita":
        "A mobile app for security guards to control access, view recent movements, and receive real-time notifications.",
      "projects.descriptions.wabi":
        "An application for purchasing tickets, promotions, and combos for various events.",
      "projects.descriptions.psg":
        "A web platform for operational and document management, developed in Angular and TypeScript.",
      "projects.descriptions.massage":
        "A responsive website for managing treatments and appointments, with Admin and Client roles.",
      "projects.descriptions.pokédex":
        "Responsive website that uses the official Pokémon API, allowing you to view the list and choose your favorite Pokémon.",
      "projects.descriptions.unidrop":
        "Design and implementation of a distributed data pipeline integrating multiple systems (Tienda Nube, Contabilium, Mercado Libre, DIGIP). Developed persistence API with NestJS and Prisma on AWS, implemented robust ETL processes and Data Quality strategies, external systems integration and reconciliation, cloud deployment, and process automation with CRON Jobs.",
      "projects.descriptions.unistore":
        "Developed the core database to persist all Unistore website activity, integrating and normalizing data from external APIs such as Tienda Nube, Contabilium, DIGIP, and Mercado Libre. Implemented ETL processes and robust data architectures on AWS, ensuring traceability, quality, and automation for handling wholesale purchases, clients, and invoicing.",

      "projects.status.discontinued": "Discontinued project",
      "projects.status.private": "Private project",
      "projects.status.historical": "Historical project",

      "nav.resume": "CV",
      "nav.downloadCv": "Download CV",
    },
  };

  window.translations = translations;
  const languageSelector = document.getElementById("language-selector");

  function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        element.innerHTML = translations[lang][key];
      } else {
        console.error(`Missing translation key: ${key} for language: ${lang}`);
      }
    });
    localStorage.setItem("lang", lang);

    const event = new Event("languageChanged");
    document.dispatchEvent(event);
  }

  const savedLang = localStorage.getItem("lang") || "en";
  setLanguage(savedLang);

  if (languageSelector) {
    languageSelector.addEventListener("click", (event) => {
      if (event.target.tagName === "BUTTON") {
        const lang = event.target.getAttribute("data-lang");
        setLanguage(lang);
        document
          .querySelectorAll(".lang-btn")
          .forEach((btn) => btn.classList.remove("active"));
        event.target.classList.add("active");
      }
    });
  }
  document.dispatchEvent(new Event("translationsLoaded"));
});
