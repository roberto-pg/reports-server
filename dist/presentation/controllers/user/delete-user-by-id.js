"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserByIdController = void 0;
const helpers_1 = require("@/presentation/helpers");
class DeleteUserByIdController {
    constructor(deleteUser) {
        this.deleteUser = deleteUser;
    }
    async handle(request) {
        try {
            const response = await this.deleteUser.delete(request.id);
            return (0, helpers_1.serverSuccess)(response);
        }
        catch (error) {
            return (0, helpers_1.serverError)(error);
        }
    }
}
exports.DeleteUserByIdController = DeleteUserByIdController;
