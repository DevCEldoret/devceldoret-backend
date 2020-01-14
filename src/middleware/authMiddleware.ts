const config = require("../Utils/config");
import RequestWithUser from "../interfaces/RequestWithUser";
import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import DataStoredInToken from "interfaces/DataStoredInTokenInterface";
import { getRepository } from "typeorm";
import User from "../models/userModel";

async function authMiddleware(
  req: RequestWithUser,
  _res: Response,
  next: NextFunction
) {
  const token = req.cookies.token || "";
  try {
    if (!token) {
      next("Token required");
    }
    const decode = jwt.verify(token, config.SECRET_KEY) as DataStoredInToken;
    const email = decode.email;
    const user = await getRepository(User).findOne({ email: email });
    if (user) {
      req.user = user;
      next();
    } else {
      next("Wrong authentication");
    }
  } catch (error) {
    next("Token expired");
  }
}

export default authMiddleware;
