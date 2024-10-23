import { Sequelize } from 'sequelize'; 

const db =new Sequelize('control-extension-db','root','admin',{
    host:'localhost',
    dialect:'postgres',
    timezone: '-03:00'
});
export default db;