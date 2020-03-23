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
import validationMiddleware from "../middleware/validation.middleware";
import CreateUserDto from "../dtos/userDto";

const userRouter = Router();
userRouter.get("/users", authMiddleware, getUsers);
userRouter.get("/users/:id", authMiddleware, getUser);
userRouter.post("/users/register", validationMiddleware(CreateUserDto),register);
userRouter.post("/users/login", login);
userRouter.patch("/users/:id", authMiddleware, updateUser);
userRouter.delete("/users/:id", authMiddleware, deleteUser);

export { userRouter };
