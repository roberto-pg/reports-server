"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutController = void 0;
const user_1 = require("@/presentation/controllers/user");
const user_2 = require("@/data/usecases/user");
const logoutController = () => {
    const logoutUseCase = new user_2.LogoutUseCaseImpl();
    return new user_1.LogoutController(logoutUseCase);
};
exports.logoutController = logoutController;
