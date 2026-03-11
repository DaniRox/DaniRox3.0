<script lang="ts">
    import { onMount } from 'svelte'; // Importamos onMount para manejar eventos del ciclo de vida
    import DaniRoxLogo from "$lib/assets/danirox.png";

    // Estado para controlar si el menú móvil está abierto o cerrado
    let isMenuOpen = false;

    // Función para alternar el menú
    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
    };

    // Función para cerrar el menú
    const closeMenu = () => {
        isMenuOpen = false;
    };

    // --- NUEVA FUNCIONALIDAD: Cerrar al hacer Scroll ---
    onMount(() => {
        const handleScroll = () => {
            // Solo actuar si el menú está abierto para evitar cálculos innecesarios
            if (isMenuOpen) {
                isMenuOpen = false;
            }
        };

        // Agregamos el evento 'scroll' a la ventana
        window.addEventListener('scroll', handleScroll);

        // Función de limpieza: removemos el evento cuando el componente se destruye
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
    // --------------------------------------------------

    // Lista de enlaces para no repetir HTML
    const navLinks = [
        { name: "Inicio", href: "#Hero" },
        { name: "Sobre mí", href: "#About" },
        { name: "Proyectos", href: "#Projects" },
        { name: "Servicios", href: "#Services" },
        { name: "Contacto", href: "#Contact" }
    ];
</script>



<style>
    /* Pequeña animación para que el menú aparezca suavemente */
    .animate-fade-in-down {
        animation: fadeInDown 0.2s ease-out forwards;
    }

    @keyframes fadeInDown {
        from {
        opacity: 0;
        transform: translateY(-10px);
        }
        to {
        opacity: 1;
        transform: translateY(0);
        }
    }
</style>



<header class="bg-brand-75 fixed top-0 w-full z-50 backdrop-blur-md border-b-2 border-brand-50  transition-colors duration-300">
    <nav class="mx-auto px-10 sm:px-16 md:px-20 lg:px-30 xl:px-36 2xl:px-60 h-18 flex items-center justify-between">
        
        <!-- LOGO -->
        <img 
            src={DaniRoxLogo} 
            alt="Logo DaniRox"
            class="w-26 h-auto xl:w-28"
        >

        <!-- MENÚ DESKTOP (Oculto en móvil, visible en md hacia arriba) -->
        <div class="hidden md:flex items-center space-x-8">
        {#each navLinks as link}
            <a 
            href={link.href} 
            class="text-md font-[700] text-brand-800 hover:text-brand-700 transition"
            >
            {link.name}
            </a>
        {/each}
        
        </div>


        <!-- BOTÓN HAMBURGESA (Visible solo en móvil) -->
        <button 
            class="md:hidden text-slate-600 hover:text-brand-700 focus:outline-none p-0"
            on:click={toggleMenu}
            aria-label="Abrir menú"
        >

        
        <!-- Icono Menú -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
        </button>

    </nav>


    <!-- MENÚ MÓVIL  -->
    {#if isMenuOpen}
        <!-- Backdrop oscuro para facilitar cerrar haciendo click fuera -->
        <div class="fixed inset-0 z-40 bg-brand-800/50 md:hidden" on:click={closeMenu}></div>

        <!-- Contenido del Menú Móvil -->
        <div class="absolute top-full left-0 w-full bg-brand-50 border-b border-slate-50 shadow-xl md:hidden z-50 animate-fade-in-down">
        <div class="flex flex-col p-10 space-y-4">
            {#each navLinks as link}
            <a 
                href={link.href} 
                class="text-lg font-[700] text-brand-800 hover:text-brand-700 py-2 border-b border-slate-100 last:border-0 text-end"
                on:click={closeMenu}
            >
                {link.name}
            </a>
            {/each}
            
        </div>
        </div>
    {/if}
</header>