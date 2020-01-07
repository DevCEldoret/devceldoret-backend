import { Response, Request } from "express";
import prompt from "../Utils/apiResponses";

const baseUrl = "/api/v1/";

export class TestRoute {
  public routes(app): void {
    app.route(`${baseUrl}`).get((_req: Request, res: Response) => {
      prompt.successMessage(res, 200, "Server successfully running");
    });
  }
}
