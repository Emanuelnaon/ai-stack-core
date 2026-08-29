import { type NextRequest } from 'next/server';
import { updateSession } from '@/src/lib/supabase/middleware';

export async function middleware(request: NextRequest) {
    // 1. Refrescamos la sesión de Supabase
    const response = await updateSession(request);

    // 2. Cabeceras estándar de protección (Mozilla Observatory "A")
    response.headers.set('X-Frame-Options', 'DENY'); // Más estricto que SAMEORIGIN, ideal si no usas iframes
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.headers.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');

    // HSTS: Fuerza HTTPS estricto, vital para e-commerce
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');

    // 3. CSP Agnóstico y compatible con Next.js + Analytics + Supabase genérico
    response.headers.set(
        'Content-Security-Policy',
        [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
            "style-src 'self' 'unsafe-inline'",
            // Uso de *.supabase.co para que la plantilla funcione en cualquier proyecto nuevo
            "img-src 'self' data: blob: https://*.supabase.co https://www.google-analytics.com https://*.googletagmanager.com",
            "connect-src 'self' https://*.supabase.co wss://*.supabase.co https://wa.me https://www.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com",
            "font-src 'self' data:",
            "object-src 'none'",
            "base-uri 'self'",
            "form-action 'self'",
            "frame-ancestors 'none'",
            'upgrade-insecure-requests',
        ].join('; '),
    );

    return response;
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
};
