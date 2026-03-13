<script lang="ts">
    
    // Definimos la forma de los datos
    export let title: string;
    export let rol: string;
    export let tecnologias: string;
    export let descripcion: string;
    export let image: string;
    export let link: string;
</script>


<!-- Article para semántica de contenido independiente -->
<article class="w-94 xl:max-w-78 2xl:max-w-84 bg-brand-75 backdrop-blur-sm rounded-2xl overflow-hidden flex flex-col px-3 pt-3 pb-4 justify-start">
    
    <!-- 1. Imagen -->
    <div class="relative m-2 overflow-hidden h-40 bg-slate-100 rounded-t-xl content-stretch">
        <img 
        src={image} 
        alt={title} 
        class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
    </div>

    <!-- 2. Contenido -->
    <div class="absolute w-88 xl:max-w-72 2xl:max-w-78 flex flex-row justify-between pt-60">
        <div class="bg-brand-500 rounded-4xl h-30 w-2 border-2 border-brand-700"></div>

        <div class="bg-brand-500 rounded-4xl h-30 w-2 border-2 border-brand-700"></div>
    </div>
    

    <div class="flex flex-col gap-2  px-4 items-center pb-3 h-fit">
        
        <h3 class="text-2xl font-[700] text-brand-700 leading-7 self-start">
        {title}
        </h3>

        <p class="text-brand-800 leading-6 text-lg lg:text-base self-start">
        {rol}
        </p>

        <p class="text-brand-800 leading-6 text-lg lg:text-base self-start">
        {tecnologias}
        </p>

        <p class="text-brand-800 leading-6 text-lg lg:text-base self-start mb-4">
        {@html descripcion}
        </p>

    </div>

    <!--
    BOTON PARA ABRIR LA PAGINA DE PROYECTO INDIVIDUAL
    <a 
        href={link} 
        class="inline-flex items-center justify-center self-end px-6 py-1 text-md font-[700] text-brand-800 bg-brand-50 rounded-4xl hover:bg-brand-300 transition-colors mt-auto"
        >
        Ver Detalles
    </a>
    -->

</article>