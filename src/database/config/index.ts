import { config } from 'dotenv';
config();

import { Sequelize } from 'sequelize';

const {
  HOST,
  DATABASE,
  USERNAME,
  PASSWORD,
} = process.env;

const sequelize = new Sequelize(
  DATABASE,
  USERNAME,
  PASSWORD,
  {
    host: HOST,
    dialect: 'postgres',
    define: {
      underscored: true,
      timestamps: true,
    }
  }
)

export default sequelize;