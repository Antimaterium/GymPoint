import { Router } from 'express';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/sessions', SessionController.index);

export default routes;
