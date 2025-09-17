import { Request, Response } from 'express';
import {
  PlayersService,
  CreatePlayerData,
  UpdatePlayerData,
  PlayerFilters,
} from '../services/players.service';
import { asyncHandler } from '../middlewares/errorHandler';

export class PlayersController {
  private playersService: PlayersService;

  constructor() {
    this.playersService = new PlayersService();
  }

  createPlayer = asyncHandler(async (req: Request, res: Response) => {
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({
        message: 'Usuário não autenticado',
        code: 'UNAUTHENTICATED',
      });
    }

    const playerData: CreatePlayerData = {
      ...req.body,
      userId,
    };

    const player = await this.playersService.createPlayer(playerData);

    return res.status(201).json({
      message: 'Jogadora criada com sucesso',
      player,
    });
  });

  getPlayers = asyncHandler(async (req: Request, res: Response) => {
    const filters: PlayerFilters = {
      search: req.query.search as string,
      teamId: req.query.teamId as string,
      position: req.query.position as any,
      minAge: req.query.minAge ? parseInt(req.query.minAge as string) : undefined,
      maxAge: req.query.maxAge ? parseInt(req.query.maxAge as string) : undefined,
      page: req.query.page ? parseInt(req.query.page as string) : 1,
      limit: req.query.limit ? parseInt(req.query.limit as string) : 10,
    };

    const result = await this.playersService.getPlayers(filters);

    return res.json({
      message: 'Jogadoras obtidas com sucesso',
      ...result,
    });
  });

  getPlayerById = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;

    const player = await this.playersService.getPlayerById(id);

    return res.json({
      message: 'Jogadora obtida com sucesso',
      player,
    });
  });

  updatePlayer = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({
        message: 'Usuário não autenticado',
        code: 'UNAUTHENTICATED',
      });
    }

    const updateData: UpdatePlayerData = req.body;

    const player = await this.playersService.updatePlayer(id, updateData, userId);

    return res.json({
      message: 'Jogadora atualizada com sucesso',
      player,
    });
  });

  deletePlayer = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({
        message: 'Usuário não autenticado',
        code: 'UNAUTHENTICATED',
      });
    }

    await this.playersService.deletePlayer(id, userId);

    return res.json({
      message: 'Jogadora deletada com sucesso',
    });
  });
}
