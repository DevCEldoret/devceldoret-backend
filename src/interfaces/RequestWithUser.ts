import { Request } from "express";
import UserInterface from "./UserInterface";

interface RequestWithUser extends Request {
  user: UserInterface;
}
export default RequestWithUser;
