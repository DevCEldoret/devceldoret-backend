import Event from "../models/events";
import { Request, Response, NextFunction } from "express";
import { MoreThanOrEqual, LessThanOrEqual, getRepository } from "typeorm";

export async function getEvents(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const eventRepository = getRepository(Event);
    const events = await eventRepository.find();
    res.status(200).send(events);
  } catch (err) {
    next(err);
  }
}

export async function getUpcomingEvents(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const eventRepository = getRepository(Event);
    const today = new Date();
    const events = await eventRepository.find({
      where: { start_datetime: MoreThanOrEqual(today) }
    });
    res.status(200).send(events);
  } catch (err) {
    next(err);
  }
}

export async function getPastEvents(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const eventRepository = getRepository(Event);
    const yesterday = (d => new Date(d.setDate(d.getDate() - 1)))(new Date());
    const events = await eventRepository.find({
      where: { start_datetime: LessThanOrEqual(yesterday) }
    });
    res.status(200).send(events);
  } catch (err) {
    next(err);
  }
}

export async function createEvent(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const eventRepository = getRepository(Event);
    const newEvent = await eventRepository.save({ ..._req.body });
    res.status(201).send(newEvent);
  } catch (err) {
    next(err);
  }
}
