import { Router } from "express";
import  locationRoutes  from "./location";
import eventRoutes from "./event";

const router = Router();

router.use('/locations', locationRoutes);
router.use('/events', eventRoutes);

export default router;