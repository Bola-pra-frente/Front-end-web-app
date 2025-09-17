# Passa a Bola - Women's Football Network

Uma plataforma completa para dar visibilidade ao futebol feminino, conectando atletas, olheiros e fãs.

## 👥 Equipe

- **565601** – Gustavo Cavalcanti
- **563068** – Felipe Riofrio Cheban Nicolau
- **563295** – Tomás Antonio Braga Cantuária
- **563294** – Mateus Macedo Batista de Souza
- **565931** – Matheus Augusto Xavier

## 🎯 Objetivo

O Passa a Bola é uma rede social dedicada ao futebol feminino, com foco em dar visibilidade às atletas que têm menos chances. A plataforma oferece:

- **Perfis de Atletas**: Cadastro detalhado de jogadoras com estatísticas e informações
- **Sistema de Olheiros**: Ferramentas para descobrir e acompanhar talentos
- **Comunidade**: Rede social para conectar fãs, atletas e profissionais
- **Loja Online**: Produtos exclusivos para apoiar o futebol feminino
- **Notícias e Conteúdo**: Atualizações sobre o mundo do futebol feminino

## 🚀 Tech Stack

### Backend
- **Node.js LTS** + **Express**
- **SQLite** com **Prisma ORM**
- **JWT** + cookies httpOnly para autenticação
- **Jest** + **Supertest** para testes
- **OpenAPI 3** + **Swagger UI** para documentação

### Frontend
- **HTML semântico** + **TailwindCSS 4**
- **EJS** como template engine
- Design responsivo (Desktop/Tablet/Mobile)
- **PostCSS** para build do CSS

### Ferramentas
- **TypeScript** para tipagem
- **ESLint** + **Prettier** para qualidade de código
- **dotenv** para variáveis de ambiente

## 📦 Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Bola-pra-frente/Front-end-web-app.git
   cd Front-end-web-app
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   ```bash
   cp env.example .env
   ```
   
   Edite o arquivo `.env` com suas configurações:
   ```env
   DATABASE_URL="file:./dev.db"
   JWT_SECRET="your-super-secret-jwt-key-here"
   PORT=3000
   NODE_ENV="development"
   ```

4. **Configure o banco de dados**
   ```bash
   npm run prisma:generate
   npm run prisma:migrate
   ```

5. **Popule o banco com dados de exemplo**
   ```bash
   npm run seed
   ```

## 🏃‍♀️ Como Executar

### Desenvolvimento
```bash
npm run dev
```
Este comando executa:
- Servidor Node.js com hot reload
- Build do TailwindCSS em modo watch

### Produção
```bash
npm run build
npm start
```

### Outros comandos úteis
```bash
# Executar testes
npm test

# Executar linting
npm run lint

# Formatar código
npm run format

# Build apenas do CSS
npm run build:css

# Abrir Prisma Studio
npm run prisma:studio
```

## 🔑 Contas de Demonstração

Após executar o seed, você pode usar estas contas:

- **Admin**: `admin@passa.com` / `admin123`
- **Atleta**: `atleta@demo.com` / `demo123`
- **Olheiro**: `olheiro@demo.com` / `demo123`
- **Fã**: `fan@demo.com` / `demo123`

## 📚 Documentação da API

Acesse a documentação interativa da API em:
- **Desenvolvimento**: http://localhost:3000/docs
- **Produção**: https://your-domain.com/docs

## 🛠️ Estrutura do Projeto

```
/passa-a-bola
  /src
    /app.ts                 # Configuração da aplicação Express
    /server.ts              # Servidor principal
    /config/env.ts          # Configuração de ambiente
    /middlewares/           # Middlewares (auth, error, etc.)
    /routes/                # Rotas da API e páginas
    /controllers/           # Controllers da API
    /services/              # Lógica de negócio
    /schemas/               # Validação com Joi
    /utils/                 # Utilitários (JWT, password, etc.)
    /views/                 # Templates EJS
    /docs/                  # Documentação OpenAPI
  /prisma
    schema.prisma           # Schema do banco de dados
    seed.ts                 # Script de seed
  /public
    /css                    # CSS do TailwindCSS
    /img                    # Imagens estáticas
  /tests                    # Testes automatizados
```

## 🔧 Funcionalidades Implementadas

### ✅ Autenticação
- [x] Registro de usuários com diferentes roles
- [x] Login com JWT + cookies httpOnly
- [x] Middleware de autenticação
- [x] Logout seguro

### ✅ Gerenciamento de Dados
- [x] CRUD de jogadoras
- [x] CRUD de times
- [x] Validação de dados com Joi
- [x] Paginação e filtros

### ✅ API Externa
- [x] Consumo de APIs externas (mock)
- [x] Tratamento de erros e timeouts
- [x] Endpoint de dados de exemplo

### ✅ Frontend
- [x] Design responsivo com TailwindCSS 4
- [x] HTML semântico
- [x] Páginas: Home, Login, Registro, Jogadoras, Times, Comunidade, Loja
- [x] Estados de carregamento e erro

### ✅ Qualidade
- [x] Testes unitários com Jest
- [x] Testes de integração com Supertest
- [x] ESLint + Prettier
- [x] Documentação OpenAPI completa

### ✅ Scripts e Automação
- [x] Script de seed com dados de exemplo
- [x] Build automatizado do CSS
- [x] Scripts NPM configurados

## 🎨 Design System

O projeto utiliza um design system baseado em:
- **Cores primárias**: Azul (#0ea5e9) e Roxo (#d946ef)
- **Tipografia**: Inter (Google Fonts)
- **Componentes**: Botões, cards, badges, inputs padronizados
- **Responsividade**: Mobile-first approach

## 🧪 Testes

```bash
# Executar todos os testes
npm test

# Executar testes em modo watch
npm run test -- --watch

# Executar testes com cobertura
npm run test -- --coverage
```

## 📱 Páginas Disponíveis

- **/** - Home com apresentação da plataforma
- **/login** - Página de login
- **/register** - Página de registro
- **/players** - Listagem de jogadoras (requer autenticação)
- **/teams** - Listagem de times (requer autenticação)
- **/community** - Comunidade (em desenvolvimento)
- **/shop** - Loja online (em desenvolvimento)
- **/docs** - Documentação da API

## 🔒 Segurança

- Autenticação JWT com cookies httpOnly
- Validação de entrada com Joi
- Sanitização de dados
- Headers de segurança com Helmet
- CORS configurado
- Rate limiting (a implementar)

## 🚧 Próximas Funcionalidades

- [ ] Sistema de posts e comentários
- [ ] Chat em tempo real
- [ ] Sistema de notificações
- [ ] Upload de imagens
- [ ] Sistema de pagamento para a loja
- [ ] App mobile (React Native)
- [ ] Integração com APIs reais de futebol

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **Email**: contato@passabola.com
- **Website**: https://front-end-web-ecxrdjick-matheus-xaviers-projects-d17e8510.vercel.app
- **LinkedIn**: [Passa a Bola](https://linkedin.com/company/passabola)

---

**Passa a Bola** - Conectando o futebol feminino! ⚽👩‍⚽
Trabalho de frontend web
