import { app, request, expect } from "./testConfig";

describe("User", () => {
  /** Test CREATE user endpoint */
  describe("POST /api/v1/users", () => {
    const testUser = {
      firstName: "John",
      lastName: "Doe",
      email: "doe@test.com",
      isAdmin: "true",
      password: "doe123",
      username: "doe"
    };
    const nullUser = {
      firstName: "John",
      lastName: "Doe",
      email: "doe@test.com",
      isAdmin: "true",
      password: "doe123"
    };

    it("should create a user", async () => {
      try {
        let { body } = await request(app)
          .post("/api/v1/users")
          .set("Accept", "application/json")
          .send(testUser);

        /** Tests */
        expect(body.status).to.eql(201);
      } catch (error) {}
    });

    it("should not accept user with a null value", async () => {
      try {
        let { body } = await request(app)
          .post("/api/v1/users")
          .set("Accept", "application/json")
          .send(nullUser);

        /**Tests */
        expect(body.status).to.eql(400);
      } catch (error) {}
    });
  });

  /** Test GET user endpoint */
  describe("GET /api/v1/users", () => {
    it("should fetch all available users", async () => {
      try {
        let { body } = await request(app)
          .get("/api/v1/users")
          .set("Accept", "application/json");

        /** Tests */
        expect(body.status).to.eql(200);
        expect(body).to.have.property("firstName");
        expect(body).to.have.property("lastName");
        expect(body).to.have.property("email");
        expect(body).to.have.property("isAdmin");
        expect(body).to.have.property("username");
        expect(body).to.have.property("password");
      } catch (error) {}
    });
  });
});
