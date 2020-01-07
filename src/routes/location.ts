import {
  getLocations,
  createLocation,
  getLocation
} from "../controllers/location";

const baseUrl = "/api/v1/";

export class locationRoutes {
  public routes(app): void {
    app.route(`${baseUrl}locations`).post(createLocation);
    app.route(`${baseUrl}locations`).get(getLocations);
    app.route(`${baseUrl}locations/:id`).get(getLocation);
  }
}
