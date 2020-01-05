import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import { conn } from "../Utils/dbConnection";
import { User } from "../entity/user";
import prompt from "../Utils/apiResponses";

export const createUser = async (req: Request, res: Response) => {
  try {
    const userRepo = getRepository(User, await conn());
    const {
      firstName,
      lastName,
      email,
      isAdmin,
      username,
      password
    } = req.body;

    let user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.isAdmin = isAdmin;
    user.username = username;
    user.password = password;

    let payload = await userRepo.save(user);
    if (payload) {
      prompt.successWithPayload(res, 201, "Created", payload);
    }
  } catch (error) {
    prompt.errorMessage(res, 400, error.message);
  }
};

export async function getUsers(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userRepo = getRepository(User, await conn());
    const users = await userRepo.find();
    prompt.successWithPayload(res, 200, "Ok", users);
  } catch (error) {
    next(error);
  }
}
