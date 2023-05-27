"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePasswordController = void 0;
const helpers_1 = require("@/presentation/helpers");
const errors_1 = require("@/data/errors");
class UpdatePasswordController {
    constructor(updateUseCase) {
        this.updateUseCase = updateUseCase;
    }
    async handle(request) {
        try {
            if (!request.userId) {
                throw (0, errors_1.customException)('Informe o ID do usuário');
            }
            if (!request.oldPassword) {
                throw (0, errors_1.customException)('Informe a senha atual');
            }
            if (!request.newPassword) {
                throw (0, errors_1.customException)('Informe a nova senha');
            }
            const result = await this.updateUseCase.update(request.userId, request.oldPassword, request.newPassword);
            return (0, helpers_1.serverSuccess)(result);
        }
        catch (error) {
            return (0, helpers_1.serverError)(error);
        }
    }
}
exports.UpdatePasswordController = UpdatePasswordController;
