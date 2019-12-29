import { expect } from "chai";

import request from "supertest";

import app from "../server";

describe("server", () => {
  // gets json response
  describe("GET /", () => {
    it("responds with json", done => {
      request(app)
        .get("/")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          if (err) return done(err);
          done();
        });
    });
  });
})