require("dotenv").config({ path: `${__dirname}/.env` });
import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(
process.env.DB
)

export default sequelize;