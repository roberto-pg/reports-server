"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadUsersUseCaseImpl = void 0;
class LoadUsersUseCaseImpl {
    constructor(repository) {
        this.repository = repository;
    }
    async load() {
        const users = await this.repository.loadUsers();
        const serializedUsers = users.map((user) => {
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                cpf: user.cpf,
                password: undefined
            };
        });
        return serializedUsers;
    }
}
exports.LoadUsersUseCaseImpl = LoadUsersUseCaseImpl;
