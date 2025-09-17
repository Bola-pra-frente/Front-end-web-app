import { VercelRequest, VercelResponse } from '@vercel/node';
import path from 'path';
import fs from 'fs';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // Servir arquivos estáticos diretamente
    if (req.url?.startsWith('/css/')) {
      const filename = req.url.split('/').pop();
      const cssPath = path.join(process.cwd(), 'public', 'css', filename || '');
      
      if (fs.existsSync(cssPath)) {
        res.setHeader('Content-Type', 'text/css');
        res.setHeader('Cache-Control', 'public, max-age=31536000');
        return res.sendFile(cssPath);
      }
    }

    if (req.url?.startsWith('/img/')) {
      const filename = req.url.split('/').pop();
      const imgPath = path.join(process.cwd(), 'public', 'img', filename || '');
      
      if (fs.existsSync(imgPath)) {
        res.setHeader('Cache-Control', 'public, max-age=31536000');
        return res.sendFile(imgPath);
      }
    }

    // Para outras rotas, usar a aplicação Express
    const app = await import('../src/app');
    return app.default(req, res);
  } catch (error) {
    console.error('Error in Vercel handler:', error);
    res.status(500).json({
      message: 'Internal Server Error',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong',
    });
  }
}
