# 🚀 Guia de Deploy na Vercel

## Passo a Passo Completo

### 1. Preparação
- ✅ Repositório no GitHub
- ✅ Código funcionando localmente
- ✅ Arquivos de configuração criados

### 2. Deploy na Vercel

#### 2.1 Acesse a Vercel
1. Vá para [vercel.com](https://vercel.com)
2. Clique em "Sign up" ou "Log in"
3. Conecte sua conta GitHub

#### 2.2 Importe o Projeto
1. Clique em "New Project"
2. Selecione seu repositório `passa-a-bola`
3. Clique em "Import"

#### 2.3 Configure o Projeto
- **Framework Preset**: Other
- **Root Directory**: `./` (raiz do projeto)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

#### 2.4 Variáveis de Ambiente
Adicione as seguintes variáveis:

```
JWT_SECRET=seu-jwt-secret-super-seguro-aqui-123456789
DATABASE_URL=postgresql://username:password@host:port/database
NODE_ENV=production
```

**Como gerar JWT_SECRET:**
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

#### 2.5 Deploy
1. Clique em "Deploy"
2. Aguarde o build (2-3 minutos)
3. Sua aplicação estará disponível em: `https://passa-a-bola.vercel.app`

### 3. Configuração do Banco de Dados

#### 3.1 Banco PostgreSQL (Recomendado)
A Vercel oferece integração com:
- **Vercel Postgres** (gratuito)
- **PlanetScale** (gratuito)
- **Supabase** (gratuito)

#### 3.2 Configurar Prisma
1. No dashboard da Vercel, vá em "Storage"
2. Crie um banco PostgreSQL
3. Copie a `DATABASE_URL`
4. Cole nas variáveis de ambiente

#### 3.3 Migrar o Banco
```bash
# Localmente, com a DATABASE_URL da Vercel
npx prisma migrate deploy
npx prisma db seed
```

### 4. Atualizar GitHub Pages

Após o deploy na Vercel:

1. Edite o arquivo `index.html`
2. Substitua a URL:
```javascript
document.getElementById('app-link').href = 'https://sua-url-da-vercel.vercel.app';
```

3. Faça commit e push:
```bash
git add index.html
git commit -m "Atualizar link da Vercel"
git push origin main
```

### 5. Verificação

✅ **Teste todas as funcionalidades:**
- [ ] Página inicial carrega
- [ ] Login/Registro funciona
- [ ] CRUD de jogadoras
- [ ] CRUD de times
- [ ] Comunidade e Loja
- [ ] API endpoints
- [ ] Documentação em `/docs`

### 6. Troubleshooting

#### Erro de Build
- Verifique se todas as dependências estão no `package.json`
- Confirme se o `vercel.json` está correto

#### Erro de Banco
- Verifique se a `DATABASE_URL` está correta
- Execute as migrações: `npx prisma migrate deploy`

#### Erro 500
- Verifique os logs na Vercel Dashboard
- Confirme se as variáveis de ambiente estão configuradas

### 7. URLs Finais

- **Aplicação**: `https://passa-a-bola.vercel.app`
- **GitHub Pages**: `https://seu-usuario.github.io/passa-a-bola`
- **API Docs**: `https://passa-a-bola.vercel.app/docs`

## 🎉 Pronto!

Sua aplicação Passa a Bola estará online e funcionando perfeitamente!
