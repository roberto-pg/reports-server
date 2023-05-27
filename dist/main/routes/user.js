"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("@/main/factories/user");
const adapters_1 = require("@/main/adapters");
const middlewares_1 = require("@/main/middlewares");
exports.default = (router) => {
    router.post('/create-user', (0, adapters_1.adaptRoute)((0, user_1.addUserController)()));
    router.post('/auth-user', (0, adapters_1.adaptRoute)((0, user_1.authenticationController)()));
    router.get('/users', middlewares_1.protectedRoute, (0, adapters_1.adaptRoute)((0, user_1.loadUsersController)()));
    router.get('/user-by-id', middlewares_1.protectedRoute, (0, adapters_1.adaptRoute)((0, user_1.loadUserByIdController)()));
    router.delete('/delete-user/:id', middlewares_1.protectedRoute, (0, adapters_1.adaptRoute)((0, user_1.deleteUserByIdController)()));
    router.patch('/change-password', middlewares_1.protectedRoute, (0, adapters_1.adaptRoute)((0, user_1.updatePasswordController)()));
    router.post('/logout', middlewares_1.protectedRoute, (0, adapters_1.adaptRoute)((0, user_1.logoutController)()));
};
