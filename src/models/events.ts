import Database from "../db/index";

class EventModel {
  static async getEvents() {
    const response = await Database.query('SELECT * FROM events ORDER BY id ASC', '',true).catch((error:any) => {
      throw new Error(error.message);
    });
    return response;
  }
}

export default EventModel;
