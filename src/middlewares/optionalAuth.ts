import { Request, Response, NextFunction } from 'express';
import { verifyToken, TokenPayload } from '../utils/jwt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

declare global {
  namespace Express {
    interface Request {
      user?: TokenPayload;
    }
  }
}

// Middleware opcional de autenticação - não bloqueia se não estiver logado
export const optionalAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return next(); // Continua sem usuário autenticado
    }

    const decoded = verifyToken(token) as TokenPayload;

    // Verificar se o usuário ainda existe
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });

    if (!user) {
      // Se usuário não existe, limpa o cookie e continua
      res.clearCookie('token');
      return next();
    }

    req.user = decoded;
    return next();
  } catch (error) {
    // Se token inválido, limpa o cookie e continua
    res.clearCookie('token');
    return next();
  }
};
