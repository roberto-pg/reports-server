"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoutController = void 0;
const helpers_1 = require("@/presentation/helpers");
class LogoutController {
    constructor(logoutUseCase) {
        this.logoutUseCase = logoutUseCase;
    }
    async handle(request) {
        const token = request.token.split(' ')[1];
        try {
            const result = await this.logoutUseCase.logout(request.userId, token);
            return (0, helpers_1.serverSuccess)(result);
        }
        catch (error) {
            return (0, helpers_1.serverError)(error);
        }
    }
}
exports.LogoutController = LogoutController;
