import { Response, Request, Router } from "express";
import prompt from "../Utils/apiResponses";

const homeRouter = Router();
homeRouter.get("/", (req: Request, res: Response) => {
  prompt.successMessage(res, 200, "Server successfully running");
});

export { homeRouter };
