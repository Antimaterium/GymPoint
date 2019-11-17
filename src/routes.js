import { Router } from 'express';
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import auth from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.index);

routes.post('/students', auth, StudentController.store);
routes.put('/students/:id', auth, StudentController.update);

export default routes;
