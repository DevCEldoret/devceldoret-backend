import { app, request, expect, BASE_URL } from "./testConfig";
import { testEvent, testLocation, testNullEvent } from "../Utils/testHelpers";
describe("Events", () => {
  describe("POST /api/v1/events", () => {
    it("should create an event", async () => {
      try {
        /**create location */
        await request(app)
          .post(`${BASE_URL}/locations`)
          .set("Accept", "application/json")
          .send(testLocation);

        /**create event */
        let { body } = await request(app)
          .post(`${BASE_URL}/events`)
          .set("Accept", "application/json")
          .send(testEvent);

        /** Tests */
        expect(body.status).to.eql(201);
      } catch (error) {}
    });
  });

  it("should not accept a null value", async () => {
    try {
      let { body } = await request(app)
        .post(`${BASE_URL}/events`)
        .send(testNullEvent);
      /**Test */
      expect(body).to.have.property("message", "No repository for 'Event' was found. Looks like this entity is not registered in current 'default' connection?")
    } catch (error) {}
  });

  describe("GET /api/v1/events", () => {
    it("should retrieve all events", async () => {
      try {
        let { body } = await request(app)
          .get(`${BASE_URL}/events`)
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
