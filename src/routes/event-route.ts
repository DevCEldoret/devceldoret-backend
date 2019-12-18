import { Router } from "express";
import EventController from "../controllers/event-controller";

const router = Router();

router.get("/", EventController.getEvents);

export default router;
