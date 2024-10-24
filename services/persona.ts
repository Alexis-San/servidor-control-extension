import Persona from '../models/persona';

export const getAllPersonas = async () => {
    return await Persona.findAll();
};

export const createPersona = async (personaData:any) => {
    return await Persona.create(personaData);
};