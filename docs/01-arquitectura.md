Arquitectura del proyecto
Visión general
Este es un sitio de portafolio personal construido como una SPA/SSR con:

SvelteKit: framework principal para routing, carga de datos y renderizado.
TypeScript: tipado estático en el código y en los componentes de Svelte (lang="ts").
Tailwind CSS: estilos con utilidades, más plugins de tipografía y formularios.
mdsvex: permite usar Markdown como contenido dentro de Svelte (ideal para proyectos y posts).
Vercel: despliegue automático desde GitHub.
Estructura de carpetas (resumen)
src/routes/
Define las páginas del sitio siguiendo el sistema de routing de archivos de SvelteKit.
src/lib/
Componentes reutilizables, utilidades, tipos, etc.
static/
Assets públicos accesibles directamente (imágenes, favicon, robots.txt, etc.).
docs/
Documentación técnica del proyecto (este archivo, decisiones, notas de desarrollo).
Flujo de trabajo típico
Desarrollo local con npm run dev.
Commits con mensajes convencionales (feat:, fix:, docs:, etc.).
Push a GitHub.
Despliegue automático en Vercel al hacer push a la rama principal.
Decisiones clave (por qué este stack)
SvelteKit: coincide con la experiencia en el CV y es muy rápido para este tipo de sitio.
TypeScript: demuestra buenas prácticas y ayuda a evitar errores.
Tailwind CSS: estándar actual, rápido de maquetar y fácil de mantener.
Markdown + mdsvex: suficiente para un portafolio sin necesidad de base de datos.
Vercel: integración directa con GitHub y despliegue gratuito para uso personal.
PASO 3 – Crear docs/02-decisiones.md

En la misma carpeta docs/, crea 02-decisiones.md:

Decisiones de diseño y tecnologías
Stack tecnológico
Framework: SvelteKit
Lenguaje: TypeScript
Estilos: Tailwind CSS + plugins (typography, forms)
Contenido: Markdown + mdsvex
Hosting: Vercel
¿Por qué SvelteKit?
Ya se usó en un proyecto previo (Marketplace), así que usarlo en el portafolio valida y refuerza esa experiencia.
Ofrece SSR, routing basado en archivos y gran rendimiento out-of-the-box.
¿Por qué TypeScript?
Añade seguridad de tipos, mejor autocompletado y menos errores en tiempo de desarrollo.
Demuestra buenas prácticas de código, tal como se menciona en el CV.
¿Por qué Tailwind CSS?
Es el estándar actual en muchos equipos y productos.
Permite maquetar muy rápido a partir de un diseño en Figma o de referencia.
Los plugins de typography y forms facilitan el styling de textos y formularios.
¿Por qué Markdown + mdsvex?
Para un portafolio personal no es necesario una base de datos.
Los archivos .md con frontmatter son:
Fáciles de editar.
Versionables en Git.
Rápidos de procesar.
¿Por qué Vercel?
Integración nativa con GitHub: cada git push dispara un nuevo despliegue.
Optimizado para frameworks como SvelteKit.
Plan gratuito suficiente para un portafolio personal.