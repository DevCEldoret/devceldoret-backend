"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//import { Pool } from 'pg';
const event_controller_1 = __importDefault(require("../controllers/event-controller"));
const router = express_1.Router();
// Added for testing purposes
// const pool = new Pool({
//   connectionString: "postgres://postgres:50filthyCENT!@localhost:5432/devceldoret"
// });
// const getEvents = (_request:any, response:any) => {
//   pool.query('SELECT * FROM events ORDER BY id ASC', (error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).json(results.rows);
//   });
// };
router.get("/", event_controller_1.default.getEvents);
exports.default = router;
//# sourceMappingURL=event-route.js.map