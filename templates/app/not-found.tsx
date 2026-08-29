import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
            <div className="flex flex-col items-center max-w-md space-y-6">
                <h1 className="text-8xl font-black text-primary tracking-tighter">404</h1>
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground">Ruta no encontrada</h2>
                    <p className="text-sm text-foreground/70">
                        El producto o la página que buscas ya no está disponible o ha sido movida.
                    </p>
                </div>

                <Link
                    href="/"
                    className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-background transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                    Volver al catálogo
                </Link>
            </div>
        </main>
    );
}
