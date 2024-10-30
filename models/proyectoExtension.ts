import { DataTypes } from 'sequelize';
import db from '../db/connection';
import PeriodoLectivo from './periodoLectivo';

const ProyectoExtension = db.define('ProyectoExtension', {
    id: {
        type: DataTypes.BIGINT,
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
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    fechaFin: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    resolucion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    //para eliminacion logica
    estado:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    },
    // Foreign key for PeriodoLectivo
    periodoLectivoId: {
        type: DataTypes.BIGINT,
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