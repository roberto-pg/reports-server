"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaServer = void 0;
const client_1 = require("@prisma/client");
class PrismaServer {
    connectAny() {
        throw new Error('Method not implemented.');
    }
    connectPrisma() {
        if (!global.prisma) {
            global.prisma = new client_1.PrismaClient();
        }
        return global.prisma;
    }
}
exports.PrismaServer = PrismaServer;
