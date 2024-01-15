import { Router } from 'express';
import { UsersController } from '../controllers/UsersControllers';

const router = Router();

router.get('/users', UsersController.listAllUsers);
router.post('/signup', UsersController.registerUser);

export default router;
