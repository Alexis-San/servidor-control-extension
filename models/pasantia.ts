import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Persona from './persona';
import PeriodoLectivo from './periodoLectivo';

const Pasantia = db.define('Pasantia', {
    id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    facultad_encargado: {
        type: DataTypes.NUMBER,
        allowNull: false,
        references: {
            model: Persona,
            key: 'id'
        }
    },
    empresa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    empresa_encargado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    carga_horaria: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    resolucion: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Define the 1:1 relationship with PeriodoLectivo
Pasantia.belongsTo(PeriodoLectivo, {
    foreignKey: {
        allowNull: false
    }
});

export default Pasantia;