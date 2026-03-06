<script lang="ts">
    import Graf2 from "$lib/assets/graf2.png";

</script>


<section id="About" class="bg-brand-100 py-30 md:py-40 relative overflow-hidden    px-10 sm:px-16 md:px-20 lg:px-30 xl:px-36 2xl:px-60">

    <!-- Contenedor para limitar el ancho de lectura en pantallas grandes -->
    <div class="flex flex-col gap-12">

        <!-- H1: Título Principal -->
        <h2 class="flex flex-col gap-1">
            <span class="flex flex-col md:flex-row flex-wrap md:gap-2 justify-end">
                <!-- gap-2 añade espacio entre los spans -->
                <span class="font-sentinel italic text-end text-xl sm:text-xl md:text-2xl 2xl:text-3xl content-end text-brand-800">No soy solo</span> 
                <span class="font-serif-bold text-end font-[900] text-5xl md:text-5xl 2xl:text-6xl text-brand-800">
                    Desarrolladora.
                </span>
            </span>
            
            <span class="flex flex-col md:flex-row flex-wrap md:gap-2 justify-end">
                <!-- gap-2 añade espacio entre los spans -->
                <span class="font-sentinel italic text-end text-2xl sm:text-xl md:text-2xl 2xl:text-3xl content-end text-brand-800">No soy solo</span> 
                <span class="font-serif-bold text-end font-[900] text-5xl md:text-5xl 2xl:text-6xl text-brand-800">
                    Diseñadora.
                </span>
            </span>
        </h2>


        <!-- Textos -->
        <div class="flex flex-col gap-5 md:max-w-1/2 self-end z-20">
            <p class="text-lg 2xl:text-xl text-brand-800">
                El 90% de los proyectos web pierden su valor en la traducción entre diseño y código. Yo cierzo esa brecha. Con más de 10 años en diseño digital y 3 años en ingeniería de software, ofrezco un flujo de trabajo integral ("No-Handoff"). Esto significa que entiendo tu negocio, diseño la solución en Figma y la implemento pixel-perfect en código.
            </p>
            <p class="text-2xl font-[800] text-brand-500 uppercase">
                El Resultado: Sin malentendidos, sin intermediarios, solo un producto digital que funciona y se ve increíble desde el primer día.
            </p>
            <p class="text-lg md:text-xl text-brand-800">
                Mi objetivo es que tu marca no solo compita, sino que se convierta en un referente. Combino diseño vanguardista, desarrollo técnico de excelencia y un toque de cercanía que hace que todo el proceso sea una experiencia increíble.
            </p>
        </div>
        
    </div>


    <img 
        src={Graf2}
        alt=""
        class="absolute z-10 w-2xl sm:w-xl left-10 sm:left-16 md:left-20 opacity-60 md:opacity-80 lg:opacity-90 md:mb-7 xl:mb-0  items-center flex flex-col justify-end self-end md:gap-8"
    >

</section>