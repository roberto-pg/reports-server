"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadUsersController = void 0;
const user_1 = require("@/presentation/controllers/user");
const user_2 = require("@/data/usecases/user");
const user_3 = require("@/infra/repositories/user");
const postgres_1 = require("@/infra/db/postgres");
const loadUsersController = () => {
    const prisma = new postgres_1.PrismaServer();
    const repository = new user_3.UserRepositoryImpl(prisma);
    const loadUsers = new user_2.LoadUsersUseCaseImpl(repository);
    return new user_1.LoadUsersController(loadUsers);
};
exports.loadUsersController = loadUsersController;
