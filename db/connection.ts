import { Sequelize } from 'sequelize'; 

const db =new Sequelize('control-extension-db','root','admin',{
    host:'localhost',
    dialect:'postgres',

});
export default db;