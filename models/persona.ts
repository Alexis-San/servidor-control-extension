import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Persona=db.define('Persona', {
    id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    apellido:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    ci:{
        type:DataTypes.STRING,
        allowNull: false,
    },
        
    //para eliminacion logica
    estado:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }
    
});

export default Persona;