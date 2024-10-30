import { Request, Response } from 'express';
import { createPersona, deletePersona, getAllPersonas, getPersonaById, updatePersona, checkExistingPersonaByCi, checkExistingPersonaByEmail } from '../services/persona';


export const getPersonas = async (req: Request, res: Response) => {
    try {
        const personas = await getAllPersonas();
        
        res.json({
            ok: true,
            personas
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            error: 'Error fetching personas'
        });
    }
};

export const getOnePersona = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const persona = await getPersonaById(Number(id));
        
        if (persona) {
            res.json({
                ok: true,
                persona
            });
        } else {
            res.status(404).json({
                ok: false,
                error: 'Persona not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            ok: false,
            error: 'Error fetching persona'
        });
    }
}
export const postPersona = async (req: Request, res: Response) => {
    const { email, ci } = req.body;
    const existingEmail = await checkExistingPersonaByEmail(email);
    const existingCi = await checkExistingPersonaByCi(ci);
    try {
        if (existingEmail) {
            res.status(400).json({
                ok: false,
                error: 'Email already exists'
            });
        } else if (existingCi) {
            res.status(400).json({
                ok: false,
                error: 'CI already exists'
            });
        } else {
            const newPersona = await createPersona(req.body);
            res.json({
                ok: true,
                persona: newPersona
            });
        }
    } catch(error) {
    res.status(500).json({
        ok: false,
        error: 'Error creando persona'
    });
}
};

export const putPersona = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const updatedPersona = await updatePersona(Number(id), updatedData);

        res.json({
            ok: true,
            persona: updatedPersona
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            error: 'Error actualizando persona'
        });
    }
};

export const deleteOnePersona = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await deletePersona(Number(id));

        res.json({
            ok: true,
            message: 'Persona eliminada correctamente'
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            error: 'Error eliminando persona'
        });
    }
};