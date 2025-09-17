import { Router } from 'express';
import { TeamsController } from '../controllers/teams.controller';
import { authenticateToken } from '../middlewares/auth';
import { validateSchema } from '../middlewares/validation';
import { createTeamSchema, updateTeamSchema } from '../schemas/teams.schema';

const router = Router();
const teamsController = new TeamsController();

// Todas as rotas de teams são protegidas
router.use(authenticateToken);

router.post('/', validateSchema(createTeamSchema), teamsController.createTeam);
router.get('/', teamsController.getTeams);
router.get('/:id', teamsController.getTeamById);
router.put('/:id', validateSchema(updateTeamSchema), teamsController.updateTeam);
router.delete('/:id', teamsController.deleteTeam);
router.get('/:id/players', teamsController.getTeamPlayers);

export default router;
