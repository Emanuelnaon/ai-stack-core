# Skill: Generar Componente UI (Design Tokens)
# Contexto: Requiero un componente de interfaz pura (UI "tonta") que respete el sistema de diseño.

## Instrucciones de Ejecución para la IA
1. Lee `.clinerules/04-design-tokens.md` y `.clinerules/01-stack-convenciones.md`.
2. Crea un componente funcional de React tipando sus props con una interfaz explícita.
3. No incluyas lógica de peticiones asíncronas ni acceso a base de datos.
4. Aplica Mobile First: define cómo se ve en móvil por defecto, y usa prefijos (ej. `md:`, `lg:`) solo si el layout requiere expansión en desktop.
5. Usa la función utilitaria de clases condicionales (ej. `cn()`) si el componente acepta la prop `className` para ser extendido.
6. Omite introducciones, devuelve solo el código.