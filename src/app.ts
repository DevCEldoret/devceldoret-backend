import * as express from "express";
import * as bodyParser from "body-parser";
import { userRoutes } from "./routes/userRoutes";
import { createConn } from "./Utils/dbConnection";

class App {
  public app: express.Application;
  public route: userRoutes = new userRoutes();

  constructor() {
    this.app = express();
    this.config();
    this.route.routes(this.app);
    createConn().then(async () => {
      this.app;
    });
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App().app;
