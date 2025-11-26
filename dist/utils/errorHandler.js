"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlerError = void 0;
class handlerError extends Error {
    constructor(message) {
        super(message);
        this.name = "Handler Error";
    }
}
exports.handlerError = handlerError;
//# sourceMappingURL=errorHandler.js.map