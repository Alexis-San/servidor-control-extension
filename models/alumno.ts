import { Model, DataTypes } from 'sequelize';
import db from '../db/connection'; // Ajusta la ruta a tu archivo de base de datos
import Persona from './persona'; // Ajusta la ruta a tu modelo Persona


// Define el modelo Alumno
const Alumno = db.define('Alumno', {
    personaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    extensionTotal: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    // Agrega otros atributos según sea necesario
}, {
    tableName: 'alumnos',
    timestamps: false,
});

// Establece la relación
Persona.hasOne(Alumno, {
    foreignKey: 'personaId',
    as: 'alumno'
});
Alumno.belongsTo(Persona, {
    foreignKey: 'personaId',
    as: 'persona'
});


export default Alumno;