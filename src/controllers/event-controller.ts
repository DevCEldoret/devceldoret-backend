import EventModel from "../models/events";


async function getEvents(_req: any, res: any, next: any) {
  try {
    const events = await EventModel.getEvents();
    const data = [...events];
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
}



export default getEvents;
