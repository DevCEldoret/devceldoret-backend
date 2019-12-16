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
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    connectionString: "postgres://postgres:50filthyCENT!@localhost:5432/devceldoret"
});
class Database {
    static query(query, value, isArray = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield pool.query(query, value);
            const result = isArray ? response.rows : response.rows[0];
            return result;
        });
    }
}
exports.default = Database;
//# sourceMappingURL=index.js.map