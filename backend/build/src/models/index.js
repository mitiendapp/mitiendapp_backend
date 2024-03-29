'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const _process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../../config/config.json');
const db = {};
// import dotenv from 'dotenv';
//:#:#:#:#:#:#
//h
//
// dotenv.config();
let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
}
else {
    sequelize = new Sequelize(config.production.database, config.production.username, config.production.password, { host: config.production.host, dialect: config.production.dialect });
}
fs
    .readdirSync(__dirname)
    .filter((file) => {
    return (file.indexOf('.') !== 0 &&
        file !== basename &&
        file.slice(-3) === '.js' &&
        file.indexOf('.test.js') === -1);
})
    .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
});
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
exports.default = db;
