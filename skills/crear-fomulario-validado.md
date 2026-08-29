# Skill: Generar Formulario Validado (RHF + Zod)

# Contexto: Requiero un componente de formulario del lado del cliente con validación robusta.

## Instrucciones de Ejecución para la IA

1. Implementa el formulario usando `react-hook-form` y `@hookform/resolvers/zod`[cite: 19].
2. Define un esquema de validación estricto con `zod`[cite: 19].
3. El componente debe tener la directiva `'use client'`[cite: 19].
4. Tipa inferencialmente los datos: `type FormData = z.infer<typeof schema>;`[cite: 19].
5. Maneja los estados de error visualmente bajo cada input y bloquea el botón con `isSubmitting`[cite: 19].
6. Prepara el handler del formulario para consumir un Server Action (Next.js 15).
7. Omite saludos o explicaciones; devuelve únicamente el código funcional[cite: 19].
