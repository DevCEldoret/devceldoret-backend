import { app, request, expect, BASE_URL } from "./testConfig";
import { testRole, testNullRole } from "../Utils/testHelpers";
describe("Roles", () => {
  describe("POST /api/v1/locations", () => {
    it("should create a role", async () => {
      try {
        /** Create role */
        let { body } = await request(app)
          .post(`${BASE_URL}/roles`)
          .set("Accept", "application/json")
          .send(testRole);

        /** Tests */
        expect(body.status).to.eql(201);
      } catch (error) {}
    });
  });

  it("should not accept a null value", async () => {
    try {
      let { body } = await request(app)
        .post(`${BASE_URL}/roles`)
        .send(testNullRole);

      /**Test */
      expect(body).to.have.property(
        "message",
        "No repository for 'Role' was found. Looks like this entity is not registered in current 'default' connection?"
      );
    } catch (error) {}
  });

  describe("GET /api/v1/roles", () => {
    it("should retrieve all roles", async () => {
      try {
        let { body } = await request(app)
          .get(`${BASE_URL}/roles`)
          .set("Accept", "application/json");

        /** Tests */
        expect(body.status).to.eql(200);
        expect(body).to.have.property("roleName");
      } catch (error) {}
    });
  });
});
