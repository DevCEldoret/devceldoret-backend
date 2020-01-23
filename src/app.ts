import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import { createConn } from "./Utils/dbConnection";
import { locationRouter } from "./routes/locationRoute";
import { userRouter } from "./routes/usersRoute";
import { homeRouter } from "./routes/index";
import { eventRouter } from "./routes/eventRoute";
import { roleRouter } from "./routes/rolesRoute";
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
    this.app.use(cookieParser());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(BASE_URL, homeRouter);
    this.app.use(BASE_URL, eventRouter);
    this.app.use(BASE_URL, locationRouter);
    this.app.use(BASE_URL, userRouter);
    this.app.use(BASE_URL, roleRouter);
    this.app.use(cors());
  }
}

export default new App().app;
