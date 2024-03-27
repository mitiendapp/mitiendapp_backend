'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Client extends sequelize_1.Model {
        static associate(models) {
            // define association here
            this.belongsTo(models.User);
        }
    }
    Client.init({
        document: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            unique: true,
            validate: {
                notNull: {
                    msg: "field can't be null"
                }
            }
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                notNull: {
                    msg: "field can't be null"
                }
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                notNull: {
                    msg: "field can't be null"
                }
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
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
    }, {
        sequelize,
        modelName: 'Client',
    });
    return Client;
};
