import { Sequelize, DataTypes } from 'sequelize';
import validator from 'validator';

const sequelize = new Sequelize;


const User = sequelize.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    role: {
        type: DataTypes.ENUM,
        values: ['admin', 'moderator', 'user']
    },
    password: DataTypes.STRING,
    passwordConfirm: {
        type: DataTypes.STRING,
        validate: {
            validator: function (el: any) {
                return el === this.password
            }
        }

    },
    passwordChangedAt: {
        type: DataTypes.DATE,
    },
    passwordResetToken: DataTypes.STRING,
    passwordResetExpires: DataTypes.DATE,
    status: DataTypes.INTEGER,
    cratedAt: {
        type: DataTypes.DATE,
        defaultValue: Date.now
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },

});

