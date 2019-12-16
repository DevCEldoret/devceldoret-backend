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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../DB/index"));
const errorHandler_1 = __importDefault(require("../Utils/errorHandler"));
class GetEvent {
    static getEvents(eventId, title, eventLocation, startTime, endTime, media, speakers, eventInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            const values = [eventId, title, eventLocation, startTime, endTime, media, speakers, eventInfo];
            const response = yield index_1.default.query('SELECT * FROM events', values).catch(error => {
                throw new errorHandler_1.default(error.message, 400);
            });
            if (!response) {
                throw new Error("Event does not exist");
            }
            return response;
        });
    }
}
exports.default = GetEvent;
//# sourceMappingURL=events.js.map