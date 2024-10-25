import Persona from '../models/persona';

export const getAllPersonas = async () => {
    return await Persona.findAll();
};

export const getPersonaById = async (id: number) => {
    return await Persona.findByPk(id);
};


export const createPersona = async (personaData:any) => {
    return await Persona.create(personaData);
};

export const updatePersona = async (id: number, updatedData: any) => {
    const persona = await Persona.findByPk(id);
    if (!persona) {
        throw new Error('Persona no encontrada');
    }
    return await persona.update(updatedData);
};

export const deletePersona = async (id: number) => {
    const persona = await Persona.findByPk(id);
    if (!persona) {
        throw new Error('Persona no encontrada');
    }
    return await persona.update({ estado: false });
};