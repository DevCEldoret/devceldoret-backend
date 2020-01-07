import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { eventRoutes } from "./routes/event";
import { createConn } from "./Utils/dbConnection";
import { locationRoutes } from "./routes/location";
import { TestRoute } from "./routes/index";

class App {
  public app: express.Application;
  public test: TestRoute = new TestRoute();
  public events: eventRoutes = new eventRoutes();
  public locations: locationRoutes = new locationRoutes();

  constructor() {
    this.app = express();
    this.config();
    this.test.routes(this.app);
    this.events.routes(this.app);
    this.locations.routes(this.app);
    createConn().then(async () => {
      this.app;
    });
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cors());
  }
}

export default new App().app;
