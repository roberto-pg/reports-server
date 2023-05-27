"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticationController = void 0;
const user_1 = require("@/presentation/controllers/user");
const user_2 = require("@/data/usecases/user");
const user_3 = require("@/infra/repositories/user");
const postgres_1 = require("@/infra/db/postgres");
const validators_1 = require("@/validation/validators");
const cryptography_1 = require("@/infra/cryptography");
const authenticationController = () => {
    const prisma = new postgres_1.PrismaServer();
    const cpfValidator = new validators_1.CpfValidatorImpl();
    const passwordCompare = new cryptography_1.BcryptAdapter();
    const jwtAdapter = new cryptography_1.JwtAdapter();
    const userRepository = new user_3.UserRepositoryImpl(prisma);
    const authRepository = new user_3.AuthRepositoryImpl(prisma);
    const authUser = new user_2.AuthenticationUseCaseImpl(userRepository, authRepository, cpfValidator, passwordCompare, jwtAdapter);
    return new user_1.AuthenticationController(authUser);
};
exports.authenticationController = authenticationController;