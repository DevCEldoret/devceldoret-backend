import EventModel from "../models/events";


async function getEvents(_req: any, res: any, next: any) {
  try {
    const events = await EventModel.getEvents(1, "Community Challenge", ["Sirikwa Hotel","Oloo Street","Eldoret"],"Join us as we celebrate a year of growth and collaboration", '2019-08-15 21:05:15.723336+07', '2019-08-15 21:05:15.723336+07', "https://photos.app.goo.gl/323EcdkmFTzrfLd96",  ["Marvin Kweyu","Django Developer","Lorem ipsum dolor sit amet, consectetur adipiscing elit."]);
    const data = [...events];
    res.status(200).json({
      status: "success",
      data
    });
  } catch (error) {
    next(error);
  }
}



export default getEvents;
