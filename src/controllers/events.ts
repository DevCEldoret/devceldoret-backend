import Sequelize, { DataTypes } from "sequelize";
const EventORM = require("../database/models/event");

console.log(EventORM)
class EventController{
  static async getEvents(_req:any, res:any, next:any){
    try {
      const events = await EventORM.findAll({
        where: {
          id: 1
        }
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


module.exports = EventController;