import { Request, Response } from 'express';
import * as proyectoService from '../services/proyectoExtension';
export const getAllProyectos = async (req: Request, res: Response) => {
    try {
        const proyectos = await proyectoService.getAllProyectos();
        res.json({
            ok: true,
            proyectos
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            error: 'Error al obtener los proyectos'
        });
    }
};

export const getOneProyecto = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const proyecto = await proyectoService.getProyectoById(Number(id));
        if (!proyecto) {
            res.status(404).json({ message: 'Proyecto no encontrado' });
        }
        res.status(200).json(proyecto);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el proyecto', error });
    }
};

export const getProyectoByName = async (req: Request, res: Response) => {
    try {
        const { titulo } = req.params;
        const proyecto = await proyectoService.getProyectoByName(titulo);
        if (!proyecto) {
             res.status(404).json({ message: 'Proyecto no encontrado' });
        }
        res.status(200).json(proyecto);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el proyecto', error });
    }
};

export const getProyectoByResolucion = async (req: Request, res: Response) => {
    try {
        const { resolucion } = req.params;
        const proyecto = await proyectoService.getProyectoByResolucion(resolucion);
        if (!proyecto) {
             res.status(404).json({ message: 'Proyecto no encontrado' });
        }
        res.status(200).json(proyecto);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el proyecto', error });
    }
};

export const createProyecto = async (req: Request, res: Response) => {
    try {
        const proyectoData = req.body;
        const newProyecto = await proyectoService.createProyecto(proyectoData);
        res.status(201).json(newProyecto);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el proyecto', error });
    }
};

export const updateProyecto = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const updatedProyecto = await proyectoService.updateProyecto(Number(id), updatedData);
        res.status(200).json(updatedProyecto);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el proyecto', error });
    }
};

export const deleteProyecto = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedProyecto = await proyectoService.deleteProyecto(Number(id));
        res.status(200).json(deletedProyecto);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el proyecto', error });
    }
};