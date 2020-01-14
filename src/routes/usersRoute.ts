import {
  getUsers,
  register,
  getUser,
  updateUser,
  deleteUser,
  login
} from "../controllers/userController";
import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware";

const userRouter = Router();
userRouter.get("/users", authMiddleware, getUsers);
userRouter.get("/users/:id", authMiddleware, getUser);
userRouter.post("/users/register", register);
userRouter.post("/users/login", login);
userRouter.patch("/users/:id", authMiddleware, updateUser);
userRouter.delete("/users/:id", authMiddleware, deleteUser);

export { userRouter };
