"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const supertest_1 = __importDefault(require("supertest"));
const getEvents = require("../DB/db.js");
const Database = require("../DB/index");
const server_1 = __importDefault(require("../server"));
const url = '/api/v1/';
describe("DevC", () => {
    describe('User can view all events', () => {
        it('GET /event', (done) => {
            supertest_1.default(server_1.default)
                .get('/api/v1/event')
                .set('Accept', 'application/json')
                .expect("Content-Type", /json/)
                .then((response) => {
                const { data, status } = response.body;
                chai_1.expect(response.status).to.equal(200);
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
                .catch((error) => done(error));
        });
    });
});
//# sourceMappingURL=events.test.js.map