"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositoryImpl = void 0;
class UserRepositoryImpl {
    constructor(prismaServer) {
        this.prismaServer = prismaServer;
    }
    async addUser(name, email, cpf, password) {
        const user = await this.prismaServer.connectPrisma().user.create({
            data: {
                name,
                email,
                cpf,
                password
            }
        });
        return user;
    }
    async loadUsers() {
        const users = await this.prismaServer.connectPrisma().user.findMany();
        return users;
    }
    async loadUserById(userId) {
        const user = await this.prismaServer.connectPrisma().user.findUnique({
            where: {
                id: userId
            }
        });
        return user;
    }
    async updatePassword(id, newPassword) {
        const user = await this.prismaServer.connectPrisma().user.update({
            where: {
                id
            },
            data: {
                password: newPassword
            }
        });
        return user.id;
    }
    async deleteUserById(id) {
        const user = await this.prismaServer.connectPrisma().user.delete({
            where: {
                id
            }
        });
        return user.id;
    }
}
exports.UserRepositoryImpl = UserRepositoryImpl;
