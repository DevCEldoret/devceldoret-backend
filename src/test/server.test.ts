import { app, request, expect, baseUrl } from "./testConfig";

describe("Server", () => {
  describe("GET /", () => {
    it("should be running", async () => {
      try {
        let res = await request(app)
          .get(`${baseUrl}`)
          .set("Accept", "application/json");

        /** Tests */
        expect(res.body).to.have.property(
          "message",
          "Server successfully running"
        );
      } catch (error) {}
    });

    it("should respond with JSON data", async () => {
      try {
        let res = await request(app)
          .get(`${baseUrl}`)
          .set("Accept", "application/json");

        /** Tests */
        expect(res.header["content-type"]).to.equal(
          "application/json; charset=utf-8"
        );
      } catch (error) {}
    });
  });
});
