@echo off
title RED ALI.C.I.A - Alianza para la Colaboracion, la Investigacion y los Aprendizajes
color 0A

echo ============================================================
echo   RED ALI.C.I.A - Portal Web Oficial (Ecosistema Panal CFE)
echo   Alianza para la Colaboracion, la Investigacion y los Aprendizajes
echo ============================================================
echo.

cd /d "%~dp0SitioWeb"

if not exist "node_modules" (
    echo [INFO] Instalando dependencias necesarias por primera vez...
    call npm install
    echo.
)

echo [INFO] Iniciando servidor y abriendo el navegador automaticamente...
echo [INFO] Para detener el servidor, presiona Ctrl + C o cierra esta ventana.
echo.

call npm run dev

pause
