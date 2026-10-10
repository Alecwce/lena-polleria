# La Leña — Pollería & Brasas (Astro 7)

Sitio web oficial de **La Leña**, optimizado para pre-renderizado 100% estático, alta seguridad, accesibilidad AA, y animaciones avanzadas en el cliente usando GSAP y CSS puro.

---

## 🛠️ Stack Tecnológico

- **Core**: [Astro 7](https://astro.build/) (Static Output)
- **CSS**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animaciones**: [GSAP](https://greensock.com/gsap/) (Importado dinámicamente) + CSS Keyframes
- **Pipeline de Desarrollo (Dev)**: [Hono](https://hono.dev/) (`src/fetch.ts`)
- **Type Safety**: TypeScript Strict (`"strict": true`)
- **Hosting**: [Cloudflare Pages](https://pages.cloudflare.com/)

---

## 📁 Estructura del Proyecto

```text
src/
├── layouts/
│   └── BaseLayout.astro        # Layout HTML5 base con SEO, JSON-LD Schema y ClientRouter
├── components/
│   └── sections/               # Secciones de la página principal modularizadas
│       ├── Navbar.astro
│       ├── Hero.astro
│       ├── SocialProof.astro
│       ├── Combos.astro
│       ├── Carta.astro
│       ├── About.astro
│       ├── Delivery.astro
│       ├── Local.astro
│       └── Footer.astro
├── pages/
│   ├── index.astro             # Página de inicio
│   └── 404.astro               # Página de error
├── data/
│   └── menu.ts                 # Datos estructurados y tipados de la carta y combos
├── styles/
│   └── global.css              # Importación de Tailwind CSS v4 y animaciones CSS
├── assets/                     # Imágenes optimizadas para el componente <Picture />
├── fetch.ts                    # Pipeline Hono de desarrollo
└── middleware/
    └── security.ts             # Headers de seguridad de Hono para el dev server
public/
├── favicon.svg                 # Favicon del sitio (flame emoji)
├── robots.txt                  # Archivo de exclusión de rastreo de buscadores
├── _headers                    # Configuración de headers de seguridad para producción en Cloudflare
└── _redirects                  # Configuración de redirecciones en Cloudflare
```

---

## ⚡ Comandos del Proyecto

Este proyecto utiliza **pnpm** como gestor de paquetes.

| Comando | Descripción |
| :--- | :--- |
| `pnpm install` | Instala las dependencias del proyecto. |
| `pnpm dev` | Inicia el servidor de desarrollo local con el pipeline de Hono. |
| `pnpm build` | Compila el sitio estático en la carpeta `dist/`. |
| `pnpm preview` | Previsualiza localmente el build compilado. |
| `pnpm check` | Realiza validaciones de tipos TypeScript y validación de sintaxis de Astro. |
| `pnpm lint` | Analiza el código ultrarrápido con Biome (`biome check .`). |
| `pnpm format` | Formatea el código con Biome (`biome format --write .`). |
| `pnpm deploy` | Compila el proyecto y realiza el despliegue a Cloudflare Pages mediante Wrangler CLI. |

---

## 🔒 Seguridad (CSP & Headers)

- **Desarrollo**: Servido mediante el pipeline Hono en `src/fetch.ts` a través del middleware inyectado en `src/middleware/security.ts`.
- **Producción**: Cloudflare Pages lee el archivo `public/_headers` y sirve las reglas correspondientes de forma nativa a nivel del CDN.

### Reglas de CSP Implementadas:
- `script-src 'self' 'unsafe-inline'`: Requerido por Astro para inyectar scripts inline para View Transitions y bundles locales.
- `font-src 'self' https://fonts.gstatic.com https://cdn.fontshare.com data:`: Permite la descarga de tipografías desde Fontshare/Google Fonts.
- `style-src 'self' 'unsafe-inline' https://api.fontshare.com`: Permite estilos inline de Tailwind y las hojas de estilos externas de Fontshare.

---

## 🚀 Despliegue en Cloudflare Pages

### Opción A — Despliegue mediante CLI (Wrangler)
Para realizar el despliegue desde la terminal de forma manual:
```bash
pnpm deploy
```
*Asegúrate de haber iniciado sesión con `wrangler login` previamente.*

### Opción B — CI/CD automático con GitHub
1. Conecta tu repositorio en el panel de control de Cloudflare (Dashboard → Pages → Create a project → Connect to Git).
2. Modifica la configuración de compilación de la siguiente forma:
   - **Build Command**: `pnpm build`
   - **Output Directory**: `dist`
   - **Root Directory**: `/`
3. Agrega la siguiente variable de entorno en la configuración de la build:
   - `NODE_VERSION=22`
4. Cada commit que empujes a la rama `main` compilará y desplegará automáticamente.

---

## ♿ Accesibilidad (Normas AA)

El sitio ha sido refinado con características que garantizan la compatibilidad con tecnologías de asistencia:
1. **Enlace skip-to-content**: Permite a usuarios de teclado saltarse directamente al contenido principal (`#main-content`).
2. **Ocultación de elementos decorativos**: Los canvas de humo/brasas, animaciones SVG y gráficos del mapa llevan `aria-hidden="true"`.
3. **Etiquetas descriptivas (`aria-label`)**: Añadidas a elementos interactivos ambiguos como enlaces a redes sociales y botones de marcado de teléfono.
4. **Optimización de imágenes**: Todas las imágenes se sirven mediante `<Picture />` con atributos `alt` descriptivos para lectores de pantalla.
