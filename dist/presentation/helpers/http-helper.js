"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverSuccess = exports.serverError = void 0;
const serverError = (error) => ({
    statusCode: 500,
    data: error.message
});
exports.serverError = serverError;
const serverSuccess = (data) => ({
    statusCode: 200,
    data
});
exports.serverSuccess = serverSuccess;
