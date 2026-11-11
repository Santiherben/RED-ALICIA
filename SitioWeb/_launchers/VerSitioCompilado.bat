@echo off
title RED ALI.C.I.A - Previsualizar Version Compilada (dist)
color 0A

echo ============================================================
echo   RED ALI.C.I.A - Servidor de Produccion Local (Preview)
echo ============================================================
echo.

cd /d "%~dp0SitioWeb"

if not exist "dist" (
    echo [INFO] Compilando el sitio por primera vez...
    call npm run build
    echo.
)

echo [INFO] Iniciando servidor de previsualizacion en http://localhost:4174...
echo.

call npm run preview

pause
