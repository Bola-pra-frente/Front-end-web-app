import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { errorHandler } from './middlewares/errorHandler';
import { notFound } from './middlewares/notFound';
import routes from './routes';

const app = express();

// Middlewares de segurança
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
        fontSrc: ["'self'", 'https://fonts.gstatic.com'],
        imgSrc: ["'self'", 'data:', 'https:'],
        scriptSrc: ["'self'"],
        connectSrc: ["'self'"],
      },
    },
  })
);

// CORS
app.use(
  cors({
    origin:
      process.env.NODE_ENV === 'production'
        ? true // Permitir todas as origens em produção
        : ['http://localhost:3000', 'http://127.0.0.1:3000'],
    credentials: true,
  })
);

// Middlewares de parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());

// Servir arquivos estáticos
app.use(express.static('public'));

// Configurar EJS como view engine
app.set('view engine', 'ejs');
app.set('views', 'src/views');

// Rotas
app.use('/', routes);

// Middlewares de erro
app.use(notFound);
app.use(errorHandler);

export default app;
