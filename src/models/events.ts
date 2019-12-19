import Database from "../db/index";
import ErrorHandler from "../Utils/errorHandler";

class EventModel {
  static async getEvents( id:number, title:string, location:Array<string>,description:string, startTime:any, endTime:any, mediaLink:string, speakers:Array<string> ) {
    const values = [id, title, location, description, startTime, endTime, mediaLink, speakers ];
    const response = await Database.query('SELECT * FROM events WHERE id = $1', values).catch(
      error => {
        throw new ErrorHandler(error.message, 400);
      }
    );
    if (!response) {
      throw new Error("Event does not exist");
    }
    return response;
  }
}

export default EventModel;
