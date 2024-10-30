import { Request, Response } from 'express';
import { createPeriodoLectivo, deletePeriodoLectivo, getAllPeriodosLectivos, getPeriodoLectivoById, updatePeriodoLectivo, checkExistingPeriodoLectivoByCodigo } from '../services/periodoLectivo';
import PeriodoLectivo from '../models/periodoLectivo';

export const getPeriodosLectivos = async (req: Request, res: Response) => {
    try {
        const periodosLectivos = await getAllPeriodosLectivos();
        
        res.json({
            ok: true,
            periodosLectivos
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            error: 'Error fetching periodos lectivos'
        });
    }
};

export const getOnePeriodoLectivo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const periodoLectivo = await getPeriodoLectivoById(Number(id));
        
        if (periodoLectivo) {
            res.json({
                ok: true,
                periodoLectivo
            });
        } else {
            res.status(404).json({
                ok: false,
                error: 'Periodo lectivo not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            ok: false,
            error: 'Error fetching periodo lectivo'
        });
    }
};

export const postPeriodoLectivo = async (req: Request, res: Response) => {

 
    try{
        const newPeriodoLectivo = await createPeriodoLectivo(req.body);
            res.json({
                ok: true,
                periodoLectivo: newPeriodoLectivo
            });
        }
    catch (error) {
        res.status(500).json({
            ok: false,
            error: 'Error creando periodo lectivo'
        });
    }
};

export const putPeriodoLectivo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const updatedPeriodoLectivo = await updatePeriodoLectivo(Number(id), updatedData);

        res.json({
            ok: true,
            periodoLectivo: updatedPeriodoLectivo
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            error: 'Error updating periodo lectivo'
        });
    }
};

export const deleteOnePeriodoLectivo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await deletePeriodoLectivo(Number(id));

        res.json({
            ok: true,
            message: 'Periodo lectivo eliminado correctamente'
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            error: 'Error eliminando periodo lectivo'
        });
    }
};