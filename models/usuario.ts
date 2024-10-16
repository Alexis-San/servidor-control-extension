import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Persona from './persona';

const Usuario = db.define('Usuario', {
    id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    ci: {
        type: DataTypes.NUMBER,
        allowNull: false,
        references: {
            model: Persona,
            key: 'ci'
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo: {
        type: DataTypes.ENUM('Admin', 'User'),
        allowNull: false
    }
});

Persona.hasOne(Usuario, {
    foreignKey: 'ci',
    sourceKey: 'ci'
});

Usuario.belongsTo(Persona, {
    foreignKey: 'ci',
    targetKey: 'ci'
});

export default Usuario;