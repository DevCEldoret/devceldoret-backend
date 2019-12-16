// import Database from "../DB/index";
// import ErrorHandler from "../Utils/errorHandler";
// class GetEvent {
//   static async getEvents( id:number, title:string, eventLocation:string, startTime:any, endTime:any, media:string, speakers:string, eventInfo:string ) {
//     const values = [id, title, eventLocation, startTime, endTime, media, speakers , eventInfo];
//     const response = await Database.query('SELECT * FROM events WHERE id = $1', values).catch(
//       error => {
//         throw new ErrorHandler(error.message, 400);
//       }
//     );
//     if (!response) {
//       throw new Error("Event does not exist");
//     }
//     return response;
//   }
// }
// export default GetEvent;
//# sourceMappingURL=events.js.map