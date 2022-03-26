import { Sequelize } from "sequelize/types";
import dotenv from "dotenv";

console.log('hello world');

//geting env
// dotenv.config({ path: `${__dirname}/src/config.env` });


// // connecting to remote db
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
//     host: process.env.DB_HOST,
//     dialect: "mysql" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
// });

// sequelize.authenticate().then(() => console.log('Database connection successful')).catch((err) => console.log('Database connection fail', err));
