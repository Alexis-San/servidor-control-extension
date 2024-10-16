import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Responsable from './responsables';

const Rol = db.define('Rol', {
    id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.ENUM('Director', 'Coordinador', 'Alumno'),
        allowNull: false,
        unique: true
    }
});
Rol.hasMany(Responsable, {
    foreignKey: 'rolId',
    sourceKey: 'id'
});

Responsable.belongsTo(Rol, {
    foreignKey: 'rolId',
    targetKey: 'id'
});

export default Rol;