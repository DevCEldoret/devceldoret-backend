import EventModel from "../../src/database/models/events";

class EventController {
  static async getEvents(_req: any, res: any, next: any) {
    try {
      const events = await EventModel.getEvents();
      const data = [...events];
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  
}



export default EventController;