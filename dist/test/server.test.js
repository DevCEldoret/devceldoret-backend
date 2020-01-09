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
    describe("GET /", () => {
        it("responds with json", done => {
            supertest_1.default(server_1.default)
                .get("/")
                .set("Accept", "application/json")
                .expect("Content-Type", /json/)
                .end((err, res) => {
                chai_1.expect(res.status).to.equal(200);
                if (err)
                    return done(err);
                done();
            });
        });
    });
});
//# sourceMappingURL=server.test.js.map