import { createUser, getUsers } from "../controllers/userController";

export class userRoutes {
  public routes(app): void {
    app.route("/api/v1/users").post(createUser);
    app.route("/api/v1/users").get(getUsers);
  }
}
