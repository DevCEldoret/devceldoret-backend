import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import User from "../models/userModel";

export async function register(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = req.body;
    const user = await getRepository(User).save({ ...data });
    if (user) {
      res.status(201).send({ status: 201, message: "Created", user: user });
    }
  } catch (error) {
    next(error);
  }
}

export async function getUsers(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const users = await getRepository(User).find();
    res.status(200).send({ status: 200, message: "OK", users: users });
  } catch (error) {
    next(error);
  }
}

export async function getUser(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const user = await getRepository(User).findOne(id);
    res.status(200).send({ status: 200, message: "OK", user: user });
  } catch (error) {
    next(error);
  }
}

export async function updateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = req.params.id;
    const data = req.body;
    const user = await getRepository(User).update(id, { ...data });
    res.status(200).send({ status: 200, message: "OK", user: user });
  } catch (error) {
    next(error);
  }
}

export async function deleteUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = req.params.id;
    const user = await getRepository(User).delete(id);
    res.status(200).send({ status: 200, message: "OK", user: user });
  } catch (error) {
    next(error);
  }
}
