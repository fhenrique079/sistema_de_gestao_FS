@echo off

title INSTALADOR SANTUARIO

echo ===================================
echo INSTALANDO DEPENDENCIAS NODE
echo ===================================

call npm install

echo ===================================
echo INSTALANDO REACT HOOK FORM
echo ===================================

call npm install react-hook-form

echo.
echo ===================================
echo INSTALANDO MATERIAL UI
echo ===================================

call npm install @mui/material @emotion/react @emotion/styled @mui/icons-material

echo.

echo ===================================
echo CRIANDO BANCO E TABELAS
echo ===================================

call python src/Database/gerar_dados.py

echo.
echo ===================================
echo INSTALACAO FINALIZADA!
echo ===================================

pause