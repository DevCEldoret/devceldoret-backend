import { Router } from "express";
import EventController from "../controllers/event-controller";

const router = Router();

router.get("/event", EventController.getEvents);

export default router;
