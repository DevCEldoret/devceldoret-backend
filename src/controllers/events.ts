const Event = require ("../database/models/event");


class EventController{
  static async getEvents(_req:any, res:any, next:any){
    try {
      const events = await Event.findAll();
      res.json({
        status: 'success',
        data: events,
      });
    } catch (error) {
      next(error);
    }
  }
};


export default EventController;