"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
//geting env
dotenv_1.default.config({ path: `${__dirname}/config.env` });
// not finding .env need to fix
const sequelize = new sequelize_1.Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});
sequelize.authenticate().then(() => console.log('Database connection successful')).catch((err) => console.log('Database connection fail', err));
//# sourceMappingURL=server.js.map