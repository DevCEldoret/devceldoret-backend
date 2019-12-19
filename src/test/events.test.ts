import { expect } from "chai";

import request from "supertest";

const getEvents = require("../DB/db.js");
const Database = require ("../DB/index");

import app from "../server";

const url = '/api/v1/';

describe("DevC", () => {
  describe('User can view all events', () => {
    it('GET /event', (done) => {
        request(app)
        .get('/api/v1/event')
        .set('Accept', 'application/json')
        .expect("Content-Type", /json/)
        .then((response) => {
          const { data,status } = response.body;
          expect(response.status).to.equal(200);
          //expect(data.id).to.be.a("number");
          // expect(data.title).to.be.a("string");
          // expect(data.description).to.be.a("string");
          // expect(data.location).to.be.an("array");
          // expect(data.startTime).to.be.a("string");
          // expect(data.endTime).to.be.a("string");
          // expect(data.mediaLink).to.be.a("string");
          // expect(data.speakers).to.be.an("array");
          done();
        })
        .catch((error: any) => done(error));
    });
  });
});
