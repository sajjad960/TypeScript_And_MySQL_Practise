import { Sequelize, DataTypes } from 'sequelize';
import validator from 'validator';

const sequelize = new Sequelize;
// const sequelize = new Sequelize('testdb', 'root', 'sajjad960', {
//     host: 'localhost',
//     dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
//   });


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
        allowNull: false,
    },
    passwordConfirm: {
        type: DataTypes.STRING,
        allowNull: false,
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


User.create({
    name: "sajjad",
    email: "check@gmail.com",
    role: "admin",
    password: "sajjad5522",
    passwordConfirm: "sajjad5522"

}).then((data: any) => console.log(data)
)

export = User;