import { expect } from "chai";

import request from 'supertest';

import app from "../server";

describe("DevC Server", () => {
  // gets json response
  describe("GET /", () => {
    it("responds with 501", done => {
      request(app)
        .get("/")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(501)
        .then((response) => {
          const { status } = response.body;
          expect(status).to.equal('error');
        })
        .catch(done);
    });
  });
})