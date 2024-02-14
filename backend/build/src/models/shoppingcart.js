'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class shoppingCart extends Model {
        static associate(models) {
            // define association here
        }
    }
    shoppingCart.init({
        products: DataTypes.JSON
    }, {
        sequelize,
        modelName: 'shoppingCart',
    });
    return shoppingCart;
};
