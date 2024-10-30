import { Router } from "express";
import { deleteOnePeriodoLectivo, getOnePeriodoLectivo, getPeriodosLectivos, postPeriodoLectivo, putPeriodoLectivo } from "../controllers/periodoLectivo";

const router = Router();

router.get('/', getPeriodosLectivos);
router.get('/:id', getOnePeriodoLectivo);
router.post('/', postPeriodoLectivo);
router.put('/:id', putPeriodoLectivo);
router.delete('/:id', deleteOnePeriodoLectivo);

export default router;