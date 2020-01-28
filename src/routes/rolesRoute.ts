import { getRole, getRoles, createRole } from "../controllers/roleController";
import { Router } from "express";

const roleRouter = Router();
roleRouter.post("/roles", createRole);
roleRouter.get("/roles", getRoles);
roleRouter.get("/roles/:id", getRole);

export { roleRouter };
