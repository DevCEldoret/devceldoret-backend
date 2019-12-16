"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorHandler extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}
exports.default = ErrorHandler;
//# sourceMappingURL=errorHandler.js.map