import { Router } from 'express';
import {getAllProyectos, getProyectoByName, getProyectoByResolucion, createProyecto, updateProyecto, deleteProyecto, getOneProyecto} from '../controllers/proyectoExtension';

const router = Router();

router.get('/', getAllProyectos);
router.get('/:id', getOneProyecto);
router.get('/buscar/titulo/:titulo', getProyectoByName);
router.get('/:resolucion', getProyectoByResolucion);
router.post('/', createProyecto);
router.put('/:id', updateProyecto);
router.delete('/:id', deleteProyecto);

export default router;