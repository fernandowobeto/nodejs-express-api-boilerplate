const { Sequelize } = require('sequelize');
const db = require('./database');

module.exports = new Sequelize(`postgres://${db.user}:${db.password}@${db.host}:${db.port}/${db.database}`);