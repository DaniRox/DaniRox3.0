<script lang="ts">
    import { page } from '$app/stores';
</script>


<svelte:head>
    <title>404 - Página no encontrada | DaniRox</title>
</svelte:head>


<section class="min-h-screen flex flex-col items-center justify-center bg-brand-700 px-6">
    

    <div class="bg-brand-100 p-4 xl:p-6 rounded-2xl max-w-xl justify-self-center">
        <div class="flex flex-row justify-between items-center">
            <div class="bg-brand-700 rounded-4xl w-3 h-3 "></div>
            <div class="bg-brand-500 rounded-4xl w-14 h-2 border-2 border-brand-700"></div>
            <div class="bg-brand-700 rounded-4xl w-3 h-3 "></div>
        </div>
        
        <div class="flex flex-col gap-2 p-6 justify-self-center items-center">
                <h1 class="font-serif font-[900] text-9xl text-brand-800">404</h1>
                
                <h2 class="text-2xl font-[600] text-brand-800 mb-6 text-center">
                Ups, parece que nos perdimos en el código.
                </h2>
                
                <p class="text-brand-800 text-center">
                La página que buscas no existe o ha sido movida a otro servidor.
                </p>
                
                <a 
                href="/" 
                class="inline-block px-4 py-2 bg-brand-700 text-brand-50 font-[600] rounded-lg hover:bg-brand-700 transition"
                >
                Volver al Inicio
                </a>
        </div>

        <div class="flex flex-row justify-between items-center">
            <div class="bg-brand-700 rounded-4xl w-3 h-3 "></div>
            <div class="bg-brand-500 rounded-4xl w-14 h-2 border-2 border-brand-700"></div>
            <div class="bg-brand-700 rounded-4xl w-3 h-3 "></div>
        </div>
        
    </div>
</section>