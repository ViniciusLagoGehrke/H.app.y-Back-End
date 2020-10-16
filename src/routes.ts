import { Router } from 'express';
import OrphanagesControler from './controlers/OrphanagesControler';
const routes = Router();

routes.get('/orphanages', OrphanagesControler.index);
routes.get('/orphanages/:id', OrphanagesControler.show);
routes.post('/orphanages', OrphanagesControler.create);

  export default routes;