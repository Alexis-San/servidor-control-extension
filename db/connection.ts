import { Sequelize } from 'sequelize';

import 'dotenv/config';
/*
const db = new Sequelize('control-extension-db', 'root', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
  dialectOptions: {
    useUTC: false, // for reading from database
    dateStrings: true,
    typeCast: true,
    timezone: 'America/Asuncion',
  },
  timezone: 'America/Asuncion', // for writing to database
});
*/
console.log(process.env.DB_URL);

const db = new Sequelize(process.env.DB_URL||'', {
  dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        supportBigNumbers: true,
        ssl: {
          rejectUnauthorized: false, // Trust the self-signed certificate
        }
    }
});

export default db;