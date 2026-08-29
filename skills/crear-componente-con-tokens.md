# Skill: Generar Componente UI (Design Tokens)

# Contexto: Requiero un componente de interfaz pura (UI "tonta") que respete el sistema de diseño.

## Instrucciones de Ejecución para la IA

1. Lee `04-design-tokens.md` y `01-stack-convenciones.md`[cite: 17].
2. Crea un componente funcional de React tipando sus props con una interfaz explícita[cite: 17].
3. No incluyas lógica de peticiones asíncronas ni acceso a base de datos[cite: 17].
4. Aplica Mobile First: define cómo se ve en móvil por defecto mediante las variables CSS nativas de Tailwind v4, y usa prefijos (ej. `md:`, `lg:`) solo para escritorio[cite: 17].
5. Usa la función utilitaria `cn()` para resolver dinámicamente la prop `className`[cite: 17].
6. Omite introducciones, devuelve solo el código[cite: 17].
