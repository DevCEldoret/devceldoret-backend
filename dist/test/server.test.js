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
describe("Server", () => {
    describe("GET /", () => {
        it("should be running", () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                let res = yield testConfig_1.request(testConfig_1.app)
                    .get(`${testConfig_1.BASE_URL}`)
                    .set("Accept", "application/json");
                /** Tests */
                testConfig_1.expect(res.body).to.have.property("message", "Server successfully running");
            }
            catch (error) { }
        }));
        it("should respond with JSON data", () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                let res = yield testConfig_1.request(testConfig_1.app)
                    .get(`${testConfig_1.BASE_URL}`)
                    .set("Accept", "application/json");
                /** Tests */
                testConfig_1.expect(res.header["content-type"]).to.equal("application/json; charset=utf-8");
            }
            catch (error) { }
        }));
    });
});
//# sourceMappingURL=server.test.js.map