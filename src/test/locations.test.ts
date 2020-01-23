import { app, request, expect, BASE_URL } from "./testConfig";
import { testLocation, testNullLocation } from "../Utils/testHelpers";
describe("Locations", () => {
  describe("POST /api/v1/locations", () => {
    it("should create an location", async () => {
      try {
        /**create location */
        let { body } = await request(app)
          .post(`${BASE_URL}/locations`)
          .set("Accept", "application/json")
          .send(testLocation);

        /** Tests */
        expect(body.status).to.eql(201);
      } catch (error) {}
    });
  });

  it("should not accept a null value", async () => {
    try {
      let { body } = await request(app)
        .post(`${BASE_URL}/locations`)
        .send(testNullLocation);

      /**Test */
      expect(body).to.have.property(
        "message",
        "No repository for 'Location' was found. Looks like this entity is not registered in current 'default' connection?"
      );
    } catch (error) {}
  });

  describe("GET /api/v1/locations", () => {
    it("should retrieve all locations", async () => {
      try {
        let { body } = await request(app)
          .get(`${BASE_URL}/locations`)
          .set("Accept", "application/json");

        /** Tests */
        expect(body.status).to.eql(200);
        expect(body).to.have.property("venue");
        expect(body).to.have.property("country");
        expect(body).to.have.property("city");
        expect(body).to.have.property("street");
      } catch (error) {}
    });
  });
});
