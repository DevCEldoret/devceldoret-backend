import {
  getEvents,
  getUpcomingEvents,
  getPastEvents,
  createEvent
} from "../controllers/event";

import { Router } from "express";

const eventRouter = Router();

eventRouter.post("/events", createEvent);
eventRouter.get("/events", getEvents);
eventRouter.get("/events/upcoming", getUpcomingEvents);
eventRouter.get("/events/past", getPastEvents);

export { eventRouter };
