import { Router, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';
import authRoutes from './auth.routes';
import playersRoutes from './players.routes';
import teamsRoutes from './teams.routes';
import externalRoutes from './external.routes';
import mockRoutes from './mock.routes';
import { authenticateToken } from '../middlewares/auth';
import { optionalAuth } from '../middlewares/optionalAuth';

// Carregar documentação OpenAPI
const swaggerDocument = YAML.load(path.join(__dirname, '../docs/openapi.yaml'));

const router = Router();

// Middleware opcional de autenticação para todas as rotas de páginas
router.use(optionalAuth);

// Rota específica para servir CSS
router.get('/css/:filename', (req: Request, res: Response) => {
  const filename = req.params.filename;
  const cssPath = path.join(__dirname, '../../public/css', filename);
  res.setHeader('Content-Type', 'text/css');
  res.sendFile(cssPath);
});

// Rota específica para servir imagens
router.get('/img/:filename', (req: Request, res: Response) => {
  const filename = req.params.filename;
  const imgPath = path.join(__dirname, '../../public/img', filename);
  res.sendFile(imgPath);
});

// Rota específica para servir JavaScript
router.get('/js/:filename', (req: Request, res: Response) => {
  const filename = req.params.filename;
  const jsPath = path.join(__dirname, '../../public/js', filename);
  res.setHeader('Content-Type', 'application/javascript');
  res.sendFile(jsPath);
});

// Rotas das páginas
router.get('/', (req: Request, res: Response) => {
  res.render('home', {
    title: 'Home',
    description: 'Rede social para o futebol feminino - Conectando atletas, olheiros e fãs',
    user: (req as any).user || null,
    req: req,
  });
});

router.get('/login', (req: Request, res: Response) => {
  res.render('login', {
    title: 'Entrar',
    description: 'Faça login na sua conta',
    user: (req as any).user || null,
    req: req,
  });
});

router.get('/register', (req: Request, res: Response) => {
  res.render('register', {
    title: 'Cadastrar',
    description: 'Crie sua conta',
    user: (req as any).user || null,
    req: req,
  });
});

router.get('/players', (req: Request, res: Response) => {
  res.render('players-simple', {
    title: 'Jogadoras',
    description: 'Conheça as jogadoras cadastradas',
    user: (req as any).user || null,
    req: req,
  });
});

router.get('/teams', (req: Request, res: Response) => {
  res.render('teams', {
    title: 'Times',
    description: 'Explore os times cadastrados',
    user: (req as any).user || null,
    req: req,
  });
});

router.get('/community', (req: Request, res: Response) => {
  res.render('community', {
    title: 'Comunidade',
    description: 'Participe da comunidade do futebol feminino',
    user: (req as any).user || null,
    req: req,
  });
});

router.get('/shop', (req: Request, res: Response) => {
  res.render('shop', {
    title: 'Loja',
    description: 'Produtos do Passa a Bola',
    user: (req as any).user || null,
    req: req,
  });
});

router.get('/news', (req: Request, res: Response) => {
  res.render('news', {
    title: 'Notícias',
    description: 'Últimas notícias do futebol feminino',
    user: (req as any).user || null,
    req: req,
  });
});

router.get('/test', (req: Request, res: Response) => {
  res.render('test');
});

// Rotas da API
router.use('/api/auth', authRoutes);
router.use('/api/players', playersRoutes);
router.use('/api/teams', teamsRoutes);
router.use('/api/external', externalRoutes);
router.use('/api/mock', mockRoutes);

// Documentação da API
router.use('/docs', swaggerUi.serve);
router.get(
  '/docs',
  swaggerUi.setup(swaggerDocument, {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: 'Passa a Bola API Docs',
  })
);

// Rota de health check
router.get('/api/health', (req: Request, res: Response) => {
  res.json({
    message: 'API funcionando corretamente',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  });
});

export default router;
