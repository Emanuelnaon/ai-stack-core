# Skill: Generar Scaffolding de Feature
# Contexto: Requiero estructurar un nuevo módulo en la aplicación.

## Instrucciones de Ejecución para la IA
1. Lee las directivas en `.clinerules/02-arquitectura-features.md`.
2. Crea el directorio `src/features/[nombre-del-feature]` e inicializa las subcarpetas obligatorias: `components`, `hooks`, `api`, `types`, `utils`.
3. Crea el archivo `types/index.ts` declarando las interfaces base para este dominio (usa `unknown` si no tienes contexto exacto, prohíbido `any`).
4. Genera un Server Component principal (Wrapper) en la carpeta `components/`. Implementa una interfaz de contenedor básica aplicando clases de Tailwind bajo la premisa Mobile First.
5. No redactes explicaciones ni saludos. Genera los archivos y devuelve un listado confirmando las rutas creadas.