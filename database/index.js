
const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js');
const connection = new Sequelize(dbConfig);
const User = require('../models/User.js')

User.init(connection);
module.exports = connection;