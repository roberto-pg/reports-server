"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePasswordUseCaseImpl = void 0;
const errors_1 = require("@/data/errors");
class UpdatePasswordUseCaseImpl {
    constructor(userRepository, authRepository, passwordCompare, hasher) {
        this.userRepository = userRepository;
        this.authRepository = authRepository;
        this.passwordCompare = passwordCompare;
        this.hasher = hasher;
    }
    async update(id, oldPassword, newPassword) {
        const user = await this.userRepository.loadUserById(id);
        if (!user) {
            throw (0, errors_1.customException)('Usuário não encontrado');
        }
        const dbPassword = await this.authRepository.loadPasswordById(id);
        const passwordCheck = await this.passwordCompare.compare(oldPassword, dbPassword);
        if (!passwordCheck) {
            throw (0, errors_1.customException)('Senha atual não confere');
        }
        if (newPassword.length < 6) {
            throw (0, errors_1.customException)('A senha não pode ter menos de 6 dígitos');
        }
        const hashPassword = await this.hasher.hash(newPassword);
        const result = await this.userRepository.updatePassword(id, hashPassword);
        return result;
    }
}
exports.UpdatePasswordUseCaseImpl = UpdatePasswordUseCaseImpl;
