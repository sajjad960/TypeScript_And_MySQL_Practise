import { Sequelize } from "sequelize";
// import dotenv from "dotenv";
import app from './app';

// //geting env
// dotenv.config({ path: `${__dirname}/config.env` });



// // connecting to remote db START
// declare var process : {
//     env: {
//       NODE_ENV: string,
//       DB_NAME: string,
//       PORT: number,
//       DB_USERNAME: string,
//       DB_PASSWORD: string,
//       DB_HOST: string

//     }
//   }

// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
//     host: process.env.DB_HOST,
//     dialect: "mysql" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
// });
console.log("check");

const sequelize = new Sequelize('testdb', 'root', 'sajjad960', {
  host: 'localhost',
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize.authenticate().then(() => console.log('Database connection successful')).catch((err) => console.log('Database connection fail', err));
// connecting to remote db END

// Run our server
const port = 5001
app.listen(port, () => {
  console.log(`app running on the port ${port}`);
});