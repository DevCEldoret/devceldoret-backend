"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const testConfig_1 = require("./testConfig");
const testHelpers_1 = require("../Utils/testHelpers");
describe("Events", () => {
    describe("POST /api/v1/events", () => {
        it("should create an event", () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                /**create location */
                yield testConfig_1.request(testConfig_1.app)
                    .post(`${testConfig_1.BASE_URL}/locations`)
                    .set("Accept", "application/json")
                    .send(testHelpers_1.testLocation);
                /**create event */
                let { body } = yield testConfig_1.request(testConfig_1.app)
                    .post(`${testConfig_1.BASE_URL}/events`)
                    .set("Accept", "application/json")
                    .send(testHelpers_1.testEvent);
                /** Tests */
                testConfig_1.expect(body.status).to.eql(201);
            }
            catch (error) { }
        }));
    });
    it("should not accept a null value", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let { body } = yield testConfig_1.request(testConfig_1.app)
                .post(`${testConfig_1.BASE_URL}/events`)
                .send(testHelpers_1.testNullEvent);
            /**Test */
            testConfig_1.expect(body).to.have.property("message", "No repository for 'Event' was found. Looks like this entity is not registered in current 'default' connection?");
        }
        catch (error) { }
    }));
    describe("GET /api/v1/events", () => {
        it("should retrieve all events", () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                let { body } = yield testConfig_1.request(testConfig_1.app)
                    .get(`${testConfig_1.BASE_URL}/events`)
                    .set("Accept", "application/json");
                /** Tests */
                testConfig_1.expect(body.status).to.eql(200);
                testConfig_1.expect(body).to.have.property("name");
                testConfig_1.expect(body).to.have.property("description");
                testConfig_1.expect(body).to.have.property("start_datetime");
                testConfig_1.expect(body).to.have.property("end_datetime");
                testConfig_1.expect(body).to.have.property("rsvp_link");
            }
            catch (error) { }
        }));
    });
});
//# sourceMappingURL=events.test.js.map