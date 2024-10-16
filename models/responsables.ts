import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Persona from './persona';
import ProyectoExtension from './proyectoExtension';

const Responsables = db.define('Responsables', {
    id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    personaId: {
        type: DataTypes.NUMBER,
        references: {
            model: Persona,
            key: 'id'
        },
        allowNull: false
    },
    proyectoExtensionId: {
        type: DataTypes.NUMBER,
        references: {
            model: ProyectoExtension,
            key: 'id'
        },
        allowNull: false
    },
    horasExtension: {
        type: DataTypes.NUMBER,
        allowNull: true
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
});

Persona.belongsToMany(ProyectoExtension, { through: Responsables, foreignKey: 'personaId' });
ProyectoExtension.belongsToMany(Persona, { through: Responsables, foreignKey: 'proyectoExtensionId' });

export default Responsables;