"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationController = void 0;
const helpers_1 = require("@/presentation/helpers");
const errors_1 = require("@/data/errors");
class AuthenticationController {
    constructor(authentication) {
        this.authentication = authentication;
    }
    async handle(request) {
        try {
            if (!request.cpf) {
                throw (0, errors_1.customException)('Informe o CPF');
            }
            if (!request.password) {
                throw (0, errors_1.customException)('Informe a senha');
            }
            const user = await this.authentication.auth(request.cpf, request.password);
            return (0, helpers_1.serverSuccess)(user);
        }
        catch (error) {
            return (0, helpers_1.serverError)(error);
        }
    }
}
exports.AuthenticationController = AuthenticationController;
