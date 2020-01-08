import Event from "../models/events";
import { Request, Response, NextFunction } from "express";
import { getRepository, MoreThanOrEqual, LessThanOrEqual } from "typeorm";
import prompt from "../Utils/apiResponses";

export async function getEvents(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const eventsRepository = getRepository(Event);
    const events = await eventsRepository.find();
    prompt.successWithPayload(res, 200, "Success", events);
  } catch (error) {
    next(prompt.errorMessage(res, 400, error.message));
  }
}

export async function getUpcomingEvents(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const today = new Date();
    const eventsRepository = getRepository(Event);
    const events = await eventsRepository.find({
      where: { start_datetime: MoreThanOrEqual(today) }
    });
    prompt.successWithPayload(res, 200, "Success", events);
  } catch (error) {
    next(prompt.errorMessage(res, 400, error.message));
  }
}

export async function getPastEvents(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const yesterday = (d => new Date(d.setDate(d.getDate() - 1)))(new Date());
    const eventsRepository = getRepository(Event);
    const events = await eventsRepository.find({
      where: { start_datetime: LessThanOrEqual(yesterday) }
    });
    prompt.successWithPayload(res, 200, "Success", events);
  } catch (error) {
    next(prompt.errorMessage(res, 400, error.message));
  }
}

export async function createEvent(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const eventsRepository = getRepository(Event);
    let newEvent = await eventsRepository.save({ ...req.body });
    if (newEvent) {
      prompt.successWithPayload(res, 201, "Created", newEvent);
    }
  } catch (error) {
    next(prompt.errorMessage(res, 400, error.message));
  }
}
