import { Router } from 'express';
const routes = Router();

import { userRoutes } from './users.routes';

routes.use('/api/v1', userRoutes);


export { routes }
