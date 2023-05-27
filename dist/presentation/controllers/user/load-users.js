"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadUsersController = void 0;
const helpers_1 = require("@/presentation/helpers");
class LoadUsersController {
    constructor(loadUsersUseCase) {
        this.loadUsersUseCase = loadUsersUseCase;
    }
    async handle() {
        try {
            const users = await this.loadUsersUseCase.load();
            return (0, helpers_1.serverSuccess)(users);
        }
        catch (error) {
            return (0, helpers_1.serverError)(error);
        }
    }
}
exports.LoadUsersController = LoadUsersController;
