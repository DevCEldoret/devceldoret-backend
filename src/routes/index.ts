import express from "express";

import eventsRouter from "./event";

const router = express.Router();

router.use('/events', eventsRouter);

export default router;