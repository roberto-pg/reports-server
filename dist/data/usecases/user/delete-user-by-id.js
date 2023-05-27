"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserByIdUseCaseImpl = void 0;
const errors_1 = require("@/data/errors");
class DeleteUserByIdUseCaseImpl {
    constructor(repository) {
        this.repository = repository;
    }
    async delete(id) {
        const user = await this.repository.loadUserById(id);
        if (!user) {
            throw (0, errors_1.customException)('Usuário não encontrado');
        }
        const result = await this.repository.deleteUserById(id);
        return result;
    }
}
exports.DeleteUserByIdUseCaseImpl = DeleteUserByIdUseCaseImpl;
