"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserController = void 0;
const helpers_1 = require("@/presentation/helpers");
const errors_1 = require("@/data/errors");
class AddUserController {
    constructor(addUser) {
        this.addUser = addUser;
    }
    async handle(request) {
        try {
            if (!request.name) {
                throw (0, errors_1.customException)('Informe o nome');
            }
            if (!request.email) {
                throw (0, errors_1.customException)('Informe o email');
            }
            if (!request.cpf) {
                throw (0, errors_1.customException)('Informe o CPF');
            }
            if (!request.password) {
                throw (0, errors_1.customException)('Informe a senha');
            }
            const user = await this.addUser.add(request.name, request.email, request.cpf, request.password);
            return (0, helpers_1.serverSuccess)(user);
        }
        catch (error) {
            return (0, helpers_1.serverError)(error);
        }
    }
}
exports.AddUserController = AddUserController;
