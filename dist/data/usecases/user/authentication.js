"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationUseCaseImpl = void 0;
const redis_1 = require("@/infra/db/redis");
const errors_1 = require("@/data/errors");
class AuthenticationUseCaseImpl {
    constructor(userRepository, authRepository, cpfValidate, passwordCompare, encrypter) {
        this.userRepository = userRepository;
        this.authRepository = authRepository;
        this.cpfValidate = cpfValidate;
        this.passwordCompare = passwordCompare;
        this.encrypter = encrypter;
    }
    async auth(cpf, password) {
        var _a, _b, _c, _d, _e, _f;
        const validCPF = this.cpfValidate.isValidCPF(cpf);
        if (!validCPF) {
            throw (0, errors_1.customException)('CPF inválido');
        }
        const cpfExists = await this.authRepository.checkCpfExists(cpf);
        if (!cpfExists) {
            throw (0, errors_1.customException)('CPF não cadastrado');
        }
        const dbPassword = await this.authRepository.loadPassword(cpf);
        const passwordCheck = await this.passwordCompare.compare(password, dbPassword);
        if (!passwordCheck) {
            throw (0, errors_1.customException)('Senha inválida');
        }
        const user = await this.authRepository.authenticateUser(cpf);
        const token = await this.encrypter.encrypt((_a = user === null || user === void 0 ? void 0 : user.id) !== null && _a !== void 0 ? _a : '');
        (0, redis_1.setUserCache)((_b = user === null || user === void 0 ? void 0 : user.id) !== null && _b !== void 0 ? _b : '');
        const serializedUser = {
            id: (_c = user === null || user === void 0 ? void 0 : user.id) !== null && _c !== void 0 ? _c : '',
            name: (_d = user === null || user === void 0 ? void 0 : user.name) !== null && _d !== void 0 ? _d : '',
            email: (_e = user === null || user === void 0 ? void 0 : user.email) !== null && _e !== void 0 ? _e : '',
            cpf: (_f = user === null || user === void 0 ? void 0 : user.cpf) !== null && _f !== void 0 ? _f : '',
            token: token !== null && token !== void 0 ? token : ''
        };
        return serializedUser;
    }
}
exports.AuthenticationUseCaseImpl = AuthenticationUseCaseImpl;
