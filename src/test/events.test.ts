import { expect } from "chai";

import request from "supertest";
import app from "../server";

const apiEndpoint = '/api/v1/events';

describe("DevC /api/v1/events", () => {
  describe('User can view all events', function() {
    this.timeout(5000);

    it('GET /', (done) => {
        request(app)
        .get(apiEndpoint)
        .set('Accept', 'application/json')
        .expect("Content-Type", /json/)
        .expect(500)
        .then((response) => {
          console.log('Body', response.body);
          //expect(data.id).to.be.a("number");
          // expect(data.title).to.be.a("string");
          // expect(data.description).to.be.a("string");
          // expect(data.location).to.be.an("array");
          // expect(data.startTime).to.be.a("string");
          // expect(data.endTime).to.be.a("string");
          // expect(data.mediaLink).to.be.a("string");
          // expect(data.speakers).to.be.an("array");
          // done();
        })
        .catch(done);
    });
  });
});
