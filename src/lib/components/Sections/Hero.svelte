<script lang="ts">
    import Button from '$lib/components/UI/Button.svelte';
    import DaniRoxLogo from "$lib/assets/danirox.png";
    import Graf1 from "$lib/assets/graf1.png";
    import Graf1b from "$lib/assets/graf1b.png";
</script>


<section id="Hero" class="relative overflow-hidden h-screen flex flex-col gap-12 md:gap-6 lg:gap-4 items-center justify-center px-10 sm:px-16 md:px-20 lg:px-30 xl:px-36 2xl:px-60">
    
    <img 
        src="/backgroundS.jpg" 
        alt="Fondo DaniRox" 
        class="absolute inset-0 z-10 z w-[150%] md:w-[280%] h-full -top-1/2 object-cover lg:-top-1/2 -left-1/2 translate-x-1/2 translate-y-1/2 opacity-90"
        loading="eager"
        fetchpriority="high"
    />

    <div class="absolute inset-0 bg-brand-600 -z-0"></div>

    <!-- Contenedor para limitar el ancho de lectura en pantallas grandes -->
    <div class="w-full max-w-2xl flex flex-col justify-start self-start gap-4 md:gap-6 relative z-20 ">
        <!-- Logo DaniRox -->
        <img 
            src={DaniRoxLogo} 
            alt="Logo DaniRox"
            class="w-100 h-auto 2xl:w-140"
        >

        <!-- H1: Título Principal -->
        <h1 class="text-3xl font-sentinel font-medium italic sm:text-4xl md:text-4xl 2xl:text-5xl">
            Diseño para representar.<br>
            Desarrollo para que funcione.
        </h1>

        <!-- H2: Subtítulo -->
        <p class="text-xl font-[400] mx-auto 2xl:text-2xl self-start ml-0">
            Soy <strong class="">Daniela</strong>. Ingeniera Full Stack & Diseñadora UX/UI. <br>
            Transformo ideas complejas en experiencias digitales rentables, <br> unificando estética y arquitectura técnica.
        </p>

    </div>


    <div class="w-full items-center flex flex-col justify-end self-end lg:self-center md:gap-8">

        <img 
            src={Graf1}
            alt=""
            class="w-2xl sm:w-xl sm:-mb-5 md:w-xl absolute z-10 right-10 sm:right-16 md:right-20 lg:invisible md:pb-0 opacity-30 md:opacity-60"
        >

        <img 
            src={Graf1b}
            alt=""
            class="invisible absolute z-10 w-0 lg:visible lg:w-2xl 2xl:w-4xl 2xl:-mb-10 lg:right-30 lg:-mb-5 xl:right-36 2xl:right-60 lg:opacity-70"
        >
        
        <!-- Contenedor de Botones (CTAs) -->
        <div class="flex flex-row sm:flex-row gap-4 justify-end xl:self-end xl:w-1/2 xl:justify-center items-end w-full relative z-20">
        
            <Button variant="primary" href="#Projects">
                ver proyectos
            </Button>

            <!-- USO 2: Botón Secundario con Texto -->
            <Button variant="primary" href="/CV-DaniRox.pdf" target="_blank">
                descargar CV
            </Button>

        </div>
    </div>

</section>