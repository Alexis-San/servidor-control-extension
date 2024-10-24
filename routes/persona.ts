
import { Router } from "express";
import { deletePersona, getOnePersona, getPersonas, postPersona, putPersona } from "../controllers/persona";

const router= Router();

router.get('/', getPersonas);
router.get('/:id',getOnePersona);
router.post('/',postPersona);
router.put('/:id',putPersona);
router.delete('/:id',deletePersona);

export default router;