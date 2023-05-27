"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadUserByIdUseCaseImpl = void 0;
class LoadUserByIdUseCaseImpl {
    constructor(repository) {
        this.repository = repository;
    }
    async load(userId) {
        var _a, _b, _c, _d;
        const user = await this.repository.loadUserById(userId);
        const serializedUser = {
            id: (_a = user === null || user === void 0 ? void 0 : user.id) !== null && _a !== void 0 ? _a : undefined,
            name: (_b = user === null || user === void 0 ? void 0 : user.name) !== null && _b !== void 0 ? _b : '',
            email: (_c = user === null || user === void 0 ? void 0 : user.email) !== null && _c !== void 0 ? _c : '',
            cpf: (_d = user === null || user === void 0 ? void 0 : user.cpf) !== null && _d !== void 0 ? _d : ''
        };
        return serializedUser;
    }
}
exports.LoadUserByIdUseCaseImpl = LoadUserByIdUseCaseImpl;
