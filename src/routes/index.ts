import express from "express";

const eventsRouter = require("./event");

const router = express.Router();

router.use('/events', eventsRouter);


module.exports = router;