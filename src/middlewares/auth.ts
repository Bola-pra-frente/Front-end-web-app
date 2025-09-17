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

export const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: 'Token de acesso não fornecido',
        code: 'UNAUTHORIZED',
      });
    }

    const decoded = verifyToken(token) as TokenPayload;

    // Verificar se o usuário ainda existe
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });

    if (!user) {
      return res.status(401).json({
        message: 'Usuário não encontrado',
        code: 'USER_NOT_FOUND',
      });
    }

    req.user = decoded;
    return next();
  } catch (error) {
    return res.status(401).json({
      message: 'Token inválido',
      code: 'INVALID_TOKEN',
    });
  }
};

export const requireRole = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({
        message: 'Usuário não autenticado',
        code: 'UNAUTHENTICATED',
      });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: 'Acesso negado. Role insuficiente.',
        code: 'INSUFFICIENT_PERMISSIONS',
      });
    }

    return next();
  };
};
