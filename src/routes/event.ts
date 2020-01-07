
import {
  getEvents,
  getUpcomingEvents,
  getPastEvents,
  createEvent
} from "../controllers/event";

const baseUrl = "/api/v1/";

export class eventRoutes {
  public routes(app): void {
    app.route(`${baseUrl}events`).post(createEvent);
    app.route(`${baseUrl}events`).get(getEvents);
    app.route(`${baseUrl}events/upcoming`).get(getUpcomingEvents);
    app.route(`${baseUrl}events/past`).get(getPastEvents);
  }
}
