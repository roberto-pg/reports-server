"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserUseCaseImpl = void 0;
const errors_1 = require("@/data/errors");
class AddUserUseCaseImpl {
    constructor(userRepository, authRepository, emailValidate, cpfValidate, hasher) {
        this.userRepository = userRepository;
        this.authRepository = authRepository;
        this.emailValidate = emailValidate;
        this.cpfValidate = cpfValidate;
        this.hasher = hasher;
    }
    async add(name, email, cpf, password) {
        const validEmail = this.emailValidate.isValidEmail(email);
        if (!validEmail) {
            throw (0, errors_1.customException)('Email inválido');
        }
        const emailExists = await this.authRepository.checkEmailExists(email);
        if (emailExists) {
            throw (0, errors_1.customException)('O email já existe');
        }
        const validCPF = this.cpfValidate.isValidCPF(cpf);
        if (!validCPF) {
            throw (0, errors_1.customException)('CPF inválido');
        }
        const cpfExists = await this.authRepository.checkCpfExists(cpf);
        if (cpfExists) {
            throw (0, errors_1.customException)('O CPF já existe');
        }
        if (password.length < 6) {
            throw (0, errors_1.customException)('A senha não pode ter menos de 6 dígitos');
        }
        const hashPassword = await this.hasher.hash(password);
        const user = await this.userRepository.addUser(name, email, cpf, hashPassword);
        user.password = undefined;
        return user;
    }
}
exports.AddUserUseCaseImpl = AddUserUseCaseImpl;
