'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Product extends sequelize_1.Model {
        static associate(models) {
            Product.belongsTo(models.Company, {
                foreignKey: {
                    allowNull: false,
                    name: 'companyId',
                },
            });
        }
    }
    Product.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                notNull: {
                    msg: "field can't null"
                }
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "field can't null"
                }
            }
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "field can't null"
                }
            }
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "field can't null"
                }
            }
        },
        stock: {
            type: DataTypes.BIGINT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "field can't null"
                }
            }
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'Product',
    });
    return Product;
};
