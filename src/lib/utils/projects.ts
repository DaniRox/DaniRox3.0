// 1. Importamos un tipo para tener ayuda de TypeScript
export interface Project {
    title: string;
    rol: string;
    tecnologias: string;
    descripcion: string;
    image: string;
    slug: string;
    date: string;
    
    // Usamos 'any' aquí porque mdsvex genera componentes dinámicos complejos.
    // Para evitar complicar el tipo en este archivo de utilidad, usamos any.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content: any; 
}

// 2. Usamos 'import.meta.glob' de Vite para buscar archivos automáticamente
// { eager: true } significa "cárgalos ya mismo".
const modules = import.meta.glob('/src/content/projects/*.md', { eager: true });

// 3. Función para procesar esos archivos crudos
export const loadProjects = (): Project[] => {
    const projects: Project[] = [];

    // Iteramos sobre cada archivo encontrado
    for (const path in modules) {
        const file = modules[path];
        
        // mdsvex pone los metadatos en 'metadata' y el componente en 'default'.
        // Usamos 'as any' para acceder a estas propiedades dinámicas sin errores estrictos de TS.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { metadata, default: component } = file as any;

        // Aseguramos que tenga los datos mínimos
        if (metadata) {
            projects.push({
                title: metadata.title,
                rol: metadata.rol,
                tecnologias: metadata.tecnologias,
                descripcion: metadata.descripcion,
                image: metadata.image,
                slug: metadata.slug || path.split('/').pop()?.replace('.md', '') || '',
                date: metadata.date,
                content: component 
            });
        }
    }

    // 4. Ordenamos los proyectos (más recientes primero)
    return projects.sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
};