Mi Portafolio Personal
Descripción:Sitio web personal y portafolio de proyectos para mostrar mis habilidades técnicas, experiencia previa y buenas prácticas en desarrollo web moderno.

🛠 Stack Tecnológico
Framework: SvelteKit – Routing, SSR y estructura de la aplicación.
Lenguaje: TypeScript – Tipado estático para mayor seguridad y calidad de código.
Estilos: Tailwind CSS + plugins:
@tailwindcss/typography – Estilos para contenido de texto (Markdown, blog posts, descripciones).
@tailwindcss/forms – Estilos base para formularios.
Contenido: Markdown + mdsvex – Proyectos y textos en archivos .md con frontmatter.
Despliegue: Vercel – Hosting + CI/CD conectado a GitHub.
🚀 Instalación y Uso
Requisitos previos
Node.js (versión recomendada: 20 o superior)
npm / yarn / pnpm (este proyecto usa npm por defecto)
Pasos para ejecutar el proyecto en local
Clona el repositorio:
git clone <URL_DEL_REPO>cd <CARPETA_DEL_PROYECTO>
Instala las dependencias:
bash

npm install
Ejecuta el servidor de desarrollo:
bash

npm run dev
Abre el navegador en http://localhost:5173.

📂 Estructura del Proyecto
src/routes/ – Páginas y rutas de la aplicación.
src/lib/ – Componentes y lógica compartida.
static/ – Archivos estáticos (imágenes, favicon, etc.).
docs/ – Documentación adicional del proyecto (arquitectura, decisiones, notas).
CHANGELOG.md – Registro de cambios por versión.
package.json – Dependencias y scripts del proyecto.

📚 Documentación
Arquitectura y decisiones técnicas ("./docs/01-arquitectura.md")
Registro de cambios ("./CHANGELOG.md")

🧩 Características (Planificado / En progreso)
 Página de inicio con presentación breve.
 Sección de proyectos (cargados desde Markdown).
 Página de contacto con formulario.
 Optimización SEO básica.
 Tests (unitarios y/o E2E).

📄 Licencia
Este proyecto es de uso personal. Si tomas inspiración o código de aquí, se agradece mención.