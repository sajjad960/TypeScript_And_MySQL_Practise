const Sequelize = require('sequelize');


const DB = 'testdb';
const USER = 'root';
const PASSWORD = 'sajjad960';
const HOST = 'localhost';
const DIALECT = 'mysql';
const PORT = 3306;

const CONNECTION = new Sequelize (
    DB,
    USER, 
    PASSWORD, 
    {
        host: HOST,
        dialect: DIALECT,
        port: PORT,
    }
)

CONNECTION.authenticate().then(() => console.log('Database connection successful')).catch((err) => console.log('Database connection fail', err));

