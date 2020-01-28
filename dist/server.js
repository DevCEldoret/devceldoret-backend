"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config = require("./Utils/config");
const PORT = config.SERVER_PORT;
app_1.default.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
exports.default = app_1.default;
//# sourceMappingURL=server.js.map