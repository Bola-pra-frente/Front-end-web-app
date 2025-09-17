import { Router } from 'express';
import { PlayersController } from '../controllers/players.controller';
import { authenticateToken } from '../middlewares/auth';
import { validateSchema } from '../middlewares/validation';
import { createPlayerSchema, updatePlayerSchema } from '../schemas/players.schema';

const router = Router();
const playersController = new PlayersController();

// Todas as rotas de players são protegidas
router.use(authenticateToken);

router.post('/', validateSchema(createPlayerSchema), playersController.createPlayer);
router.get('/', playersController.getPlayers);
router.get('/:id', playersController.getPlayerById);
router.put('/:id', validateSchema(updatePlayerSchema), playersController.updatePlayer);
router.delete('/:id', playersController.deletePlayer);

export default router;
