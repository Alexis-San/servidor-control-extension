import PeriodoLectivo from '../models/periodoLectivo';

const excludeFields = (data: any) => {
    const { id, estado, createdAt, updatedAt, ...allowedData } = data;
    return allowedData;
};

export const getAllPeriodosLectivos = async () => {
    return await PeriodoLectivo.findAll({
        where: {
            estado: true
        },
        attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'estado'] }
    });
};

export const getPeriodoLectivoById = async (id: number) => {
    return await PeriodoLectivo.findOne({
        where: {
            id: id,
            estado: true
        },
        attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'estado'] }
    });
};

export const checkExistingPeriodoLectivoByCodigo = async (codigo: string) => {
    return await PeriodoLectivo.findOne({ where: { codigo } });
};

export const createPeriodoLectivo = async (periodoLectivoData: any) => {
    return await PeriodoLectivo.create(periodoLectivoData);
};

export const updatePeriodoLectivo = async (id: number, updatedData: any) => {
    const periodoLectivo = await PeriodoLectivo.findByPk(id);
    if (!periodoLectivo) {
        throw new Error('Periodo Lectivo no encontrado');
    }
    const allowedData = excludeFields(updatedData);
    await periodoLectivo.update(allowedData);
    return await PeriodoLectivo.findByPk(id, {
        attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'estado'] }
    });
};

export const deletePeriodoLectivo = async (id: number) => {
    const periodoLectivo = await PeriodoLectivo.findByPk(id);
    if (!periodoLectivo) {
        throw new Error('Periodo Lectivo no encontrado');
    }
    const newCodigo = `${periodoLectivo.get('codigo')}_deleted_${Date.now()}`;
    return await periodoLectivo.update({ estado: false, codigo: newCodigo });
};