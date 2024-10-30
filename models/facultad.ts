import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Persona from './persona';

const Facultad = db.define('Facultad', {
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    decano: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'facultades',
    timestamps: true,});

// Relaciones
Facultad.hasMany(Persona, {
    foreignKey: 'facultadId',
    sourceKey: 'id'
});

Persona.belongsTo(Facultad, {
    foreignKey: 'facultadId',
    targetKey: 'id'
});

export default Facultad;