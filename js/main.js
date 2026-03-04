/* ═══════════════════════════════════════════════════════════
   PORTFOLIO — Main JavaScript
   Interactions, animations, and easter eggs.
   Zero dependencies. Clean. Performant.
   ═══════════════════════════════════════════════════════════ */

(() => {
  "use strict";

  // ─── DOM Cache ───────────────────────────────────────────
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  const nav = $("#nav");
  const navToggle = $("#navToggle");
  const navMenu = $("#navMenu");
  const soundToggle = $("#soundToggle");
  const keySound = $("#keySound");

  // ─── State ───────────────────────────────────────────────
  let soundEnabled = false;
  let lastScrollY = 0;

  // ═══════════════════════════════════════════════════════════
  // SCROLL REVEAL (Intersection Observer)
  // ═══════════════════════════════════════════════════════════
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -60px 0px",
    },
  );

  function initRevealAnimations() {
    $$(".reveal").forEach((el) => revealObserver.observe(el));
  }

  // ═══════════════════════════════════════════════════════════
  // NAVIGATION
  // ═══════════════════════════════════════════════════════════
  function initNavigation() {
    // Scroll effect
    let ticking = false;

    function onScroll() {
      lastScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          nav.classList.toggle("nav--scrolled", lastScrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    // Mobile toggle
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen);

      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    });

    // Close menu on link click
    $$(".nav__link", navMenu).forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });

    // Close menu on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navMenu.classList.contains("open")) {
        navMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
        navToggle.focus();
      }
    });

    // Active link highlighting
    const sections = $$("section[id]");
    const navLinks = $$(".nav__link");

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach((link) => {
              link.classList.toggle(
                "nav__link--active",
                link.getAttribute("href") === `#${id}`,
              );
            });
          }
        });
      },
      { threshold: 0.3, rootMargin: "-20% 0px -60% 0px" },
    );

    sections.forEach((section) => sectionObserver.observe(section));
  }

  // ═══════════════════════════════════════════════════════════
  // SOUND SYSTEM (Mechanical Keyboard Click)
  // ═══════════════════════════════════════════════════════════
  function initSoundSystem() {
    // Create a minimal click sound using Web Audio API
    let audioCtx = null;

    function createClickSound() {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }

      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      oscillator.type = "square";
      oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(
        200,
        audioCtx.currentTime + 0.05,
      );

      gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.001,
        audioCtx.currentTime + 0.08,
      );

      oscillator.start(audioCtx.currentTime);
      oscillator.stop(audioCtx.currentTime + 0.08);
    }

    function playKeySound() {
      if (!soundEnabled) return;
      try {
        createClickSound();
      } catch (e) {
        // Silent fail — audio not critical
      }
    }

    // Toggle button
    soundToggle.addEventListener("click", () => {
      soundEnabled = !soundEnabled;
      soundToggle.classList.toggle("active", soundEnabled);

      const label = soundEnabled
        ? "Desactivar sonido de teclado"
        : "Activar sonido de teclado";
      soundToggle.setAttribute("aria-label", label);

      if (soundEnabled) {
        playKeySound(); // Feedback click
      }
    });

    // Key press sound
    document.addEventListener("keydown", (e) => {
      if (soundEnabled && !e.metaKey && !e.ctrlKey && e.key.length === 1) {
        playKeySound();
      }
    });

    // Click sound on interactive elements
    document.addEventListener("click", (e) => {
      if (
        soundEnabled &&
        (e.target.closest("a") || e.target.closest("button"))
      ) {
        playKeySound();
      }
    });
  }

  // ═══════════════════════════════════════════════════════════
  // TYPING ANIMATION (Hero comment)
  // ═══════════════════════════════════════════════════════════
  function initTypingAnimation() {
    const comment = $(".hero__comment");
    if (!comment) return;

    let typeTimer = null;
    let cursorTimer = null;

    function runTyping(text) {
      // Cancel any ongoing animation
      if (typeTimer) clearTimeout(typeTimer);
      if (cursorTimer) clearTimeout(cursorTimer);

      comment.textContent = "";
      comment.style.borderRight = "2px solid var(--accent-primary)";

      let charIndex = 0;
      const typeDelay = 50;

      function type() {
        if (charIndex < text.length) {
          comment.textContent += text[charIndex];
          charIndex++;
          typeTimer = setTimeout(type, typeDelay + Math.random() * 30);
        } else {
          cursorTimer = setTimeout(() => {
            comment.style.borderRight = "none";
          }, 1500);
        }
      }

      typeTimer = setTimeout(type, 400);
    }

    // Initial run
    const fullText = comment.textContent;
    comment.textContent = "";
    comment.style.borderRight = "2px solid var(--accent-primary)";
    setTimeout(() => runTyping(fullText), 800);

    // Re-trigger on language change
    document.addEventListener("langChanged", () => {
      runTyping(comment.textContent);
    });
  }

  // ═══════════════════════════════════════════════════════════
  // KEYCAP INTERACTION
  // ═══════════════════════════════════════════════════════════
  function initKeycap() {
    const keycap = $(".keycap");
    if (!keycap) return;

    keycap.addEventListener("click", () => {
      keycap.style.transform = "translateY(4px)";

      setTimeout(() => {
        keycap.style.transform = "";
      }, 150);

      // Toggle sound on keycap click too
      if (!soundEnabled) {
        soundEnabled = true;
        soundToggle.classList.add("active");
        soundToggle.setAttribute("aria-label", "Desactivar sonido de teclado");
      }
    });
  }

  // ═══════════════════════════════════════════════════════════
  // CONSOLE EASTER EGG
  // ═══════════════════════════════════════════════════════════
  function initEasterEgg() {
    const styles = {
      header: `
        font-size: 16px;
        font-weight: bold;
        color: #64ffda;
        background: #0a0a0f;
        padding: 12px 20px;
        border-left: 3px solid #64ffda;
      `,
      text: `
        font-size: 12px;
        color: #8888a0;
        background: #0a0a0f;
        padding: 8px 20px;
      `,
      accent: `
        font-size: 12px;
        color: #64ffda;
        background: #0a0a0f;
        padding: 8px 20px;
      `,
    };

    console.log("%c{P} Portfolio", styles.header);
    console.log("%c", styles.text);
    console.log(
      "%cSi estás aquí, probablemente seas developer. Bienvenido/a.",
      styles.text,
    );
    console.log(
      "%c¿Curiosidad técnica? Es una buena señal. Hablemos.",
      styles.text,
    );
    console.log("%c", styles.text);
    console.log(
      "%c→ Este portfolio está hecho con HTML, CSS y JS vanilla.",
      styles.accent,
    );
    console.log(
      "%c→ Zero dependencias. Zero frameworks. Pure engineering.",
      styles.accent,
    );
    console.log(
      "%c→ Performance y accesibilidad como prioridades, no afterthoughts.",
      styles.accent,
    );
    console.log("%c", styles.text);
    console.log(
      "%c💡 Tip: Activa el sonido del teclado mecánico con el botón 🔇 del nav.",
      styles.text,
    );
    console.log(
      "%c⌨️  ¿Cherry MX Brown, Red o Blue? Esa es la verdadera entrevista técnica.",
      styles.text,
    );
    console.log("%c", styles.text);

    // Secret command
    window.hire = () => {
      console.log(
        "%c✅ Excelente decisión. Vamos a construir algo increíble.",
        styles.header,
      );
      console.log("%c📧 pnicolasdevv@gmail.com", styles.accent);
      return "🚀 Let's build.";
    };

    window.stack = () => {
      console.log(
        "%c⚡ Angular · React · Ionic · TypeScript · RxJS · NgRx · Next.js · Vite · Nx",
        styles.accent,
      );
      return "Frontend Engineering";
    };
  }

  // ═══════════════════════════════════════════════════════════
  // SMOOTH SCROLL (enhanced)
  // ═══════════════════════════════════════════════════════════
  function initSmoothScroll() {
    $$('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const targetId = anchor.getAttribute("href");
        if (targetId === "#") return;

        const target = $(targetId);
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });

        // Update URL without triggering scroll
        history.pushState(null, "", targetId);
      });
    });
  }

  // ═══════════════════════════════════════════════════════════
  // CODE BLOCK LINE NUMBERS (visual enhancement)
  // ═══════════════════════════════════════════════════════════
  function initCodeBlockEffects() {
    const codeBlock = $(".hero__code-block");
    if (!codeBlock) return;

    // Subtle parallax on mouse move
    const hero = $("#hero");
    hero.addEventListener("mousemove", (e) => {
      if (window.innerWidth < 1024) return;

      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      codeBlock.style.transform = `
        perspective(1000px) 
        rotateY(${x * 3}deg) 
        rotateX(${-y * 3}deg)
        translateZ(0)
      `;
    });

    hero.addEventListener("mouseleave", () => {
      codeBlock.style.transform = "";
      codeBlock.style.transition = "transform 0.5s ease-out";
      setTimeout(() => {
        codeBlock.style.transition = "";
      }, 500);
    });
  }

  // ═══════════════════════════════════════════════════════════
  // LOADING STATE
  // ═══════════════════════════════════════════════════════════
  function handleLoad() {
    document.body.classList.add("loaded");

    // Initialize i18n first (applies stored language)
    if (window.__i18n) {
      window.__i18n.initI18n();
    }

    // Initialize modules
    initRevealAnimations();
    initNavigation();
    initSoundSystem();
    initTypingAnimation();
    initKeycap();
    initSmoothScroll();
    initCodeBlockEffects();
    initEasterEgg();
  }

  // ═══════════════════════════════════════════════════════════
  // INIT
  // ═══════════════════════════════════════════════════════════
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", handleLoad);
  } else {
    handleLoad();
  }
})();
