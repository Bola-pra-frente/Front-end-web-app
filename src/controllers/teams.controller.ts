import { Request, Response } from 'express';
import { TeamsService, CreateTeamData, UpdateTeamData, TeamFilters } from '../services/teams.service';
import { asyncHandler } from '../middlewares/errorHandler';

export class TeamsController {
  private teamsService: TeamsService;

  constructor() {
    this.teamsService = new TeamsService();
  }

  createTeam = asyncHandler(async (req: Request, res: Response) => {
    const teamData: CreateTeamData = req.body;

    const team = await this.teamsService.createTeam(teamData);

    res.status(201).json({
      message: 'Time criado com sucesso',
      team
    });
  });

  getTeams = asyncHandler(async (req: Request, res: Response) => {
    const filters: TeamFilters = {
      search: req.query.search as string,
      city: req.query.city as string,
      state: req.query.state as string,
      country: req.query.country as string,
      page: req.query.page ? parseInt(req.query.page as string) : 1,
      limit: req.query.limit ? parseInt(req.query.limit as string) : 10
    };

    const result = await this.teamsService.getTeams(filters);

    res.json({
      message: 'Times obtidos com sucesso',
      ...result
    });
  });

  getTeamById = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;

    const team = await this.teamsService.getTeamById(id);

    res.json({
      message: 'Time obtido com sucesso',
      team
    });
  });

  updateTeam = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const updateData: UpdateTeamData = req.body;

    const team = await this.teamsService.updateTeam(id, updateData);

    res.json({
      message: 'Time atualizado com sucesso',
      team
    });
  });

  deleteTeam = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;

    await this.teamsService.deleteTeam(id);

    res.json({
      message: 'Time deletado com sucesso'
    });
  });

  getTeamPlayers = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;

    const players = await this.teamsService.getTeamPlayers(id);

    res.json({
      message: 'Jogadoras do time obtidas com sucesso',
      players
    });
  });
}
