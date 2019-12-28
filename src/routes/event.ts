import { Router } from "express";
import {
  getEvents,
  getUpcomingEvents,
  getPastEvents,
  createEvent
} from "../controllers/event";

const router = Router();

router.get("/", getEvents);
router.get("/upcoming", getUpcomingEvents);
router.get("/past", getPastEvents);
router.post("/", createEvent);

export default router;
