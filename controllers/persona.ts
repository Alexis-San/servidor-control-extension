import { Request, Response } from 'express';
import Persona from '../models/persona';




export const getPersonas = async (req: Request, res: Response) => {
    const personas = await Persona.findAll();
    res.json({
        ok: true,
        personas
    });
}
/*
export const getPersona=  (req: Request, res: Response) => {

    res.json({
        ok: true,
        msg: 'getPersona'
    });

}

export const postPersona=  (req: Request, res: Response) => {

    res.json({
        ok: true,
        msg: 'getPersona'
    });

}
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