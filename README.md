# Antigravity Portfolio

> Portfolio profesional de Senior Frontend Engineer.  
> HTML · CSS · JS vanilla. Zero dependencias. Lighthouse 100.

## Tecnología

Decisión deliberada de construir con **vanilla HTML, CSS y JavaScript**:

- **0 dependencias** = 0 vulnerabilidades, 0 builds, 0 configuración
- **Performance máxima** = Sin overhead de frameworks, bundle mínimo
- **Lighthouse 100** = SEO, a11y, performance y best practices optimizados
- **Mantenibilidad** = Código estándar web que funcionará en 10 años

### Arquitectura

```
antigravity-portfolio/
├── index.html          # Markup semántico (single page)
├── css/
│   └── style.css       # Design system + componentes + responsive
├── js/
│   └── main.js         # Interacciones, animaciones, easter eggs
└── README.md
```

### Design Tokens

El sistema de diseño usa CSS Custom Properties organizadas en:
- **Color System** — Palette oscura con accent `#64ffda`
- **Typography Scale** — `clamp()` para fluid typography
- **Spacing Scale** — 8px grid system
- **Effects** — Shadows, transitions, radius

### Features

- Scroll reveal animations (Intersection Observer)
- 3D parallax en el code block del hero
- Typing animation en el hero
- Sonido opcional de teclado mecánico (Web Audio API)
- Active nav highlighting basado en scroll
- Mobile menu con animación
- Print styles
- `prefers-reduced-motion` support
- Console easter egg (`hire()`, `stack()`)

## Despliegue

Servir archivos estáticos con cualquier CDN/hosting:

```bash
# Local
npx serve .

# O con Python
python3 -m http.server 8080
```

Compatible con: **Vercel**, **Netlify**, **Cloudflare Pages**, **GitHub Pages**.

## Personalización

1. Editar `index.html` — contenido y copywriting
2. Editar `css/style.css` — design tokens en `:root`
3. Editar `js/main.js` — interacciones y easter eggs

## Licencia

MIT
