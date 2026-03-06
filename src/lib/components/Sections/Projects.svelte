<script lang="ts">
	import ProjectCard from '$lib/components/Projects/ProjectCard.svelte';

    // Importamos la función y ejecutamos
    import { loadProjects } from '$lib/utils/projects';
    
    // Obtenemos el array de proyectos directamente de los archivos .md
    const projects = loadProjects();
</script>


<section id="Projects" class="w-full relative bg-transparent z-20 py-24 px-10 sm:px-16 md:px-20 lg:px-30 xl:px-36 2xl:px-60">
    <div class="flex flex-col gap-3 xl:gap-4 justify-self-start">
        
        <h2 class="font-serif-bold font-[900] text-5xl md:text-5xl 2xl:text-6xl text-brand-50 text-start">Proyectos Destacados</h2>
        
        <p class="text-2xl md:text-2xl 2xl:text-3xl font-[700] text-brand-800 text-start leading-7">Casos de estudio donde la estrategia de diseño se encuentra con la ejecución técnica.</p>
    </div>
    
    <div class="flex flex-row flex-wrap gap-12 py-10 justify-center items-stretch">
        {#each projects as project}
            <!-- Pasamos los datos exactamente como vienen del .md -->
            <!-- Nota: 'tags' en el .md corresponde a 'technologies' en nuestra tarjeta -->
            <ProjectCard 
                title={project.title}
                rol={project.rol}
                tecnologias={project.tecnologias} 
                descripcion={project.descripcion}
                image={project.image}
                link={`/projects/${project.slug}`} 
            />
        {/each}
    </div>
</section>