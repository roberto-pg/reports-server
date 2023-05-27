"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoutUseCaseImpl = void 0;
const redis_1 = require("@/infra/db/redis");
const errors_1 = require("@/data/errors");
class LogoutUseCaseImpl {
    async logout(userId, token) {
        try {
            Promise.all([(0, redis_1.setBlackList)(token, userId), (0, redis_1.deleteUserCache)(userId)]);
            return 'Logout realizado';
        }
        catch (error) {
            throw (0, errors_1.customException)('Falha no logout');
        }
    }
}
exports.LogoutUseCaseImpl = LogoutUseCaseImpl;
