# Skill: Generar Formulario Validado (RHF + Zod)
# Contexto: Requiero un componente de formulario del lado del cliente con validación robusta.

## Instrucciones de Ejecución para la IA
1. Implementa el formulario usando `react-hook-form` y la integración con `@hookform/resolvers/zod`.
2. Define un esquema de validación estricto con `zod` en el mismo archivo (o en el archivo de tipos del feature si es muy extenso).
3. El componente debe tener la directiva `'use client'`.
4. Tipa inferencialmente los datos del formulario: `type FormData = z.infer<typeof schema>;`.
5. Maneja los estados de error de validación (mostrar mensajes debajo de cada input) y el estado de `isSubmitting` (deshabilitar el botón de envío).
6. Implementa el diseño de UI priorizando Mobile First usando Tailwind CSS.
7. Omite saludos o explicaciones; devuelve únicamente el código funcional.