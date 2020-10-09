const config = require("dotenv-safe").config().required;
module.exports = {
  type: config.DB_TYPE,
  host: config.HOST,
  database: config.DB,
  port: config.DB_PORT,
  username: config.DB_USER,
  password: config.DB_PASSWORD,
  entities: ["src/models/*.ts"],
  migrations: ["src/migration/*.ts"],
  logging: true,
  synchronize: false,
  migrationsRun: true,
  cli: {
    migrationsDir: "src/migration",
    entitiesDir: "src/models"
  },
  extra: {
    connectionLimit: 20
  }
};
