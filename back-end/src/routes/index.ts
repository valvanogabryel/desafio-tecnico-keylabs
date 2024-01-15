import users from './user.router';
import auth from './auth.router';
import { Express } from 'express';

const routes = (app: Express) => {
  app.use(auth, users);
};

export default routes;
