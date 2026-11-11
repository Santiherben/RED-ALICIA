@echo off
title RED ALI.C.I.A - Compilar Sitio para Produccion
color 0A

echo ============================================================
echo   RED ALI.C.I.A - Generando version optimizada (dist)
echo ============================================================
echo.

cd /d "%~dp0SitioWeb"

if not exist "node_modules" (
    echo [INFO] Instalando dependencias necesarias...
    call npm install
    echo.
)

call npm run build

echo.
echo ============================================================
echo [EXITO] Archivos generados en la carpeta:
echo   %~dp0SitioWeb\dist
echo.
echo Estos archivos estan listos para subirse a GitHub Pages,
echo Vercel, Netlify o cualquier servidor web.
echo ============================================================
echo.
pause
