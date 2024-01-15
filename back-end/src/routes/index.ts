import users from './user.router';
import { Express } from 'express';

const routes = (app: Express) => {
  app.use(users);
};

export default routes;
