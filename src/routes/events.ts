import express from "express";

import EventsController from "../controllers/events";

const eventsRouter = express.Router();

eventsRouter.get("/", EventsController.getEvents);

export default eventsRouter;
