import express from "express";
import bodyParser from "body-parser";
import "reflect-metadata";
<<<<<<< Updated upstream
import { createConnection, getConnection } from "typeorm";
import routes from "./routes";
import errorHandler from "./Utils/error-handler";
=======
import errorHandler from "./Utils/error-handler";
import connection from "./connection";
>>>>>>> Stashed changes

const app = express();
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.json({ message: "Server starts successfully!" });
});

// routes
app.use("/api/v1", routes);

// CORS
app.use(cors());

// error handler
app.use(errorHandler);

app.set("port", process.env.PORT || "3000");

app.listen(process.env.PORT || "3000", () => {
  console.log("app is running on port ", process.env.PORT || "3000");
});

init();

export default async function init() {
  let connection;
  try {
    connection =  await createConnection();
  } catch(e) {
    console.error(`The following error was caught: ${e.message}`);
    connection = getConnection();
  }
  return app;
};
