import Location from "../models/locations";
import connection from "../connection";
import { Request, Response, NextFunction } from 'express';

export async function getLocations(_req: Request, res: Response, next: NextFunction) {
  const conn = await connection;
  const locations = await conn.manager.find(Location);
  res.send(locations);
  }


export async function createLocation(_req: Request, res:Response, next: NextFunction) {
  const conn = await connection;
  const location = new Location();
  const {venue, city, street, country} = _req.body
  location.venue = venue;
  location.country = country;
  location.city = city;
  location.street = street;
  await conn.manager.save(location);
  res.status(201).send(location);
}


export async function getLocationById(_req: Request, res:Response, next: NextFunction) {
  const { id } = _req.params;
  const conn = await connection;
  const location = await conn.manager.findOne(Location,id);
  location ? res.status(200).send(location) : res.status(404).send({'error': 'Not found'})

}

export async function updateLocationById(_req: Request, res:Response, next: NextFunction) {
  const {id} = _req.params;
  const {venue, city, country, street} = _req.body;
  const conn = await connection;
  const location = new Location();
  location.id = parseInt(id);
  location.venue = venue;
  location.country = country;
  location.city = city;
  location.street = street;
  const updatedLocation = await conn.manager.save(location);
  res.status(200).send(updatedLocation);
}