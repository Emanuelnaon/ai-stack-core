# Skill: Generar Scaffolding de Feature

# Contexto: Requiero estructurar un nuevo módulo en la aplicación.

## Instrucciones de Ejecución para la IA

1. Lee las directivas en `02-arquitectura-features.md`[cite: 18].
2. Crea el directorio `src/features/[nombre-del-feature]` e inicializa las subcarpetas obligatorias: `components`, `hooks`, `api`, `types`, `utils`[cite: 18].
3. Crea el archivo `types/index.ts` declarando las interfaces base (usa `unknown` si hay dudas, prohíbido `any`)[cite: 18].
4. **OBLIGATORIO:** Crea un archivo `index.ts` en la raíz del feature exportando únicamente lo que será público.
5. Genera un Server Component principal (Next.js 15) en `components/`. Implementa una interfaz de contenedor básica priorizando Mobile First[cite: 18].
6. No redactes explicaciones ni saludos. Genera los archivos y devuelve un listado confirmando las rutas[cite: 18].
