<script lang="ts">
    import ServicesCard from "../Services/ServicesCard.svelte";
</script>


<section id="Services" class="w-full relative z-20 py-12 lg:py-30 bg-transparent px-10 sm:px-16 md:px-20 lg:px-30 xl:px-36 2xl:px-60">
    <div class="flex flex-col gap-3 2xl:gap-4 justify-self-end">
        
        <h2 class="font-serif-bold font-[900] text-5xl md:text-5xl 2xl:text-6xl text-brand-800 text-end">¿Cómo puedo ayudarte?</h2>
        
        <p class="text-xl md:text-2xl 2xl:text-3xl font-[600] text-brand-50 text-end">Soluciones integrales para tu presencia digital, <br>
            desde el concepto estratégico hasta el código en producción.</p>
    </div>
    
    <div class="flex flex-row flex-wrap gap-12 xl:gap-14 py-12 justify-center">
        <ServicesCard 
            title="Desarrollo Full Stack" 
            description="No solo escribo código, construyo arquitecturas escalables. Desde plataformas SaaS complejas hasta e-commerce, desarrollo soluciones pensadas para crecer contigo, integrando cloud y seguridad desde el día uno."
        />

        <ServicesCard 
            title="Diseño UX/UI & Branding" 
            description="Transformo la esencia de tu marca en un sistema visual coherente. Diseño interfaces en Figma que no solo se ven bien, sino que funcionan, asegurando que cada pixel de código respete la identidad que construimos juntos."
        />
        
        <ServicesCard 
            title="Auditoría Técnica & Optimización" 
            description="Diagnóstico preciso para sitios que frenan tu negocio. Optimizo velocidad, corrijo errores móviles y mejoro tu SEO técnico para convertir visitantes en clientes y mejorar tu posicionamiento en Google."
            details=""
        />
    </div>
</section>