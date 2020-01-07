import { app, request, expect, baseUrl } from "./testConfig";
import { testEvent, testLocation } from "../Utils/testHelpers";
describe("Events", () => {
  describe("POST /api/v1/events", () => {
    it("should create an event", async () => {
      try {
        /**create location */
        await request(app)
          .post(`${baseUrl}locations`)
          .set("Accept", "application/json")
          .send(testLocation);

        /**create event */
        let { body } = await request(app)
          .post(`${baseUrl}events`)
          .set("Accept", "application/json")
          .send(testEvent);

        /** Tests */
        expect(body.status).to.eql(201);
      } catch (error) {}
    });
  });

  describe("GET /api/v1/events", () => {
    it("should create an event", async () => {
      try {
        let { body } = await request(app)
          .get(`${baseUrl}events`)
          .set("Accept", "application/json");

        /** Tests */
        expect(body.status).to.eql(200);
        expect(body).to.have.property("name");
        expect(body).to.have.property("description");
        expect(body).to.have.property("start_datetime");
        expect(body).to.have.property("end_datetime");
        expect(body).to.have.property("rsvp_link");
      } catch (error) {}
    });
  });
});
