'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function ErrorBoundary({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    useEffect(() => {
        // Aquí podrías integrar Sentry o tu logger preferido en el futuro
        console.error('Error capturado por el Boundary:', error);
    }, [error]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
            <div className="flex flex-col items-center max-w-md space-y-6 border border-border p-8 rounded-lg shadow-sm">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Algo salió mal</h1>
                    <p className="text-sm text-foreground/70">
                        Ocurrió un error inesperado al procesar tu solicitud. Nuestro equipo ha sido notificado.
                    </p>
                </div>

                <div className="flex flex-col w-full gap-3 sm:flex-row sm:justify-center">
                    <button
                        onClick={() => reset()}
                        className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-transparent px-6 text-sm font-medium text-foreground transition-colors hover:bg-border/50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                        Reintentar
                    </button>

                    <Link
                        href="/"
                        className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-background transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                        Ir al inicio
                    </Link>
                </div>
            </div>
        </main>
    );
}
