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
const events_1 = __importDefault(require("../models/events"));
class EventController {
    static getEvents(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const events = yield events_1.default.getEvents(1, "Community Challenge", "Sirikwa Hotel", '2019-08-15 21:05:15.723336+07', '2019-08-15 21:05:15.723336+07', "https://photos.app.goo.gl/323EcdkmFTzrfLd96", "Marvin Kweyu", "chksavjhcb");
                const data = [...events];
                res.status(200).json({
                    status: "success",
                    data
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = EventController;
//# sourceMappingURL=eventController.js.map