# Skill: Uso de Servidores MCP (Restricción Estricta)

# Contexto: Debes usar las herramientas conectadas vía Model Context Protocol ÚNICAMENTE bajo autorización explícita.

## Instrucciones para Supabase MCP

1. NUNCA asumas la estructura de la base de datos.
2. Si el usuario te AUTORIZA explícitamente, usa la herramienta MCP de Supabase para leer el esquema real de la tabla.
3. Prohibido ejecutar escaneos autónomos en bucle para adivinar tablas. Basa tus tipos estrictamente en el esquema devuelto.

## Instrucciones para Playwright MCP

1. Playwright MCP solo se invocará cuando el usuario pida una auditoría visual o testing E2E. Queda prohibida la auto-verificación no solicitada para ahorrar tokens.
2. Si se autoriza, verifica los selectores en el DOM (Mobile First) antes de confirmar que una prueba pasó.
