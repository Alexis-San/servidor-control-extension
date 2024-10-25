import { Request, Response } from 'express';
import { createPersona, getAllPersonas, getPersonaById, updatePersona } from '../services/persona';


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
        
        if (!persona) {
            res.status(404).json({
                ok: false,
                error: 'Persona not found'
            });
        }

        res.json({
            ok: true,
            persona
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            error: 'Error fetching persona'
        });
    }
};

export const postPersona = async (req: Request, res: Response) => {
    try {
        const persona = await createPersona(req.body);
        res.json({
            ok: true,
            persona
        });
    } catch (error) {
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

export const deletePersona = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await updatePersona(Number(id), { estado: false });

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