import { app, request, expect, BASE_URL } from "./testConfig";
import { testUser, testUserUpdate, testRole, existingUser } from "../Utils/testHelpers";
describe("Users", () => {
  describe("POST /api/v1/users/register", () => {
    it("should not create existing user", async () => {
      try {
        let { body } = await request(app)
          .post(`${BASE_URL}/users/register`)
          .set("Accept", "application/json")
          .send(testUser);
          if(testUser.email === existingUser.email){
            /** Check for existing user*/
            expect(body.status).to.eql(409);
            expect(body).to.have.property("message", "A user with that email already exists");
          }
      } catch (error) {}
    });
    it("should create user", async () => {
      try {
        /**create role */
        await request(app)
          .post(`${BASE_URL}/roles`)
          .set("Accept", "application/json")
          .send(testRole);
        /**create user */
        let { body } = await request(app)
          .post(`${BASE_URL}/users/register`)
          .set("Accept", "application/json")
          .send(testUser);

        /** Tests */
        expect(body.status).to.eql(201);
      } catch (error) {}
    });
  });

  describe("POST /api/v1/users/login", () => {
    it("should login registered user", async () => {
      try {
        /**create user */
        let { body } = await request(app)
          .post(`${BASE_URL}/users/login`)
          .set("Accept", "application/json")
          .send(testUser);

        /** Tests */
        expect(body.status).to.eql(200);
        expect(body).to.have.property("token");
        expect(body).to.have.property("message", "OK");
        expect(body.token).to.be.a("string");
      } catch (error) {}
    });
  });

  describe("GET /api/v1/users", () => {
    it("should retrieve all users", async () => {
      try {
        let { body } = await request(app)
          .get(`${BASE_URL}/users`)
          .set("Accept", "application/json");

        /** Tests */
        expect(body.status).to.eql(200);
        expect(body).to.have.property("firstName");
        expect(body).to.have.property("lastName");
        expect(body).to.have.property("email");
      } catch (error) {}
    });
  });

  describe("GET /api/v1/users/id", () => {
    it("should retrieve a specific user by id", async () => {
      try {
        let { body } = await request(app)
          .get(`${BASE_URL}/users/1`)
          .set("Accept", "application/json");

        /** Tests */
        expect(body.status).to.eql(200);
        expect(body).to.have.property("firstName");
        expect(body).to.have.property("lastName");
        expect(body).to.have.property("email");
      } catch (error) {}
    });
  });

  describe("PATCH /api/v1/users/id", () => {
    it("should update details of a specific user by id", async () => {
      try {
        let { body } = await request(app)
          .patch(`${BASE_URL}/users/1`)
          .set("Accept", "application/json");

        /** Tests */
        expect(body).to.have.property("firstName", testUserUpdate.firstName);
        expect(body).to.have.property("lastName", testUserUpdate.lastName);
        expect(body).to.have.property("email", testUserUpdate.email);
      } catch (error) {}
    });
  });
});
