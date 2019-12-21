require('dotenv').config()
const Sequelize = require('sequelize')
//import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
process.env.DEV_DATABASE_URL
)
//console.log(process.env.DEV_DATABASE_URL)
module.exports = sequelize;