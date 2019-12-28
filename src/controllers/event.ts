import Event from "../models/events";
import connection from "../connection";
import { Request, Response, NextFunction } from "express";
import { MoreThanOrEqual, LessThanOrEqual } from "typeorm";
import Speaker from "../models/speakers";
import Activities from "../models/activities";
import Perks from "../models/perks";

export async function getEvents(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  const conn = await connection;
  const events = await conn.manager.find(Event);
  res.status(200).send(events);
}

export async function getUpcomingEvents(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  const conn = await connection;
  const today = new Date();
  const events = await conn.manager.find(Event, {
    where: { start_datetime: MoreThanOrEqual(today) }
  });
  res.status(200).send(events);
}

export async function getPastEvents(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  const conn = await connection;
  const yesterday = (d => new Date(d.setDate(d.getDate() - 1)))(new Date());
  const events = await conn.manager.find(Event, {
    where: { start_datetime: LessThanOrEqual(yesterday) }
  });
  res.status(200).send(events);
}

export async function createEvent(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  const conn = await connection;
  const event = new Event();
  const {
    name,
    description,
    location,
    start_datetime,
    end_datetime,
    rsvp_link,
    activities,
    perks,
    speakers
  } = _req.body;
  event.name = name;
  event.description = description;
  event.start_datetime = start_datetime;
  event.end_datetime = end_datetime;
  event.rsvp_link = rsvp_link;
  event.location = location;
  event.speakers = speakers.map((speaker: number | Speaker) => getSpeakers(speaker));
  const newEvent = await conn.manager.save(event);
  res.status(201).send(newEvent);
}


async function getSpeakers(speaker: number | Speaker) {
  let result;
  const conn = await connection;
  if(typeof speaker === 'number') {
    result =  await conn.manager.findByIds(Speaker, [speaker]);
  } else {
    const newSpeaker = new Speaker();
    newSpeaker.first_name = speaker.first_name;
    newSpeaker.last_name = speaker.last_name;
    newSpeaker.gender = speaker.gender;
    console.log(newSpeaker);
    result = await conn.manager.save(newSpeaker);
  }
  return result;
}