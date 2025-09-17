import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // Para todas as rotas, usar a aplicação Express
    const app = await import('../src/app');
    return app.default(req, res);
  } catch (error) {
    console.error('Error in Vercel handler:', error);
    res.status(500).json({
      message: 'Internal Server Error',
      error: process.env.NODE_ENV === 'development' ? (error as Error).message : 'Something went wrong',
    });
  }
}
