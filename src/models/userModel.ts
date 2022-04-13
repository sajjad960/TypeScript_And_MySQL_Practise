import { Sequelize, DataTypes } from 'sequelize';
import validator from 'validator';

const sequelize = new Sequelize;


const User = sequelize.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please tell us your name',
            },
        }
    },
    email: {
        type: DataTypes.STRING, allowNull: false, unique: true,
        validate: {
            isEmail: {
                msg: 'Not a valid email address',
            },
            notNull: {
                msg: 'Email is required',
            },
        }
    },
    role: {
        type: DataTypes.ENUM,
        values: ['admin', 'moderator', 'user'],
        defaultValue: 'user',
    },
    password: {
        type: DataTypes.STRING,
        validate: {
            notNull: {
                msg: 'Please Provide a password',
            },
        }
    },
    passwordConfirm: {
        type: DataTypes.STRING,
        validate: {
            function(el: any) {
                return el === this.password
            },
            notNull: {
                msg: 'Please Confirm Your Password',
            },
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

