import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Persona from './persona';

const Carrera = db.define('Carrera', {
    id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});

// Defining the relationship
Persona.hasMany(Carrera, {
    foreignKey: 'personaId',
    sourceKey: 'id'
});
Carrera.belongsTo(Persona, {
    foreignKey: 'personaId',
    targetKey: 'id'
});

export default Carrera;