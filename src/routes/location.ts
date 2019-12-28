import { Router } from "express";
import  { getLocations, createLocation, getLocationById, updateLocationById }  from "../controllers/location";

const router = Router();

router.get("/", getLocations);
router.get("/:id", getLocationById);
router.post("/", createLocation);
router.put("/:id", updateLocationById);

export default router;
