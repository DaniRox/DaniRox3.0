import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    const response = await resolve(event);

    // 1. Content Security Policy (CSP)
    // Define qué recursos (scripts, estilos, imágenes) pueden cargarse.
    const csp = `
        default-src 'self';
        script-src 'self' 'unsafe-inline' https://use.typekit.net https://www.googletagmanager.com;
        style-src 'self' 'unsafe-inline' https://use.typekit.net https://fonts.googleapis.com;
        img-src 'self' data: https: blob:;
        font-src 'self' https://use.typekit.net https://fonts.gstatic.com https://fonts.googleapis.com;
        connect-src 'self';
        frame-ancestors 'none';
    `;

    // 2. Otros Headers de Seguridad
    response.headers.set('Content-Security-Policy', csp.replace(/\s{2,}/g, ' ').trim());
    response.headers.set('X-Content-Type-Options', 'nosniff'); // Evita que el navegador adivine tipos de archivo
    response.headers.set('X-Frame-Options', 'DENY'); // Evita que tu web se cargue dentro de un iframe (Clickjacking)
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin'); // Controla qué info envías al navegar
    response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()'); // Bloquea permisos innecesarios

    return response;
};