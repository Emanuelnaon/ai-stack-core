# Skill: Generar Migración RLS y Server Action

# Contexto: Requiero agregar una nueva tabla a Supabase y su respectivo Data Fetching.

## Instrucciones de Ejecución para la IA

1. Lee estrictamente `03-supabase-patterns.md`[cite: 20].
2. Genera un bloque SQL DDL que incluya:
    - Creación de la tabla con `user_id` (UUID) vinculada a `auth.users`[cite: 20].
    - `ALTER TABLE [tabla] ENABLE ROW LEVEL SECURITY;`[cite: 20].
    - 4 Políticas granulares (SELECT, INSERT, UPDATE, DELETE) que validen `auth.uid() = user_id`[cite: 20].
3. Genera un Server Action en `src/features/[feature]/api/queries.ts`[cite: 20]. Nombra la función con el prefijo `action`.
4. En el Server Action, inicializa el cliente asegurando el uso de `await cookies()`.
5. Extrae las tuplas `{ data, error }` y retorna datos tipados mediante `Database['public']['Tables'][...]`[cite: 20].
6. Entrega únicamente el SQL y el TypeScript[cite: 20].
