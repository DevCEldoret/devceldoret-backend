import { Router } from "express";
import EventsController from "../controllers/eventController";

const router = Router();

router.get("/events", EventsController.getEvents);

export default router;
