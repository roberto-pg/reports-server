"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserByIdController = void 0;
const user_1 = require("@/presentation/controllers/user");
const user_2 = require("@/data/usecases/user");
const user_3 = require("@/infra/repositories/user");
const postgres_1 = require("@/infra/db/postgres");
const deleteUserByIdController = () => {
    const prisma = new postgres_1.PrismaServer();
    const repository = new user_3.UserRepositoryImpl(prisma);
    const deleteUser = new user_2.DeleteUserByIdUseCaseImpl(repository);
    return new user_1.DeleteUserByIdController(deleteUser);
};
exports.deleteUserByIdController = deleteUserByIdController;
