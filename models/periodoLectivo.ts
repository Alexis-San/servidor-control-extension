import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Facultad from './facultad';

const PeriodoLectivo = db.define('PeriodoLectivo', {
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    anio: {
        type: DataTypes.INTEGER,
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
    //para eliminacion logica
    estado:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    },
    facultadId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: Facultad,
            key: 'id'
        }
    }
}, {
    tableName: 'periodosLectivos',
    timestamps: true
});

PeriodoLectivo.belongsTo(Facultad, { foreignKey: 'facultadId' });

export default PeriodoLectivo;