'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends sequelize_1.Model {
        static associate(models) {
            // define association here
        }
    }
    User.init({
        id: {
            type: DataTypes.STRING,
            // defaultValue:UUIDV4,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: {
                    msg: "Field can't be empty"
                },
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: {
                    msg: "Field can't be empty"
                },
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                notNull: {
                    msg: "Field can't be null"
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Field can't be null"
                }
            }
        },
        roles: {
            type: DataTypes.JSON,
            defaultValue: {
                "client": 2900
            },
            allowNull: true
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: "active"
        }
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};
