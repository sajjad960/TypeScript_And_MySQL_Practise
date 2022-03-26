import { Sequelize } from "sequelize";
import dotenv from "dotenv";


//geting env
dotenv.config({ path: `${__dirname}/config.env` });


// connecting to remote db
declare var process : {
    env: {
      NODE_ENV: string,
      DB_NAME: string,
      DB_USERNAME: string,
      DB_PASSWORD: string,
      DB_HOST: string

    }
  }

  // not finding .env need to fix
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize.authenticate().then(() => console.log('Database connection successful')).catch((err) => console.log('Database connection fail', err));
