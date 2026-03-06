import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // 1. Le decimos a SvelteKit que también maneje archivos .md
    extensions: ['.svelte', '.md', '.svx'],
    
    // 2. Configuramos mdsvex para que procese archivos .md y .svx
    preprocess: [
        mdsvex({
            extensions: ['.md', '.svx']
        })
    ],

    kit: {
        // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
        // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
        // See https://svelte.dev/docs/kit/adapters for more information about adapters.
        adapter: adapter()
    }
};

export default config;