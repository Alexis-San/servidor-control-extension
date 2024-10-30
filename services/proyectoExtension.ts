import ProyectoExtension from '../models/proyectoExtension';
import { Op } from 'sequelize';
const excludeFields = (data: any) => {
    const { id, estado, createdAt, updatedAt, ...allowedData } = data;
    return allowedData;
};

export const getAllProyectos = async () => {
    return await ProyectoExtension.findAll({
        where: {
            estado: true
        },
        attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'estado'] }
    });
};

export const getProyectoById = async (id: number) => {
    return await ProyectoExtension.findOne({
        where: {
            id: id,
            estado: true
        },
        attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'estado'] }
    });
};
export const getProyectoByName = async (titulo: string) => {
    return await ProyectoExtension.findAll({
        where: {
            titulo: {
                [Op.iRegexp]: `${titulo}`
            },
            estado: true
        },
        attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'estado'] }
    });
};

export const getProyectoByResolucion = async (resolucion: string) => {
    return await ProyectoExtension.findOne({
        where: {
            resolucion: resolucion,
            estado: true
        },
        attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'estado'] }
    });
};


export const createProyecto = async (proyectoData: any) => {
    return await ProyectoExtension.create(proyectoData);
};

export const updateProyecto = async (id: number, updatedData: any) => {
    const proyecto = await ProyectoExtension.findByPk(id);
    if (!proyecto) {
        throw new Error('Proyecto no encontrado');
    }
    const allowedData = excludeFields(updatedData);
    await proyecto.update(allowedData);
    return await ProyectoExtension.findByPk(id, {
        attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'estado'] }
    });
};

export const deleteProyecto = async (id: number) => {
    const proyecto = await ProyectoExtension.findByPk(id);
    if (!proyecto) {
        throw new Error('Proyecto no encontrado');
    }
    const newName = `${proyecto.get('name')}_deleted_${Date.now()}`;
    return await proyecto.update({ estado: false, name: newName });
};