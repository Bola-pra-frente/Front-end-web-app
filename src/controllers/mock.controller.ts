import { Request, Response } from 'express';
import { ExternalApiService } from '../services/externalApi.service';
import { asyncHandler } from '../middlewares/errorHandler';

export class MockController {
  private externalApiService: ExternalApiService;

  constructor() {
    this.externalApiService = new ExternalApiService();
  }

  // Endpoint para obter times mockados
  getMockTeams = asyncHandler(async (req: Request, res: Response) => {
    const teams = await this.externalApiService.getMockTeams();

    return res.json({
      message: 'Times obtidos com sucesso',
      teams,
      total: teams.length,
    });
  });

  // Endpoint para obter jogadoras mockadas
  getMockPlayers = asyncHandler(async (req: Request, res: Response) => {
    const players = await this.externalApiService.getMockPlayers();

    return res.json({
      message: 'Jogadoras obtidas com sucesso',
      players,
      total: players.length,
    });
  });

  // Endpoint para obter jogos mockados
  getMockMatches = asyncHandler(async (req: Request, res: Response) => {
    const matches = await this.externalApiService.getMockMatches();

    return res.json({
      message: 'Jogos obtidos com sucesso',
      matches,
      total: matches.length,
    });
  });

  // Endpoint para obter notícias mockadas
  getMockNews = asyncHandler(async (req: Request, res: Response) => {
    const news = await this.externalApiService.getMockNews();

    return res.json({
      message: 'Notícias obtidas com sucesso',
      news,
      total: news.length,
    });
  });

  // Endpoint para obter produtos mockados
  getMockProducts = asyncHandler(async (req: Request, res: Response) => {
    const products = await this.externalApiService.getMockProducts();

    return res.json({
      message: 'Produtos obtidos com sucesso',
      products,
      total: products.length,
    });
  });

  // Endpoint para obter estatísticas mockadas
  getMockStats = asyncHandler(async (req: Request, res: Response) => {
    const stats = await this.externalApiService.getMockStats();

    return res.json({
      message: 'Estatísticas obtidas com sucesso',
      stats,
    });
  });

  // Endpoint para obter todos os dados mockados
  getAllMockData = asyncHandler(async (req: Request, res: Response) => {
    const [teams, players, matches, news, products, stats] = await Promise.all([
      this.externalApiService.getMockTeams(),
      this.externalApiService.getMockPlayers(),
      this.externalApiService.getMockMatches(),
      this.externalApiService.getMockNews(),
      this.externalApiService.getMockProducts(),
      this.externalApiService.getMockStats(),
    ]);

    return res.json({
      message: 'Todos os dados mockados obtidos com sucesso',
      data: {
        teams,
        players,
        matches,
        news,
        products,
        stats,
      },
      totals: {
        teams: teams.length,
        players: players.length,
        matches: matches.length,
        news: news.length,
        products: products.length,
      },
    });
  });

  // Endpoint para obter uma jogadora específica
  getMockPlayerById = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const players = await this.externalApiService.getMockPlayers();
    const player = players.find(p => p.id === id);

    if (!player) {
      return res.status(404).json({
        message: 'Jogadora não encontrada',
        code: 'PLAYER_NOT_FOUND',
      });
    }

    return res.json({
      message: 'Jogadora obtida com sucesso',
      player,
    });
  });

  // Endpoint para obter um time específico
  getMockTeamById = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const teams = await this.externalApiService.getMockTeams();
    const team = teams.find(t => t.id === id);

    if (!team) {
      return res.status(404).json({
        message: 'Time não encontrado',
        code: 'TEAM_NOT_FOUND',
      });
    }

    // Adicionar jogadoras do time
    const players = await this.externalApiService.getMockPlayers();
    const teamPlayers = players.filter(p => p.teamId === id);

    return res.json({
      message: 'Time obtido com sucesso',
      team: {
        ...team,
        players: teamPlayers,
      },
    });
  });

  // Endpoint para obter um jogo específico
  getMockMatchById = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const matches = await this.externalApiService.getMockMatches();
    const match = matches.find(m => m.id === id);

    if (!match) {
      return res.status(404).json({
        message: 'Jogo não encontrado',
        code: 'MATCH_NOT_FOUND',
      });
    }

    return res.json({
      message: 'Jogo obtido com sucesso',
      match,
    });
  });

  // Endpoint para obter uma notícia específica
  getMockNewsById = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const news = await this.externalApiService.getMockNews();
    const newsItem = news.find(n => n.id === id);

    if (!newsItem) {
      return res.status(404).json({
        message: 'Notícia não encontrada',
        code: 'NEWS_NOT_FOUND',
      });
    }

    return res.json({
      message: 'Notícia obtida com sucesso',
      news: newsItem,
    });
  });

  // Endpoint para obter um produto específico
  getMockProductById = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const products = await this.externalApiService.getMockProducts();
    const product = products.find(p => p.id === id);

    if (!product) {
      return res.status(404).json({
        message: 'Produto não encontrado',
        code: 'PRODUCT_NOT_FOUND',
      });
    }

    return res.json({
      message: 'Produto obtido com sucesso',
      product,
    });
  });
}
