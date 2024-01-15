import { Router } from 'express';
import { UsersController } from '../controllers/UsersController';
import authenticated from '../middleware/authenticated';

const router = Router();

router.post('/signup', UsersController.registerUser);
router.get('/users', authenticated, UsersController.listAllUsers);

export default router;
