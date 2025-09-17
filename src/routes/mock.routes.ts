import { Router } from 'express';
import { MockController } from '../controllers/mock.controller';

const router = Router();
const mockController = new MockController();

// Rotas para dados mockados
router.get('/teams', mockController.getMockTeams);
router.get('/teams/:id', mockController.getMockTeamById);

router.get('/players', mockController.getMockPlayers);
router.get('/players/:id', mockController.getMockPlayerById);

router.get('/matches', mockController.getMockMatches);
router.get('/matches/:id', mockController.getMockMatchById);

router.get('/news', mockController.getMockNews);
router.get('/news/:id', mockController.getMockNewsById);

router.get('/products', mockController.getMockProducts);
router.get('/products/:id', mockController.getMockProductById);

router.get('/stats', mockController.getMockStats);

// Rota para obter todos os dados mockados
router.get('/all', mockController.getAllMockData);

export default router;
