import { DataTypes } from 'sequelize';
import db from '../db/connection';
import PeriodoLectivo from './periodoLectivo';

const ProyectoExtension = db.define('ProyectoExtension', {
    id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sintesis: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    unidadAcademica: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    areaTematica: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    unidadEjecutora: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fechaInicio: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    fechaFin: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    resolucion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // Foreign key for PeriodoLectivo
    periodoLectivoId: {
        type: DataTypes.NUMBER,
        allowNull: false,
        references: {
            model: PeriodoLectivo,
            key: 'id'
        }
    }
});

PeriodoLectivo.hasMany(ProyectoExtension, {
    foreignKey: 'periodoLectivoId',
    sourceKey: 'id'
});

ProyectoExtension.belongsTo(PeriodoLectivo, {
    foreignKey: 'periodoLectivoId',
    targetKey: 'id'
});

export default ProyectoExtension;