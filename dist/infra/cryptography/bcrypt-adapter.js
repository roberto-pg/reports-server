"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BcryptAdapter = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class BcryptAdapter {
    async hash(password) {
        const hashPassword = await bcryptjs_1.default.hash(password, 10);
        return hashPassword;
    }
    async compare(password, dbPassword) {
        return await bcryptjs_1.default.compare(password, dbPassword);
    }
}
exports.BcryptAdapter = BcryptAdapter;
