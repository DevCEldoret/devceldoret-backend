import { Request, Response, NextFunction } from "express";
import Role from "../models/roleModel";
import { getRepository } from "typeorm";

export async function getRoles(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const roles = await getRepository(Role).find();
    res.status(200).send({ status: 200, message: "OK", roles: roles });
  } catch (error) {
    next(res.status(200).send({ status: 400, message: error.message }));
  }
}

export async function createRole(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    let newRole = await getRepository(Role).save({ ...req.body });
    if (newRole) {
      res.status(201).send({ status: 201, message: "Created", role: newRole });
    }
  } catch (error) {
    next(res.status(200).send({ status: 400, message: error.message }));
  }
}

export async function getRole(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const role = await getRepository(Role).findOne(id);
    res.status(200).send({ status: 200, message: "OK", role: role });
  } catch (error) {
    next(res.status(200).send({ status: 400, message: error.message }));
  }
}
