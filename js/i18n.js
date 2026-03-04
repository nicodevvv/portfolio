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
      "Llevo más de 8 años construyendo productos digitales en equipos de alto rendimiento. He trabajado desde startups que necesitaban velocidad extrema hasta empresas que exigían arquitecturas enterprise con estándares rigurosos. En ambos escenarios, mi objetivo es el mismo: <strong>entregar software que genere impacto real</strong>.",
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
    "projects.label_problem": "Problema",
    "projects.label_solution": "Solución",
    "projects.label_decisions": "Decisiones técnicas",
    "projects.label_impact": "Impacto",
    "projects.p1_problem":
      "Plataforma legacy con 200+ vistas acopladas, tiempos de build de 15 minutos y zero test coverage. El equipo no podía iterar sin romper funcionalidades existentes.",
    "projects.p1_solution":
      "Migración incremental a Angular con arquitectura de micro-frontends usando Module Federation. Design system propio con Storybook. Pipeline de CI/CD con quality gates automatizados.",
    "projects.p1_decisions":
      "Nx monorepo para gestionar 12 aplicaciones independientes. Estrategia de estado con NgRx ComponentStore por dominio. Lazy loading agresivo que redujo el bundle inicial un 73%.",
    "projects.p1_impact":
      "Build time reducido de 15min a 2min. Test coverage de 0% a 82%. Time-to-market de features nuevas reducido en 60%. Onboarding de nuevos devs de 3 semanas a 4 días.",
    "projects.p2_problem":
      "App nativa para iOS y Android con dos equipos separados, inconsistencias de UX y ciclos de release de 6 semanas. El negocio necesitaba iteración semanal.",
    "projects.p2_solution":
      "Reescritura con Ionic + Capacitor sobre Angular. Un solo codebase para ambas plataformas con plugins nativos custom para biometría y notificaciones push.",
    "projects.p2_decisions":
      "Offline-first con IndexedDB y sync strategy personalizada. Arquitectura de plugins Capacitor para integraciones nativas. Gesture system custom para UX tipo nativa.",
    "projects.p2_impact":
      "De 2 equipos a 1. Release cycle de 6 semanas a 1 semana. Rating en stores: 4.7★. Performance percibida indistinguible de nativo según user testing.",
    "projects.p3_problem":
      "Herramienta de colaboración en tiempo real con 10K+ usuarios concurrentes. Los editores existentes no soportaban el modelo de datos del dominio.",
    "projects.p3_solution":
      "SPA en React con custom CRDT para resolución de conflictos. WebSocket layer con reconnection strategy y optimistic updates. Editor custom con canvas rendering.",
    "projects.p3_decisions":
      "Zustand para estado local, CRDT sync para estado distribuido. Web Workers para operaciones pesadas de merge. Virtual scrolling custom para listas de 100K+ items.",
    "projects.p3_impact":
      "Latencia de sync <100ms p99. Zero data loss en edge cases de conexión. 10K usuarios concurrentes sin degradación. Adoptado como herramienta principal por 3 enterprise clients.",
    "projects.p4_problem":
      "Organización con 8 productos frontend, cada uno con su propio set de componentes. Inconsistencia visual, duplicación masiva y costos de mantenimiento insostenibles.",
    "projects.p4_solution":
      "Design system framework-agnostic con Web Components core y wrappers para Angular y React. Tokens de diseño, documentación interactiva y governance model.",
    "projects.p4_decisions":
      "Lit para Web Components base. Generación automática de wrappers Angular/React. Design tokens con Style Dictionary. Chromatic para visual regression testing.",
    "projects.p4_impact":
      "80% reducción en código UI duplicado. Tiempo de desarrollo de features UI reducido un 40%. Consistencia visual del 95% medida por Chromatic. Adoptado por los 8 equipos en 3 meses.",

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
      "¿Tienes un proyecto que necesita <strong>criterio técnico real</strong>?<br>¿Tu equipo necesita a alguien que no sólo escriba código, sino que <strong>eleve la barra</strong>?",
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
      "For over 8 years I've been building digital products in high-performance teams. I've worked from startups that needed extreme speed to enterprises that demanded rigorous architectural standards. In both scenarios, my goal is the same: <strong>delivering software that creates real impact</strong>.",
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
    "projects.label_problem": "Problem",
    "projects.label_solution": "Solution",
    "projects.label_decisions": "Technical decisions",
    "projects.label_impact": "Impact",
    "projects.p1_problem":
      "Legacy platform with 200+ coupled views, 15-minute build times, and zero test coverage. The team couldn't iterate without breaking existing functionality.",
    "projects.p1_solution":
      "Incremental migration to Angular with micro-frontend architecture using Module Federation. Custom design system with Storybook. CI/CD pipeline with automated quality gates.",
    "projects.p1_decisions":
      "Nx monorepo to manage 12 independent applications. State strategy with NgRx ComponentStore per domain. Aggressive lazy loading that reduced the initial bundle by 73%.",
    "projects.p1_impact":
      "Build time reduced from 15min to 2min. Test coverage from 0% to 82%. Time-to-market for new features reduced by 60%. New dev onboarding from 3 weeks to 4 days.",
    "projects.p2_problem":
      "Native app for iOS and Android with two separate teams, UX inconsistencies, and 6-week release cycles. The business needed weekly iteration.",
    "projects.p2_solution":
      "Rewrite with Ionic + Capacitor on Angular. Single codebase for both platforms with custom native plugins for biometrics and push notifications.",
    "projects.p2_decisions":
      "Offline-first with IndexedDB and custom sync strategy. Capacitor plugin architecture for native integrations. Custom gesture system for native-like UX.",
    "projects.p2_impact":
      "From 2 teams to 1. Release cycle from 6 weeks to 1 week. Store rating: 4.7★. Perceived performance indistinguishable from native according to user testing.",
    "projects.p3_problem":
      "Real-time collaboration tool with 10K+ concurrent users. Existing editors didn't support the domain data model.",
    "projects.p3_solution":
      "React SPA with custom CRDT for conflict resolution. WebSocket layer with reconnection strategy and optimistic updates. Custom editor with canvas rendering.",
    "projects.p3_decisions":
      "Zustand for local state, CRDT sync for distributed state. Web Workers for heavy merge operations. Custom virtual scrolling for 100K+ item lists.",
    "projects.p3_impact":
      "Sync latency <100ms p99. Zero data loss on connection edge cases. 10K concurrent users without degradation. Adopted as primary tool by 3 enterprise clients.",
    "projects.p4_problem":
      "Organization with 8 frontend products, each with its own component set. Visual inconsistency, massive duplication, and unsustainable maintenance costs.",
    "projects.p4_solution":
      "Framework-agnostic design system with Web Components core and Angular/React wrappers. Design tokens, interactive documentation, and governance model.",
    "projects.p4_decisions":
      "Lit for base Web Components. Automatic generation of Angular/React wrappers. Design tokens with Style Dictionary. Chromatic for visual regression testing.",
    "projects.p4_impact":
      "80% reduction in duplicate UI code. UI feature development time reduced by 40%. 95% visual consistency measured by Chromatic. Adopted by all 8 teams in 3 months.",

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
