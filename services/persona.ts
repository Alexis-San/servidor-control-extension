import Persona from '../models/persona';

const excludeFields = (data: any) => {
    const { id, estado, createdAt, updatedAt, ...allowedData } = data;
    return allowedData;
};

export const getAllPersonas = async () => {
    return await Persona.findAll({
        where: {
            estado: true
        },
        attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'estado'] }
    });
};


export const getPersonaById = async (id: number) => {
    return await Persona.findOne({
        where: {
            id: id,
            estado: true
        },
        attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'estado'] }
    });
};

export const checkExistingPersonaByCi = async (ci: string) => {
    return await Persona.findOne({ where: { ci } });
};

export const checkExistingPersonaByEmail = async (email: string) => {
    return await Persona.findOne({ where: { email } });
};
export const createPersona = async (personaData: any) => {

    return await Persona.create(personaData);
};



export const updatePersona = async (id: number, updatedData: any) => {
    const persona = await Persona.findByPk(id);
    if (!persona) {
        throw new Error('Persona no encontrada');
    }
    const allowedData = excludeFields(updatedData);
    await persona.update(allowedData);
    return await Persona.findByPk(id, {
        attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'estado'] }
    });
};

export const deletePersona = async (id: number) => {
    const persona = await Persona.findByPk(id);
    if (!persona) {
        throw new Error('Persona no encontrada');
    }
    const newEmail = `${persona.get('email')}_deleted_${Date.now()}`;
    const newCi = `${persona.get('ci')}_deleted_${Date.now()}`;
    return await persona.update({ estado: false, email: newEmail, ci: newCi });
};