require('dotenv').config()

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
process.env.DEV_DATABASE_URL
)

export default sequelize;