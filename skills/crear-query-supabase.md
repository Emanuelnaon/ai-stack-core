# Skill: Generar Migración RLS y Server Action
# Contexto: Requiero agregar una nueva tabla a Supabase y su respectivo Data Fetching.

## Instrucciones de Ejecución para la IA
1. Lee estrictamente `.clinerules/03-supabase-patterns.md`.
2. Genera un bloque de código SQL para la migración DDL que incluya:
   - Creación de la tabla con `user_id` (UUID) vinculada a `auth.users`.
   - La sentencia `ALTER TABLE [tabla] ENABLE ROW LEVEL SECURITY;`.
   - 4 Políticas granulares separadas (SELECT, INSERT, UPDATE, DELETE) que validen `auth.uid() = user_id`.
3. Genera un bloque de código TypeScript (Server Action) en `src/features/[feature]/api/queries.ts` importando el patrón de inicialización.
4. Asegúrate de extraer las tuplas `{ data, error }` y retornar datos con el tipado exacto de `Database['public']['Tables'][...]`.
5. Omite cualquier texto introductorio o de cierre. Entrega únicamente el SQL y el TypeScript.