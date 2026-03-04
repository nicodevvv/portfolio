/* ═══════════════════════════════════════════════════════════
   PORTFOLIO — i18n System
   Lightweight translation engine. Zero dependencies.
   Supports data-i18n (textContent) and data-i18n-html (innerHTML).
   ═══════════════════════════════════════════════════════════ */

const translations = {
  es: {
    // Nav
    "nav.about": "sobre_mí",
    "nav.projects": "proyectos",
    "nav.philosophy": "filosofía",
    "nav.contact": "contacto",

    // Hero
    "hero.comment": "// Construyendo interfaces que importan",
    "hero.subtitle":
      "Arquitectura frontend robusta, interfaces que escalan y código que otros <em>disfrutan</em> mantener. <br><strong>Angular</strong> · <strong>React</strong> · <strong>Ionic</strong>",
    "hero.cta_projects": "ver proyectos",
    "hero.cta_talk": "hablemos",
    "hero.stat_years": "años de experiencia",
    "hero.stat_projects": "proyectos entregados",
    "hero.stat_oss": "contribuidor activo",

    // About
    "about.title": "sobre_mí",
    "about.lead":
      "No soy un desarrollador que escribe código. Soy un <strong>ingeniero que diseña soluciones</strong> y las traduce en interfaces que funcionan, escalan y se mantienen.",
    "about.p1":
      "Llevo más de 6 años construyendo productos digitales en equipos de alto rendimiento. He trabajado desde startups que necesitaban velocidad extrema hasta empresas que exigían arquitecturas enterprise con estándares rigurosos. En ambos escenarios, mi objetivo es el mismo: <strong>entregar software que genere impacto real</strong>.",
    "about.p2":
      "Mi curiosidad tecnológica no tiene interruptor de apagado. Exploro constantemente desde nuevos paradigmas de estado hasta optimizaciones de rendering, pasando por hardware — sí, tengo opiniones fuertes sobre switches de teclados mecánicos. Esa misma curiosidad me ha llevado a contribuir a proyectos open source, porque creo que el conocimiento que no se comparte es conocimiento que se pierde.",
    "about.p3":
      "Creo en la <strong>simplificación agresiva</strong>: el mejor código no es el más inteligente, es el que cualquier persona del equipo puede entender, extender y confiar. La complejidad accidental es el enemigo. La claridad es la feature más importante.",
    "about.principles_title": "// Principios",
    "about.principle1": "Arquitectura antes que código",
    "about.principle2": "Performance no es afterthought",
    "about.principle3": "Tests como documentación viva",
    "about.principle4": "DX = velocidad del equipo",
    "about.principle5": "Simplificar antes de escalar",
    "about.principle6": "Code reviews como mentoría",

    // Stack
    "stack.intro":
      "No colecciono logos de tecnologías. Cada herramienta aquí representa <strong>experiencia real en producción</strong>, decisiones de arquitectura fundamentadas y horas de profundización técnica.",
    "stack.angular_desc":
      "Arquitecturas enterprise, signals, standalone components, RxJS avanzado, lazy loading estratégico, state management con NgRx/signals.",
    "stack.react_desc":
      "Hooks patterns avanzados, server components, suspense boundaries, custom renderers, optimización de re-renders, micro-frontends.",
    "stack.ionic_desc":
      "Apps híbridas de alto rendimiento, Capacitor plugins nativos, offline-first patterns, optimización de bundle size, PWAs avanzadas.",
    "stack.testing_desc":
      "Jest, Cypress, Playwright, Testing Library. TDD cuando suma valor. Tests que documentan comportamiento, no implementación.",
    "stack.architecture": "Arquitectura",
    "stack.architecture_desc":
      "Micro-frontends, module federation, monorepos con Nx, clean architecture, domain-driven design en frontend, dependency injection patterns.",
    "stack.perf_desc":
      "Core Web Vitals, bundle optimization, tree shaking, code splitting, rendering strategies, profiling con DevTools, Lighthouse CI.",
    "stack.dx_desc":
      "CI/CD pipelines, ESLint custom rules, Prettier, Husky, conventional commits, mono-repo tooling, Storybook, documentación técnica.",
    "stack.uiux_desc":
      "Design systems, CSS architecture (BEM/utility), animaciones performantes, accesibilidad WCAG, responsive design avanzado, Figma-to-code.",

    // Projects
    "projects.title": "proyectos",
    "projects.label_context": "Contexto",
    "projects.label_role": "Mi rol",
    "projects.label_learning": "Aprendizaje clave",
    "projects.p1_context":
      "Mi primer proyecto profesional en un equipo de más de 200 personas. Plataforma de gestión de impuestos para ayuntamientos que manejaba millones de registros tributarios. Stack basado en Oracle PL/SQL, .NET Framework y JavaScript/HTML en el frontend.",
    "projects.p1_role":
      "Entré como junior y en poco tiempo ascendí a analista programador. Trabajé en todas las capas del sistema: desde procedimientos almacenados en PL/SQL hasta interfaces web completas. Aquí entendí qué significa trabajar en un equipo grande con procesos reales de desarrollo.",
    "projects.p1_learning":
      "Aprendí los fundamentos del desarrollo profesional: control de versiones en equipos grandes, revisiones de código, documentación técnica y la importancia de escribir código que otros puedan mantener. Este proyecto me enseñó que el software no es solo código — es comunicación.",
    "projects.p2_context":
      "Plataforma digital para que los ciudadanos gestionaran sus trámites municipales online. Mi primer proyecto profesional con Angular, con una cantidad de lógica de negocio en frontend que superaba cualquier cosa que hubiera hecho antes.",
    "projects.p2_role":
      "Desarrollo completo de módulos frontend en Angular. Me enfrenté a formularios complejos con validaciones dinámicas, gestión de estados y flujos de navegación no triviales. Fue el proyecto donde me enamoré del frontend.",
    "projects.p2_learning":
      'Descubrí que el frontend no era "la parte fácil" sino un mundo con profundidad técnica enorme. Angular me mostró la importancia de la arquitectura en aplicaciones complejas. Punto de inflexión en mi carrera hacia la especialización frontend.',
    "projects.p3_context":
      "Aplicación web de tasación inmobiliaria en una empresa pequeña con un proyecto muy exigente. Angular en versiones modernas con mantenimiento correctivo y evolutivo constante. Un ritmo de trabajo que exigía solidez técnica y autonomía.",
    "projects.p3_role":
      "Desarrollo y mantenimiento de la plataforma web completa. Correcciones que requerían debugging profundo y evolutivas que exigían diseñar soluciones escalables. Trabajé con versiones modernas de Angular aplicando las mejores prácticas del ecosistema.",
    "projects.p3_learning":
      'Consolidé mis habilidades frontend. Entendí la diferencia entre "saber usar un framework" y "dominar un framework". El correctivo me enseñó a leer código ajeno con rigor; el evolutivo, a planificar cambios sin romper lo existente.',
    "projects.p4_context":
      "Versión móvil de la plataforma de tasación inmobiliaria. Mi primer proyecto profesional con Ionic, igual de exigente que su versión web. Los tasadores necesitaban una herramienta fiable en campo con funcionalidades offline.",
    "projects.p4_role":
      "Desarrollo de la app móvil con Ionic sobre Angular. Adapté funcionalidades complejas de la versión web al entorno mobile, trabajando con plugins nativos y optimizando la experiencia para dispositivos con recursos limitados.",
    "projects.p4_learning":
      "Aprendí que el desarrollo mobile tiene sus propias reglas: gestión de memoria, ciclo de vida de la app, interacción con hardware nativo y la importancia crítica de la experiencia offline. Ionic me demostró el poder del desarrollo híbrido bien hecho.",
    "projects.p5_context":
      "Sistema de gestión de cursos internos para una organización. Proyecto que diseñé y construí íntegramente desde cero, con trato directo con el cliente. Angular para la web e Ionic para la app móvil, ambas arquitecturas definidas por mí.",
    "projects.p5_role":
      "Arquitectura completa, toma de decisiones técnicas, desarrollo full de web y mobile, y comunicación directa con stakeholders. Mi primer proyecto con control total del producto técnico de principio a fin.",
    "projects.p5_learning":
      "Descubrí que puedo llevar un proyecto solo de principio a fin. Aprendí a tomar decisiones de arquitectura con responsabilidad total, gestionar expectativas del cliente y balancear deuda técnica con entrega de valor. La autonomía me hizo crecer exponencialmente.",
    "projects.p6_context":
      "Plataforma de gestión de recursos internos para optimizar procesos organizacionales. Otro proyecto construido enteramente por mí, desde la definición de la arquitectura hasta la entrega final. Angular + Ionic, misma dinámica de autonomía total.",
    "projects.p6_role":
      "Diseño de arquitectura, desarrollo completo web y mobile, y gestión del ciclo de vida del proyecto. Apliqué todo lo aprendido en proyectos anteriores para entregar un producto robusto y mantenible con mayor eficiencia.",
    "projects.p6_learning":
      "Confirmé que la experiencia acumulada se traduce en velocidad y calidad. Patrones que antes me costaban semanas ahora los implementaba en días. Este proyecto consolidó mi capacidad como senior capaz de liderar proyectos de forma autónoma.",
    "projects.p7_context":
      "Plataforma documental para un ayuntamiento con integración de inteligencia artificial. Mi primer proyecto profesional con React y Python, y mi primera incursión en IA aplicada. Un salto de stack que amplió significativamente mi perfil técnico.",
    "projects.p7_role":
      "Desarrollo fullstack completo: frontend en React y backend en Python. Integré modelos de IA para procesamiento y clasificación inteligente de documentos. Mi primer proyecto construyendo mi propio backend profesional.",
    "projects.p7_learning":
      "Ampliar mi stack a React + Python me demostró que los principios de buena ingeniería son universales, independientemente del framework. La IA aplicada me abrió una nueva dimensión de posibilidades. La curiosidad es la herramienta más poderosa de un ingeniero.",

    // Open Source
    "oss.quote":
      '"El software que más me ha enseñado no lo escribí yo. Lo leí, lo entendí, y luego contribuí a mejorarlo."',
    "oss.p1":
      "Contribuir a open source no es altruismo — es <strong>ingeniería recíproca</strong>. Cada PR que abro en un proyecto público me obliga a entender código que no escribí, adaptarme a convenciones que no elegí, y comunicar decisiones técnicas a personas que no conozco. No existe mejor entrenamiento para un senior engineer.",
    "oss.p2":
      "Mis contribuciones se enfocan en <strong>developer tooling</strong>, <strong>component libraries</strong> y <strong>documentación técnica</strong>. Creo firmemente que la calidad del ecosistema define la calidad de los productos que construimos sobre él.",
    "oss.contributions_title": "// Tipo de contribuciones",
    "oss.contrib1_title": "Bug fixes & performance patches",
    "oss.contrib1_desc":
      "Identificar y resolver issues en librerías que uso en producción. Si encuentro un bug, lo fixeo upstream.",
    "oss.contrib2_title": "Documentación y ejemplos",
    "oss.contrib2_desc":
      "La documentación es interfaz de usuario para developers. Mejorarla es una contribución de primer nivel.",
    "oss.contrib3_title": "Plugins y extensiones",
    "oss.contrib3_desc":
      "Desarrollo de plugins para herramientas del ecosistema, desde ESLint rules hasta Vite plugins.",
    "oss.contrib4_title": "Code review en PRs públicas",
    "oss.contrib4_desc":
      "Revisar código ajeno es contribuir. Feedback constructivo y técnicamente sólido ayuda a toda la comunidad.",
    "oss.cta": "Ver perfil en GitHub",

    // Philosophy
    "philosophy.title": "filosofía",
    "philosophy.card1_title": "La complejidad es deuda",
    "philosophy.card1_desc":
      "Cada abstracción añadida es un costo de mantenimiento. Mi trabajo es encontrar el nivel mínimo de abstracción que resuelve el problema <em>real</em>, no el teórico. Refactorizar hacia la simplicidad es más difícil que sobre-ingeniar, y mucho más valioso.",
    "philosophy.card2_title": "Los frameworks cambian, los fundamentos no",
    "philosophy.card2_desc":
      "Invierto más tiempo entendiendo cómo funciona el browser que memorizando APIs de frameworks. Cuando entiendes el event loop, el rendering pipeline y el modelo de memoria, cualquier framework es una herramienta más — no una identidad.",
    "philosophy.card3_title": "Performance es empatía",
    "philosophy.card3_desc":
      "Optimizar no es un ejercicio técnico narcisista. Es respetar el tiempo y el dispositivo de cada persona que usa lo que construyo. Ese usuario con conexión 3G en un dispositivo de gama baja merece la misma experiencia que el CTO con su MacBook Pro.",
    "philosophy.card4_title": "El código es comunicación",
    "philosophy.card4_desc":
      "Escribo código para humanos, no para compiladores. Naming explícito, funciones pequeñas con propósito claro, tests que cuentan historias. Si necesitas un comentario para explicar qué hace tu código, tu código necesita reescribirse.",
    "philosophy.card5_title": "Feedback loops cortos",
    "philosophy.card5_desc":
      "Desde hot reload hasta CI en cada push, cada segundo de espera es fricción que mata la calidad. Optimizo obsesivamente los ciclos de feedback del equipo: builds rápidos, tests que corren en segundos, deploys automatizados.",
    "philosophy.card6_title": "Mentoría como multiplicador",
    "philosophy.card6_desc":
      "Un senior que no hace crecer a su equipo no es senior — es un IC con más años. Code reviews como teaching moments. Pair programming como herramienta de transferencia de criterio. Documentar decisiones, no solo diseños.",

    // Contact
    "contact.title": "contacto",
    "contact.lead":
      "¿Tienes un proyecto que necesita <strong>criterio técnico real</strong>?<br>¿Tu equipo necesita a alguien que <strong>no sólo escriba código</strong>?",
    "contact.sub": "Hablemos. Sin humo. Sin buzzwords. Solo ingeniería.",
    "contact.cta": "Enviar mensaje",

    // Footer
    "footer.credit": "// Diseñado y desarrollado por Pedro Nicolás Pérez",
  },

  en: {
    // Nav
    "nav.about": "about_me",
    "nav.projects": "projects",
    "nav.philosophy": "philosophy",
    "nav.contact": "contact",

    // Hero
    "hero.comment": "// Building interfaces that matter",
    "hero.subtitle":
      "Robust frontend architecture, interfaces that scale, and code that others <em>enjoy</em> maintaining. <br><strong>Angular</strong> · <strong>React</strong> · <strong>Ionic</strong>",
    "hero.cta_projects": "view projects",
    "hero.cta_talk": "let's talk",
    "hero.stat_years": "years of experience",
    "hero.stat_projects": "projects delivered",
    "hero.stat_oss": "active contributor",

    // About
    "about.title": "about_me",
    "about.lead":
      "I'm not a developer who writes code. I'm an <strong>engineer who designs solutions</strong> and translates them into interfaces that work, scale, and are maintainable.",
    "about.p1":
      "For over 6 years I've been building digital products in high-performance teams. I've worked from startups that needed extreme speed to enterprises that demanded rigorous architectural standards. In both scenarios, my goal is the same: <strong>delivering software that creates real impact</strong>.",
    "about.p2":
      "My tech curiosity has no off switch. I'm constantly exploring from new state management paradigms to rendering optimizations, including hardware — yes, I have strong opinions about mechanical keyboard switches. That same curiosity has led me to contribute to open source projects, because I believe knowledge that isn't shared is knowledge that's lost.",
    "about.p3":
      "I believe in <strong>aggressive simplification</strong>: the best code isn't the cleverest — it's the code that anyone on the team can understand, extend, and trust. Accidental complexity is the enemy. Clarity is the most important feature.",
    "about.principles_title": "// Principles",
    "about.principle1": "Architecture before code",
    "about.principle2": "Performance is not an afterthought",
    "about.principle3": "Tests as living documentation",
    "about.principle4": "DX = team velocity",
    "about.principle5": "Simplify before scaling",
    "about.principle6": "Code reviews as mentorship",

    // Stack
    "stack.intro":
      "I don't collect technology logos. Every tool here represents <strong>real production experience</strong>, well-founded architecture decisions, and hours of deep technical exploration.",
    "stack.angular_desc":
      "Enterprise architectures, signals, standalone components, advanced RxJS, strategic lazy loading, state management with NgRx/signals.",
    "stack.react_desc":
      "Advanced hooks patterns, server components, suspense boundaries, custom renderers, re-render optimization, micro-frontends.",
    "stack.ionic_desc":
      "High-performance hybrid apps, native Capacitor plugins, offline-first patterns, bundle size optimization, advanced PWAs.",
    "stack.testing_desc":
      "Jest, Cypress, Playwright, Testing Library. TDD when it adds value. Tests that document behavior, not implementation.",
    "stack.architecture": "Architecture",
    "stack.architecture_desc":
      "Micro-frontends, module federation, monorepos with Nx, clean architecture, domain-driven design in frontend, dependency injection patterns.",
    "stack.perf_desc":
      "Core Web Vitals, bundle optimization, tree shaking, code splitting, rendering strategies, DevTools profiling, Lighthouse CI.",
    "stack.dx_desc":
      "CI/CD pipelines, custom ESLint rules, Prettier, Husky, conventional commits, mono-repo tooling, Storybook, technical documentation.",
    "stack.uiux_desc":
      "Design systems, CSS architecture (BEM/utility), performant animations, WCAG accessibility, advanced responsive design, Figma-to-code.",

    // Projects
    "projects.title": "projects",
    "projects.label_context": "Context",
    "projects.label_role": "My role",
    "projects.label_learning": "Key learning",
    "projects.p1_context":
      "My first professional project in a team of over 200 people. A tax management platform for municipalities handling millions of tax records. Stack based on Oracle PL/SQL, .NET Framework, and JavaScript/HTML on the frontend.",
    "projects.p1_role":
      "I joined as a junior and quickly advanced to analyst programmer. I worked across all system layers: from PL/SQL stored procedures to complete web interfaces. This is where I understood what it means to work in a large team with real development processes.",
    "projects.p1_learning":
      "I learned the fundamentals of professional development: version control in large teams, code reviews, technical documentation, and the importance of writing code that others can maintain. This project taught me that software isn't just code — it's communication.",
    "projects.p2_context":
      "A digital platform for citizens to manage their municipal procedures online. My first professional project with Angular, with an amount of frontend business logic that exceeded anything I had done before.",
    "projects.p2_role":
      "Full development of frontend modules in Angular. I faced complex forms with dynamic validations, state management, and non-trivial navigation flows. This was the project where I fell in love with frontend development.",
    "projects.p2_learning":
      'I discovered that frontend wasn\'t "the easy part" but a world with enormous technical depth. Angular showed me the importance of architecture in complex applications. The turning point in my career toward frontend specialization.',
    "projects.p3_context":
      "A real estate appraisal web application at a small company with a highly demanding project. Modern Angular versions with constant corrective and evolutionary maintenance. A work pace that demanded technical solidity and autonomy.",
    "projects.p3_role":
      "Development and maintenance of the complete web platform. Corrective work required deep debugging; evolutionary work required designing scalable solutions. I worked with modern Angular versions applying ecosystem best practices.",
    "projects.p3_learning":
      'I consolidated my frontend skills. I understood the difference between "knowing how to use a framework" and "mastering a framework." Corrective maintenance taught me to read others\' code rigorously; evolutionary, to plan changes without breaking existing functionality.',
    "projects.p4_context":
      "Mobile version of the real estate appraisal platform. My first professional project with Ionic, equally demanding as its web counterpart. Appraisers needed a reliable field tool with offline capabilities.",
    "projects.p4_role":
      "Development of the mobile app with Ionic on Angular. I adapted complex web functionalities to the mobile environment, working with native plugins and optimizing the experience for resource-limited devices.",
    "projects.p4_learning":
      "I learned that mobile development has its own rules: memory management, app lifecycle, native hardware interaction, and the critical importance of offline experience. Ionic showed me the power of well-executed hybrid development.",
    "projects.p5_context":
      "Internal course management system for an organization. A project I designed and built entirely from scratch, with direct client contact. Angular for the web and Ionic for the mobile app, both architectures defined by me.",
    "projects.p5_role":
      "Complete project architecture, technical decision-making, full web and mobile development, and direct communication with stakeholders. My first project with total control of the technical product from start to finish.",
    "projects.p5_learning":
      "I discovered I could carry a project alone from beginning to end. I learned to make architectural decisions with full responsibility, manage client expectations, and balance technical debt with value delivery. Autonomy made me grow exponentially.",
    "projects.p6_context":
      "Internal resource management platform to optimize organizational processes. Another project built entirely by me, from architecture definition to final delivery. Angular + Ionic, same dynamic of total autonomy.",
    "projects.p6_role":
      "Architecture design, complete web and mobile development, and project lifecycle management. I applied everything learned from previous projects to deliver a robust and maintainable product with greater efficiency.",
    "projects.p6_learning":
      "I confirmed that accumulated experience translates into speed and quality. Patterns that used to take me weeks I now implemented in days. This project consolidated my ability as a senior developer capable of leading projects autonomously.",
    "projects.p7_context":
      "Document management platform for a city council with artificial intelligence integration. My first professional project with React and Python, and my first foray into applied AI. A stack shift that significantly broadened my technical profile.",
    "projects.p7_role":
      "Full-stack development: React frontend and Python backend. I integrated AI models for intelligent document processing and classification. My first project building my own professional backend.",
    "projects.p7_learning":
      "Expanding my stack to React + Python showed me that good engineering principles are universal, regardless of the framework. Applied AI opened a new dimension of possibilities. Curiosity is an engineer's most powerful tool.",

    // Open Source
    "oss.quote":
      '"The software that taught me the most wasn\'t written by me. I read it, understood it, and then contributed to making it better."',
    "oss.p1":
      "Contributing to open source isn't altruism — it's <strong>reciprocal engineering</strong>. Every PR I open in a public project forces me to understand code I didn't write, adapt to conventions I didn't choose, and communicate technical decisions to people I don't know. There is no better training for a senior engineer.",
    "oss.p2":
      "My contributions focus on <strong>developer tooling</strong>, <strong>component libraries</strong>, and <strong>technical documentation</strong>. I firmly believe that the quality of the ecosystem defines the quality of the products we build on top of it.",
    "oss.contributions_title": "// Types of contributions",
    "oss.contrib1_title": "Bug fixes & performance patches",
    "oss.contrib1_desc":
      "Identifying and resolving issues in libraries I use in production. If I find a bug, I fix it upstream.",
    "oss.contrib2_title": "Documentation & examples",
    "oss.contrib2_desc":
      "Documentation is user interface for developers. Improving it is a first-class contribution.",
    "oss.contrib3_title": "Plugins & extensions",
    "oss.contrib3_desc":
      "Building plugins for ecosystem tools, from ESLint rules to Vite plugins.",
    "oss.contrib4_title": "Code review on public PRs",
    "oss.contrib4_desc":
      "Reviewing others' code is contributing. Constructive and technically sound feedback helps the entire community.",
    "oss.cta": "View GitHub profile",

    // Philosophy
    "philosophy.title": "philosophy",
    "philosophy.card1_title": "Complexity is debt",
    "philosophy.card1_desc":
      "Every added abstraction is a maintenance cost. My job is to find the minimum level of abstraction that solves the <em>real</em> problem, not the theoretical one. Refactoring toward simplicity is harder than over-engineering, and far more valuable.",
    "philosophy.card2_title": "Frameworks change, fundamentals don't",
    "philosophy.card2_desc":
      "I invest more time understanding how the browser works than memorizing framework APIs. When you understand the event loop, the rendering pipeline, and the memory model, any framework is just another tool — not an identity.",
    "philosophy.card3_title": "Performance is empathy",
    "philosophy.card3_desc":
      "Optimizing isn't a narcissistic technical exercise. It's respecting the time and device of every person who uses what I build. That user on a 3G connection with a budget device deserves the same experience as the CTO with their MacBook Pro.",
    "philosophy.card4_title": "Code is communication",
    "philosophy.card4_desc":
      "I write code for humans, not compilers. Explicit naming, small functions with clear purpose, tests that tell stories. If you need a comment to explain what your code does, your code needs rewriting.",
    "philosophy.card5_title": "Short feedback loops",
    "philosophy.card5_desc":
      "From hot reload to CI on every push, every second of waiting is friction that kills quality. I obsessively optimize the team's feedback cycles: fast builds, tests that run in seconds, automated deploys.",
    "philosophy.card6_title": "Mentorship as a multiplier",
    "philosophy.card6_desc":
      "A senior who doesn't grow their team isn't a senior — they're an IC with more years. Code reviews as teaching moments. Pair programming as a tool for transferring judgment. Document decisions, not just designs.",

    // Contact
    "contact.title": "contact",
    "contact.lead":
      "Have a project that needs <strong>real technical judgment</strong>?<br>Does your team need someone who doesn't just write code, but <strong>raises the bar</strong>?",
    "contact.sub": "Let's talk. No smoke. No buzzwords. Just engineering.",
    "contact.cta": "Send message",

    // Footer
    "footer.credit": "// Designed and developed by Pedro Nicolás Pérez",
  },
};

// ─── i18n Engine ───────────────────────────────────────────

function getStoredLang() {
  try {
    return localStorage.getItem("portfolio-lang") || "es";
  } catch {
    return "es";
  }
}

function storeLang(lang) {
  try {
    localStorage.setItem("portfolio-lang", lang);
  } catch {
    // Silent fail — storage not critical
  }
}

function applyTranslations(lang) {
  const dict = translations[lang];
  if (!dict) return;

  // Update html lang attribute
  document.documentElement.lang = lang;

  // Translate data-i18n (textContent)
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // Translate data-i18n-html (innerHTML — for elements with <strong>, <em>, <br>)
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });
}

function initI18n() {
  const langToggle = document.getElementById("langToggle");
  if (!langToggle) return;

  let currentLang = getStoredLang();

  // Apply stored language on load
  applyTranslations(currentLang);
  updateToggleUI(langToggle, currentLang);

  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "es" ? "en" : "es";
    storeLang(currentLang);
    applyTranslations(currentLang);
    updateToggleUI(langToggle, currentLang);

    // Notify other modules (e.g. typing animation)
    document.dispatchEvent(
      new CustomEvent("langChanged", { detail: { lang: currentLang } }),
    );
  });
}

function updateToggleUI(btn, lang) {
  const current = btn.querySelector(".lang-btn__current");
  const other = btn.querySelector(".lang-btn__other");

  if (lang === "es") {
    current.textContent = "ES";
    other.textContent = "EN";
    btn.setAttribute("aria-label", "Switch to English");
  } else {
    current.textContent = "EN";
    other.textContent = "ES";
    btn.setAttribute("aria-label", "Cambiar a español");
  }
}

// Export for main.js
window.__i18n = { initI18n, applyTranslations, getStoredLang };
