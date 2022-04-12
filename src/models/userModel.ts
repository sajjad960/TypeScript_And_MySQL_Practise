const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize;

const User = sequelize.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: { type: DataTypes.STRING, allowNull: false, },
    role: {
        type: DataTypes.ENUM,
        values: ['admin', 'moderator', 'user']
    },
    password: DataTypes.STRING,
    passwordConfirm: {
        type: String,

    }
});

