"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRepositoryImpl = void 0;
class AuthRepositoryImpl {
    constructor(prismaServer) {
        this.prismaServer = prismaServer;
    }
    async authenticateUser(cpf) {
        const user = await this.prismaServer.connectPrisma().user.findUnique({
            where: {
                cpf
            }
        });
        return user;
    }
    async checkCpfExists(cpf) {
        const user = await this.prismaServer.connectPrisma().user.findUnique({
            where: {
                cpf: cpf
            }
        });
        if (user) {
            return true;
        }
        else {
            return false;
        }
    }
    async checkEmailExists(email) {
        const user = await this.prismaServer.connectPrisma().user.findUnique({
            where: {
                email: email
            }
        });
        if (user) {
            return true;
        }
        else {
            return false;
        }
    }
    async loadPassword(cpf) {
        var _a;
        const user = await this.prismaServer.connectPrisma().user.findUnique({
            where: {
                cpf: cpf
            },
            select: {
                password: true
            }
        });
        return (_a = user === null || user === void 0 ? void 0 : user.password) !== null && _a !== void 0 ? _a : '';
    }
    async loadPasswordById(id) {
        var _a;
        const user = await this.prismaServer.connectPrisma().user.findUnique({
            where: {
                id: id
            },
            select: {
                password: true
            }
        });
        return (_a = user === null || user === void 0 ? void 0 : user.password) !== null && _a !== void 0 ? _a : '';
    }
}
exports.AuthRepositoryImpl = AuthRepositoryImpl;
