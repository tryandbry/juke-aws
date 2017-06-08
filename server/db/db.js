'use strict';
const path = require('path');
const chalk = require('chalk');
const Sequelize = require('sequelize');
//const DATABASE_URI = 'postgres://10.0.11.99/juke';
const DATABASE_URI = 'mysql01.czjyxj8uh93i.us-east-2.rds.amazonaws.com';
const {DB, USER, PW} = require('../../../juke.secrets');

console.log(chalk.yellow('Opening connection to PostgreSQL'));

// create the database instance
/*
module.exports = new Sequelize(DATABASE_URI, {
  logging: false, // set to console.log to see the raw SQL queries
  native: true // lets Sequelize know we can use pg-native for ~30% more speed
});
*/

module.exports = new Sequelize(DB,USER,PW,{
  logging: false,
  host: DATABASE_URI,
  port: 3306,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});
