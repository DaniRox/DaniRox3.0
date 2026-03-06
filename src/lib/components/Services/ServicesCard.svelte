<script lang="ts">
    import Diagonals from "$lib/assets/diagonals.png";

    // DEFINICIÓN DE PROPS
    export let title: string;
    export let description: string;
    export let details: string;
</script>


<article class="relative w-94 xl:max-w-76 2xl:max-w-90 overflow-hidden backdrop-blur-sm flex flex-col gap-4 bg-brand-75 py-5 px-8 rounded-2xl border-2 border-brand-50">
    <div class="bg-brand-700 rounded-4xl w-full h-1 "></div>
    
    <div class="flex flex-col gap-3 py-2">
        <h3 class="text-2xl font-[700] text-brand-800">{title}</h3>
        <p class="text-lg lg:text-base 2xl:text-lg text-brand-800 leading-6">{description}</p>
        <p class="text-lg text-brand-800 leading-6">{details}</p>
    </div>
    
    <img 
        src={Diagonals} 
        alt=""
        class="w-[150%] max-w-none relative mt-auto mx-auto -ml-10"
    >
</article>