'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/config.json')[env];
const db = {};

// console.log('Current environment:', env);
// console.log('Configuration:', config);

if (!config) {
  throw new Error(`Configuration for environment ${env} not found`);
}

// Create Sequelize instances for each database
let sequelizeMain = new Sequelize(
  config.main.database,
  config.main.username,
  config.main.password,
  {
    host: config.main.host,
    dialect: config.main.dialect,
    port: config.main.port,
  }
);

let sequelizeCenterDB = new Sequelize(
  config.fourinsure_insured.database,
  config.fourinsure_insured.username,
  config.fourinsure_insured.password,
  {
    host: config.fourinsure_insured.host,
    dialect: config.fourinsure_insured.dialect,
    port: config.fourinsure_insured.port,
  }
);

// Load models for the main database
const loadModels = (sequelizeInstance, dbObject) => {
  fs.readdirSync(__dirname)
    .filter((file) => {
      return (
        file.indexOf('.') !== 0 &&
        file !== basename &&
        file.slice(-3) === '.js' &&
        file.indexOf('.test.js') === -1
      );
    })
    .forEach((file) => {
      const model = require(path.join(__dirname, file))(sequelizeInstance, Sequelize.DataTypes);
      dbObject[model.name] = model;
    });

  Object.keys(dbObject).forEach((modelName) => {
    if (dbObject[modelName].associate) {
      dbObject[modelName].associate(dbObject);
    }
  });
};

const dbMain = {};
const dbCenterDB = {};

loadModels(sequelizeMain, dbMain);
loadModels(sequelizeCenterDB, dbCenterDB);

dbMain.sequelize = sequelizeMain;
dbMain.Sequelize = Sequelize;

dbCenterDB.sequelize = sequelizeCenterDB;
dbCenterDB.Sequelize = Sequelize;

module.exports = { dbMain, dbCenterDB };