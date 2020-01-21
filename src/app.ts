import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { createConn } from "./Utils/dbConnection";
import { locationRouter } from "./routes/locationRoute";
import { userRouter } from "./routes/usersRoute";
import { homeRouter } from "./routes/index";
import { eventRouter } from "./routes/eventRoute";
import { BASE_URL } from "./Utils/constants";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    createConn().then(async () => {
      this.app;
    });
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(BASE_URL, homeRouter);
    this.app.use(BASE_URL, eventRouter);
    this.app.use(BASE_URL, locationRouter);
    this.app.use(BASE_URL, userRouter);
    this.app.use(cors());
  }
}

export default new App().app;
