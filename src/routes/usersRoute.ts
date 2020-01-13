import {
  getUsers,
  register,
  getUser,
  updateUser,
  deleteUser
} from "../controllers/userController";
import { Router } from "express";

const userRouter = Router();
userRouter.get("/users", getUsers);
userRouter.get("/users/:id", getUser);
userRouter.post("/users/register", register);
userRouter.patch("/users/:id", updateUser);
userRouter.delete("/users/:id", deleteUser);

export { userRouter };
