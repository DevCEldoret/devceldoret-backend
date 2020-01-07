import { Request, Response, NextFunction } from "express";
import Location from "../models/locations";
import { getRepository } from "typeorm";
import prompt from "../Utils/apiResponses";

export async function getLocations(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const locationRepository = getRepository(Location);
    const locations = await locationRepository.find();
    prompt.successWithPayload(res, 200, "Success", locations);
  } catch (error) {
    next(prompt.errorMessage(res, 400, error.message));
  }
}

export async function createLocation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { venue, city, street, country } = req.body;
    const location = new Location();
    location.venue = venue;
    location.country = country;
    location.city = city;
    location.street = street;

    const locationRepository = getRepository(Location);
    let newLocation = await locationRepository.save(location);
    if (newLocation) {
      prompt.successWithPayload(res, 201, "Created", newLocation);
    }
  } catch (error) {
    next(prompt.errorMessage(res, 400, error.message));
  }
}

export async function getLocation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const locationRepository = getRepository(Location);
    const locations = await locationRepository.findOne(id);
    prompt.successWithPayload(res, 200, "Success", locations);
  } catch (error) {
    next(prompt.errorMessage(res, 400, error.message));
  }
}
