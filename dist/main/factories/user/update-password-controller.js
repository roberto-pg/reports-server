"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePasswordController = void 0;
const user_1 = require("@/presentation/controllers/user");
const user_2 = require("@/data/usecases/user");
const user_3 = require("@/infra/repositories/user");
const postgres_1 = require("@/infra/db/postgres");
const cryptography_1 = require("@/infra/cryptography");
const updatePasswordController = () => {
    const prisma = new postgres_1.PrismaServer();
    const userRepository = new user_3.UserRepositoryImpl(prisma);
    const authRepository = new user_3.AuthRepositoryImpl(prisma);
    const passwordCompare = new cryptography_1.BcryptAdapter();
    const updatePassword = new user_2.UpdatePasswordUseCaseImpl(userRepository, authRepository, passwordCompare, passwordCompare);
    return new user_1.UpdatePasswordController(updatePassword);
};
exports.updatePasswordController = updatePasswordController;
