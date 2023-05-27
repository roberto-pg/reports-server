"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.protectedRoute = void 0;
const redis_1 = require("@/infra/db/redis");
const env_1 = require("@/main/config/env");
const jsonwebtoken_1 = require("jsonwebtoken");
async function protectedRoute(request, response, next) {
    var _a;
    const authToken = request.headers.authorization;
    if (!authToken) {
        return response.status(401).json({
            errorCode: 'Um token é requerido'
        });
    }
    const [, token] = authToken.split(' ');
    const disconnected = await (0, redis_1.verifyBlackListToken)(token);
    if (disconnected === 1) {
        return response.status(401).send({ error: 'This token is blacklisted' });
    }
    try {
        const { userId } = (0, jsonwebtoken_1.verify)(token, (_a = env_1.env.secretKey) !== null && _a !== void 0 ? _a : '');
        request.userId = userId;
        return next();
    }
    catch (error) {
        return response.status(401).json('Token expirado');
    }
}
exports.protectedRoute = protectedRoute;
