# Skill: Uso de Servidores MCP (Supabase y Playwright)

# Contexto: Debes usar las herramientas conectadas vía Model Context Protocol para interactuar con la infraestructura.

## Instrucciones para Supabase MCP

1. NUNCA asumas la estructura de la base de datos.
2. ANTES de escribir código SQL o funciones de fetching, DEBES usar la herramienta MCP de Supabase (ej. `supabase_list_tables`, `supabase_get_schema`) para leer el esquema real de la tabla en cuestión.
3. Basa tus tipos de TypeScript estrictamente en el esquema devuelto por el servidor MCP, no en tupos inferidos o adivinados.

## Instrucciones para Playwright MCP

1. Si se te pide crear o ejecutar pruebas E2E, utiliza las herramientas expuestas por el servidor Playwright MCP.
2. No intentes ejecutar comandos de terminal como `npx playwright test` directamente a menos que el servidor MCP falle.
3. Asegúrate de verificar los selectores en el DOM (Mobile First) antes de confirmar que una prueba pasó.
