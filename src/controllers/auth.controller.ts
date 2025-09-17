import { Request, Response, NextFunction } from 'express';
import { AuthService, LoginData, RegisterData } from '../services/auth.service';
import { asyncHandler } from '../middlewares/errorHandler';

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  login = asyncHandler(async (req: Request, res: Response) => {
    const { email, password }: LoginData = req.body;

    const result = await this.authService.login({ email, password });

    // Definir cookie httpOnly
    res.cookie('token', result.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 dias
    });

    res.json({
      message: 'Login realizado com sucesso',
      user: result.user,
    });
  });

  register = asyncHandler(async (req: Request, res: Response) => {
    const { email, password, role }: RegisterData = req.body;

    const result = await this.authService.register({ email, password, role });

    // Definir cookie httpOnly
    res.cookie('token', result.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 dias
    });

    res.status(201).json({
      message: 'Usuário criado com sucesso',
      user: result.user,
    });
  });

  logout = asyncHandler(async (req: Request, res: Response) => {
    const userId = req.user?.userId;

    if (userId) {
      await this.authService.logout(userId);
    }

    // Limpar cookie
    res.clearCookie('token');

    res.json({
      message: 'Logout realizado com sucesso',
    });
  });

  getProfile = asyncHandler(async (req: Request, res: Response) => {
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({
        message: 'Usuário não autenticado',
        code: 'UNAUTHENTICATED',
      });
    }

    const profile = await this.authService.getProfile(userId);

    return res.json({
      message: 'Perfil obtido com sucesso',
      profile,
    });
  });

  // Rota para verificar se o usuário está autenticado
  checkAuth = asyncHandler(async (req: Request, res: Response) => {
    const user = req.user;

    if (!user) {
      return res.status(401).json({
        message: 'Usuário não autenticado',
        code: 'UNAUTHENTICATED',
      });
    }

    return res.json({
      message: 'Usuário autenticado',
      user,
    });
  });
}
