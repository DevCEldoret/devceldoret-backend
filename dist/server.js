"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('custom-env').env();
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const event_route_1 = __importDefault(require("./routes/event-route"));
const app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// added by me for testing
app.get("/", (request, response) => {
    response.json({ message: "Server starts successfully!" });
});
// routes
app.use("/api/v1/event", event_route_1.default);
// CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Authorization, Content-type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE");
    next();
});
app.set("port", process.env.PORT || "3000");
app.listen(process.env.PORT || "3000", () => {
    console.log("app is running on port ", process.env.PORT || "3000");
});
exports.default = app;
//# sourceMappingURL=server.js.map