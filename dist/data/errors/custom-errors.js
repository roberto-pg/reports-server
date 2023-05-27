"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customException = void 0;
class CustomException extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomException';
    }
}
function customException(message) {
    throw new CustomException(message);
}
exports.customException = customException;
