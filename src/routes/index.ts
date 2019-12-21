import express from "express";

import eventsRouter from "./events";

const router = express.Router();

router.use('/events', eventsRouter);

export default router;