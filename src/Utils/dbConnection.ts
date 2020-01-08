import "reflect-metadata";
import { createConnection } from "typeorm";
const config = require("./config");
export const createConn = async () => {
  try {
    if (config.NODE_ENV === "test") {
      return createConnection({
        type: config.DB_TYPE,
        host: config.HOST,
        database: config.TEST_DB,
        port: config.DB_PORT,
        username: config.DB_USER,
        password: config.DB_PASSWORD,
        entities: ["dist/models/*.js"],
        migrations: ["dist/migration/*.js"],
        logging: false,
        synchronize: false,
        migrationsRun: true,
        cli: {
          migrationsDir: "src/migration",
          entitiesDir: "src/models"
        },
        extra: {
          connectionLimit: 20
        }
      });
    } else {
      return createConnection();
    }
  } catch (error) {
    console.log(`Error creating a connection to the database: ${error}`);
  }
};
