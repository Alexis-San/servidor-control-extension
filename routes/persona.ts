import { Router } from "express";
import { getPersonas, postPersona } from "../controllers/persona";


const router= Router();

router.get('/', getPersonas);
//router.get('/:id',getPersona);
router.post('/',postPersona);
//router.put('/:id',putPersona);
//router.delete('/:id',deletePersona);

export default router;