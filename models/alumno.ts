import { Model, DataTypes } from 'sequelize';
import db from '../db/connection'; 
import Persona from './persona'; 


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
    // define el nombre de la tabla y los timestamps
}, {
    tableName: 'alumnos',
    timestamps: true,
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