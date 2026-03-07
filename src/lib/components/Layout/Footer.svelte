<script lang="ts">
    import DaniRoxLogo from "$lib/assets/danirox.png";
    import LinkedInIcon from "$lib/assets/LinkedInIcon.png";
    import WhatsAppIcon from "$lib/assets/WhatsAppIcon.png";
    import InstagramIcon from "$lib/assets/InstagramIcon.png";

</script>



<footer class="bg-brand-75 relative bottom-0 w-full z-50 backdrop-blur-md border-t-2 px-10 sm:px-16 md:px-20 lg:px-30 xl:px-36 2xl:px-60 py-6 rounded-t-4xl border-brand-50  transition-colors duration-300 flex flex-col gap-5 lg:gap-10">
    <div class="flex flex-col gap-5 lg:flex-row lg:justify-between">
        <div class="flex flex-col gap-0.5">
            <!-- LOGO -->
            <img 
                src={DaniRoxLogo} 
                alt="Logo DaniRox"
                class="w-28 h-auto xl:w-30"
            >
            <p class="text-md font-sentinel font-medium italic">Ingeniera Full Stack & UX/UI Strategy</p>
        </div>


        <div class="flex flex-row gap-10 justify-center">
            <a href="https://www.linkedin.com/in/danirox/" class="flex items-center space-x-2 hover:text-brand-600">
                <img 
                    src={LinkedInIcon} 
                    alt="Icono LinkedIn"
                    class="w-6 h-6 lg:w-7 lg:h-7"
                >
            </a>

            <a href="https://wa.me/542664637751?text=Hola%20Dani%2C%20me%20gustaría%20consultar%20por%20un%20proyecto." class="flex items-center space-x-2 hover:text-brand-600">
                <img 
                    src={WhatsAppIcon} 
                    alt="Icono WhatsAppIcon"
                    class="w-6 h-6 lg:w-7 lg:h-7"
                >
            </a>

            <!--
            <a href="..." class="flex items-center space-x-2 hover:text-brand-600">
                <img 
                    src={InstragramIcon} 
                    alt="Icono InstragramIcon"
                    class="w-5 h-5"
                >
            </a>
            -->
        </div>
    </div>

    <p class="text-sm text-center text-md">© 2026 Daniela Escobar. Todos los derechos reservados.</p>
</footer>
