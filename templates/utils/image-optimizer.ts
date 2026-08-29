import imageCompression from 'browser-image-compression';

export interface CompressionOptions {
    maxSizeMB?: number;
    maxWidthOrHeight?: number;
    useWebWorker?: boolean;
    fileType?: string;
}

/**
 * Comprime y convierte una imagen en el cliente (browser) antes de subirla al bucket.
 * Diseñado para evitar sobrecargar Supabase Storage y garantizar carga rápida en móviles.
 */
export async function optimizeImage(file: File, options?: CompressionOptions): Promise<File> {
    // Si no es una imagen, la retorna tal cual
    if (!file.type.startsWith('image/')) {
        return file;
    }

    const defaultOptions = {
        maxSizeMB: 0.4, // Máximo 400 KB por defecto
        maxWidthOrHeight: 1200, // Resolución estándar web óptima para catálogos
        useWebWorker: true, // Procesa en segundo plano sin congelar la UI
        fileType: 'image/webp', // Convierte automáticamente a WebP para máxima ligereza
        ...options,
    };

    try {
        const compressedFile = await imageCompression(file, defaultOptions);

        // Renombra la extensión a .webp para mantener consistencia
        const originalNameWithoutExt = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
        const newFileName = `${originalNameWithoutExt}.webp`;

        return new File([compressedFile], newFileName, {
            type: 'image/webp',
            lastModified: Date.now(),
        });
    } catch (error) {
        console.error('Error al comprimir la imagen en el cliente:', error);
        // Fallback: si falla la compresión, devuelve el archivo original para no romper el flujo
        return file;
    }
}
