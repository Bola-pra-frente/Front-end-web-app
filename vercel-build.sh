#!/bin/bash

# Script de build para Vercel
echo "🔨 Building for Vercel..."

# Instalar dependências
npm install

# Gerar Prisma client
npx prisma generate

# Compilar CSS
npm run build:css

# Compilar TypeScript
npm run build

echo "✅ Build completed!"
