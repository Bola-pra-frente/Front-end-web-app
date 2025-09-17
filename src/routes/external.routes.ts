import { Router } from 'express';
import { ExternalApiService } from '../services/externalApi.service';
import { asyncHandler } from '../middlewares/errorHandler';

const router = Router();
const externalApiService = new ExternalApiService();

// Rota pública para dados de exemplo
router.get(
  '/sample',
  asyncHandler(async (req: any, res: any) => {
    const data = await externalApiService.getSampleData();

    return res.json({
      message: 'Dados de exemplo obtidos com sucesso',
      data,
    });
  })
);

// Rotas para dados específicos
router.get(
  '/matches',
  asyncHandler(async (req: any, res: any) => {
    const matches = await externalApiService.getFootballMatches();

    return res.json({
      message: 'Jogos obtidos com sucesso',
      matches,
    });
  })
);

router.get(
  '/players',
  asyncHandler(async (req: any, res: any) => {
    const players = await externalApiService.getFootballPlayers();

    return res.json({
      message: 'Jogadoras obtidas com sucesso',
      players,
    });
  })
);

router.get(
  '/news',
  asyncHandler(async (req: any, res: any) => {
    const news = await externalApiService.getFootballNews();

    return res.json({
      message: 'Notícias obtidas com sucesso',
      news,
    });
  })
);

export default router;
