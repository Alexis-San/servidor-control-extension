import { Request, Response } from 'express';
import { createPersona, getAllPersonas } from '../services/persona';


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

/*
export const putPersona=(req: Request, res: Response) => {

    res.json({
        ok: true,
        msg: 'getPersona'
    });

}
export const deletePersona= (req: Request, res: Response) => {

    res.json({
        ok: true,


        
        msg: 'getPersona'
    });

}
*/