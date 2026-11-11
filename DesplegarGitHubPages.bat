@echo off
cd /d "%~dp0"
echo =======================================================
echo    PUBLICAR / ACTUALIZAR EN GITHUB PAGES (RED ALICIA)
echo =======================================================
echo.
echo 1/4 Compilando portal web...
cd /d "%~dp0SitioWeb"
call npm run build
if %errorlevel% neq 0 (
    echo Error al compilar.
    if not "%1"=="--auto" pause
    exit /b %errorlevel%
)
cd /d "%~dp0"

echo.
echo 2/4 Configurando repositorio Git y cuenta GitHub...
gh auth switch -u Santiherben >nul 2>&1

if not exist ".git" (
    git init -b main
)

git remote get-url origin >nul 2>&1
if %errorlevel% neq 0 (
    echo Creando repositorio publico RED-ALICIA en GitHub...
    gh repo create Santiherben/RED-ALICIA --public --description "Portal Web Oficial de la Red ALICIA - Alianza para la Colaboracion, la Investigacion y los Aprendizajes (CFE - Uruguay)" >nul 2>&1
    git remote add origin https://github.com/Santiherben/RED-ALICIA.git
)

echo.
echo 3/4 Guardando cambios en rama principal (main)...
git add .
git commit -m "Publicacion portal beta RED ALICIA" >nul 2>&1
git branch -M main
git push -u origin main

echo.
echo 4/4 Publicando version compilada en GitHub Pages (gh-pages)...
git subtree split --prefix SitioWeb/dist -b gh-pages-temp
git push -f origin gh-pages-temp:gh-pages
git branch -D gh-pages-temp

gh api --method POST -H "Accept: application/vnd.github+json" /repos/Santiherben/RED-ALICIA/pages -f "source[branch]=gh-pages" -f "source[path]=/" >nul 2>&1

echo.
echo =======================================================
echo    SITIO BETA PUBLICADO CON EXITO EN:
echo    https://santiherben.github.io/RED-ALICIA/
echo =======================================================
echo.
if not "%1"=="--auto" pause
