"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../server"));
describe("DevC", () => {
    // gets json response
    describe("GET events", () => {
        it("responds with json", done => {
            supertest_1.default(server_1.default)
                .get("/api/v1/events")
                .send({ title: 'Community Challenge',
                eventLocation: 'Sirikwa Hotel',
                startTime: '2019-08-15 21:05:15.723336+07',
                endTime: '2019-08-15 21:05:15.723336+07',
                media: "https://photos.app.goo.gl/323EcdkmFTzrfLd96",
                speakers: "Marvin Kweyu" })
                .then(res => {
                const { data } = res.body;
                chai_1.expect(res.status).to.equal(200);
                chai_1.expect(status).to.equal("success");
                chai_1.expect(data).to.have.property('title');
                chai_1.expect(data).to.have.property('startTime');
                chai_1.expect(data).to.have.property('endTime');
                chai_1.expect(data).to.have.property('media');
                chai_1.expect(data).to.have.property('speakers');
                done();
            })
                .catch(error => done(error));
        });
    });
});
//# sourceMappingURL=events.test.js.map