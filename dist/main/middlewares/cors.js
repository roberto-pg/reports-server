"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cors = void 0;
const cors = (request, response, next) => {
    response.set('access-control-allow-origin', '*');
    response.set('access-control-allow-headers', '*');
    response.set('access-control-allow-methods', '*');
    next();
};
exports.cors = cors;
