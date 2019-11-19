import { Router } from 'express';
import CheckinController from './app/controllers/CheckinController';
import HelperController from './app/controllers/HelperController';
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import PlanController from './app/controllers/PlanController';
import RegistrationController from './app/controllers/RegistrationController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/students/:id/checkins', CheckinController.store);

routes.get('/students/:id/help-orders', HelperController.index);
routes.post('/students/:id/help-orders', HelperController.store);

routes.post('/sessions', SessionController.index);

routes.use(authMiddleware);

routes.post('/students', StudentController.store);
routes.put('/students/:id', StudentController.update);

routes.get('/plans', PlanController.index);
routes.post('/plans', PlanController.store);
routes.put('/plans/:id([0-9]+)', PlanController.update);
routes.delete('/plans/:id([0-9]+)', PlanController.delete);

routes.get('/registrations', RegistrationController.index);
routes.post('/registrations', RegistrationController.store);
routes.put('/registrations/:id', RegistrationController.update);
routes.delete('/registrations/:id', RegistrationController.delete);

export default routes;
