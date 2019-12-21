import express from "express";
const EventController = require("../controllers/events");

const eventsRouter = express.Router();

eventsRouter.get("/", EventController.getEvents);

module.exports = eventsRouter;
