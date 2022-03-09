import { Router } from 'express';
import PostsController from './controllers/PostsController';

const routes = Router();

routes.get('/posts', PostsController.index);
routes.get('/posts/:id', PostsController.show);
routes.post('/posts', PostsController.create);
routes.delete('/posts/:id', PostsController.delete);
routes.put('/posts/:id', PostsController.update);

export default routes;