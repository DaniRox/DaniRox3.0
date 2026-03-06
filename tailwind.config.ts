import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";

const config: Config = {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        extend: {
            // 1. Definir la paleta de colores de tu marca
            colors: {
                brand: {
                50: "#FFFEF7", // Color más claro
                100: "#E7E9DC",
                500: "#F6943F", 
                600: "#888BD7",
                700: "#393761",
                800: "#08163A",
                900: "#080F0F", // Color más oscuro
                }
            },
            // 2. Definir las tipografías
            fontFamily: {
            },
            // 3. Extender espaciados si necesitas layouts muy específicos
            spacing: {
                "128": "32rem",
            }
        }
    },

    plugins: [
        typography,
        forms
    ]
};

export default config;