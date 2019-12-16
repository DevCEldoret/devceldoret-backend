"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const eventController_1 = __importDefault(require("../controllers/eventController"));
const router = express_1.Router();
router.get("/events", eventController_1.default.getEvents);
exports.default = router;
//# sourceMappingURL=eventRoute.js.map