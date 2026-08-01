# =====================================================================
# Script de Inicialización de SDK para IA
# Ejecuta este script desde la raíz de tu NUEVO proyecto Next.js
# =====================================================================

# 1. Define dónde vive tu carpeta maestra (Ajusta la ruta a tu disco D si es diferente)
$SdkPath = "D:\ai-stack-core"

Write-Host "Iniciando inyección de contexto de IA..." -ForegroundColor Cyan

# 2. Verificar que estamos en un proyecto Next.js (busca el package.json)
if (-not (Test-Path "package.json")) {
    Write-Host "Error: No se encontró package.json. Asegúrate de ejecutar este script en la raíz de tu proyecto Next.js." -ForegroundColor Red
    exit
}

# 3. Crear carpetas de reglas locales
Write-Host "Creando carpetas .clinerules y .continue/rules..." -ForegroundColor Yellow
New-Item -ItemType Directory -Force -Path .\.clinerules | Out-Null
New-Item -ItemType Directory -Force -Path .\.continue\rules | Out-Null

# 4. Copiar las reglas del proyecto
Write-Host "Inyectando Project Rules..." -ForegroundColor Yellow
Copy-Item -Path "$SdkPath\project-rules\*" -Destination .\.clinerules\ -Recurse -Force
Copy-Item -Path "$SdkPath\project-rules\*" -Destination .\.continue\rules\ -Recurse -Force

# 5. Copiar los Templates
Write-Host "Inyectando Templates físicos..." -ForegroundColor Yellow
Copy-Item -Path "$SdkPath\templates\*" -Destination .\src\ -Recurse -Force

Write-Host "`n===========================================================" -ForegroundColor Green
Write-Host "¡Contexto de IA inyectado con éxito!" -ForegroundColor Green
Write-Host "===========================================================`n"

# 6. Recordatorio de dependencias base
Write-Host "Para que las plantillas y skills funcionen sin errores, instala tu stack base ejecutando:" -ForegroundColor Cyan
Write-Host "npm install @supabase/supabase-js @supabase/ssr react-hook-form @hookform/resolvers zod clsx tailwind-merge lucide-react" -ForegroundColor White
Write-Host "`n¡Tu entorno está listo para trabajar con Cline y Continue!" -ForegroundColor Green