import express from "express";
import EventController from "../controllers/events";

const eventsRouter = express.Router();

eventsRouter.get("/", EventController.getEvents);

export default eventsRouter;
