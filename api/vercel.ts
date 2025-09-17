import { VercelRequest, VercelResponse } from '@vercel/node';
import app from '../src/app';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // Configurar o caminho das views para produção
    if (process.env.NODE_ENV === 'production') {
      app.set('views', process.cwd() + '/src/views');
    }

    return app(req, res);
  } catch (error) {
    console.error('Error in Vercel handler:', error);
    res.status(500).json({
      message: 'Internal Server Error',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong',
    });
  }
}
