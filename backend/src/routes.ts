import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/orphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

//POST => nova informação
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

//GET => Buscar informação 
routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);

//PUT => Editar informação


//DELETE => Excluir informação

export default routes;