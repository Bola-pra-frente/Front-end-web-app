import { Request, Response } from 'express';

export const notFound = (req: Request, res: Response) => {
  res.status(404).json({
    message: `Rota ${req.method} ${req.originalUrl} não encontrada`,
    code: 'ROUTE_NOT_FOUND'
  });
};
