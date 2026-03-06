<script lang="ts">
    import Hero from '$lib/components/Sections/Hero.svelte';
    import About from '$lib/components/Sections/About.svelte';
    import Projects from '$lib/components/Sections/Projects.svelte';
    import Services from '$lib/components/Sections/Services.svelte';
    import Contact from '$lib/components/Sections/Contact.svelte';
    import BG from "$lib/assets/backgroundL.jpg";

</script>

<svelte:head>
    <title>DaniRox</title>
    <meta name="description" content="DaniRox. Ingeniera Full Stack & UX/UI Strategy." />
</svelte:head>

<!-- Renderizamos el componente Hero -->


<img 
    src={BG} 
    alt="Fondo" 
    class="fixed top-0 left-0 w-full h-full max-h-none object-cover -z-10"
/>

<Hero />
<About />

<Projects />
<Services />
<Contact />