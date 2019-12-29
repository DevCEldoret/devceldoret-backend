const path = __dirname+ "/src/config/.env";
console.log(path);
const config = require('dotenv-safe')
.config({path: path}).required;

module.exports = {
    type: config.type,
    host: config.host,
    port: config.port,
    username: config.user,
    password: config.pass,
    database: config.db,
    entities: [
        __dirname + "/src/models/*.ts"
    ],
    logging: true,
    extra: {
        "connectionLimit": 20
    },
    migrationsRun: true,
    migrations: ["migrations/*.js"],
    cli: {
        migrationsDir: "migrations"
    }
}
