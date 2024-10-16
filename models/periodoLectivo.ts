import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Facultad from './facultad';

const PeriodoLectivo = db.define('PeriodoLectivo', {
    id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    anio: {
        type: DataTypes.INTEGER,
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
    facultadId: {
        type: DataTypes.NUMBER,
        allowNull: false,
        references: {
            model: Facultad,
            key: 'id'
        }
    }
}, {
    tableName: 'periodos_lectivos',
    timestamps: true
});

PeriodoLectivo.belongsTo(Facultad, { foreignKey: 'facultadId' });

export default PeriodoLectivo;