import Location from "../models/locations";
import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";

export async function getLocations(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const locationRepository = getRepository(Location);
    const locations = await locationRepository.find();
    res.send(locations);
  } catch (err) {
    next(err);
  }
}

export async function createLocation(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const locationRepository = getRepository(Location);
    await locationRepository.save({ ..._req.body });
    res.status(201).send(location);
  } catch (err) {
    next(err);
  }
}

export async function getLocationById(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = _req.params;
    const locationRepository = getRepository(Location);
    const location = await locationRepository.findOne(id);
    res.status(200).send(location);
  } catch (err) {
    next(err);
  }
}

export async function updateLocationById(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const locationRepository = getRepository(Location);
    const updatedLocation = await locationRepository.save({ ..._req.body });
    res.status(200).send(updatedLocation);
  } catch (err) {
    next(err);
  }
}
