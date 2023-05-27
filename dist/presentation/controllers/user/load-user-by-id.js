"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadUserByIdController = void 0;
const helpers_1 = require("@/presentation/helpers");
class LoadUserByIdController {
    constructor(userIdUseCase) {
        this.userIdUseCase = userIdUseCase;
    }
    async handle(request) {
        try {
            const user = await this.userIdUseCase.load(request.userId);
            return (0, helpers_1.serverSuccess)(user);
        }
        catch (error) {
            return (0, helpers_1.serverError)(error);
        }
    }
}
exports.LoadUserByIdController = LoadUserByIdController;
