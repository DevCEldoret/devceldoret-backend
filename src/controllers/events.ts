import { Sequelize } from "sequelize";

import Event from "../database/models/event";
import Location from "../database/models/location";
import { Response, NextFunction, Request } from "express";

class EventsController {
  static async getEvents(_req: Request, res: Response, next: NextFunction) {
    try {
      const events = await Event.findAll({
        include: [
          {
            model: Location,
            where: { id: Sequelize.col('event.location_id') },
          },
        ],
      });

      res.json({
        status: 'success',
        data: events,
      });
    } catch (error) {
      next(error);
    }
  }
};


export default EventsController;