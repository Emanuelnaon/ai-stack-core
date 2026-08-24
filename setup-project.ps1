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

# 3. Crear carpetas de reglas locales para los 3 entornos
Write-Host "Creando carpetas .clinerules, .continue/rules y .github..." -ForegroundColor Yellow
New-Item -ItemType Directory -Force -Path .\.clinerules | Out-Null
New-Item -ItemType Directory -Force -Path .\.continue\rules | Out-Null
New-Item -ItemType Directory -Force -Path .\.github | Out-Null

# 4. Copiar las reglas del proyecto (Cline y Continue)
Write-Host "Inyectando Project Rules para Cline y Continue..." -ForegroundColor Yellow
Copy-Item -Path "$SdkPath\project-rules\*" -Destination .\.clinerules\ -Recurse -Force
Copy-Item -Path "$SdkPath\project-rules\*" -Destination .\.continue\rules\ -Recurse -Force

# 5. Copiar el Enrutador/Instrucciones de Copilot
Write-Host "Inyectando reglas globales para Copilot..." -ForegroundColor Yellow
# Asume que el archivo copilot-instructions.md está en la raíz de tu carpeta maestra D:\ai-stack-core
# Si lo tienes en otra subcarpeta, ajusta la ruta del -Path
if (Test-Path "$SdkPath\copilot-instructions.md") {
    Copy-Item -Path "$SdkPath\copilot-instructions.md" -Destination .\.github\ -Force
} else {
    Write-Host "Aviso: No se encontró copilot-instructions.md en $SdkPath. Copilot no tendrá reglas globales." -ForegroundColor DarkYellow
}

# 6. Copiar los Templates
Write-Host "Inyectando Templates físicos..." -ForegroundColor Yellow
Copy-Item -Path "$SdkPath\templates\*" -Destination .\src\ -Recurse -Force

Write-Host "`n===========================================================" -ForegroundColor Green
Write-Host "¡Contexto de IA inyectado con éxito!" -ForegroundColor Green
Write-Host "===========================================================`n"

# 7. Recordatorio de dependencias base
Write-Host "Para que las plantillas y skills funcionen sin errores, instala tu stack base ejecutando:" -ForegroundColor Cyan
Write-Host "npm install @supabase/supabase-js @supabase/ssr react-hook-form @hookform/resolvers zod clsx tailwind-merge lucide-react" -ForegroundColor White
Write-Host "`n¡Tu entorno está listo para trabajar con Cline, Continue y Copilot!" -ForegroundColor Green
