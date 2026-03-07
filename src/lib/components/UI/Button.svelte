<script lang="ts">
    // Definimos qué propiedades (props) puede recibir este componente
    interface Props {
        variant?: 'primary' | 'secondary'; // Tipo de botón
        href?: string; 
        target?: string;
    }

    // Desestructuramos las props. Usamos 'export let' que es la forma clásica y fácil de entender.
    export let variant: 'primary' | 'secondary' = 'primary';
    export let href: string | undefined = undefined;
    export let target: string = '_self';

    // Clases base que SIEMPRE tendrá el botón
    const baseClasses = "rounded-lg transition transform hover:-translate-y-0.5 text-center px-5 py-2 w-auto sm:w-auto";

    // Estilos específicos según la variante
    const variantClasses = {
        primary: "bg-brand-800 hover:bg-brand-700 text-lg text-brand-500 font-[600] shadow-lg hover:shadow-xl 2xl:text-xl select-none",
        secondary: "bg-brand-100 border border-brand-200 hover:border-brand-300 text-brand-700 hover:text-brand-900 hover:bg-slate-50 select-none"
    };
</script>


<!-- Lógica condicional: Si existe 'href' es un enlace, si no es un botón -->
{#if href}
    <a {href} {target} class="{baseClasses} {variantClasses[variant]}">
        <slot /> <!-- Aquí se inyectará el texto que escribas afuera -->
    </a>
    {:else}
    <button class="{baseClasses} {variantClasses[variant]}">
        <slot /> <!-- Aquí se inyectará el texto que escribas afuera -->
    </button>
{/if}