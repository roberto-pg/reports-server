"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAdapter = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const env_1 = require("@/main/config/env");
class JwtAdapter {
    async encrypt(plainText) {
        var _a, _b;
        const token = (0, jsonwebtoken_1.sign)({ userId: plainText }, (_a = env_1.env.secretKey) !== null && _a !== void 0 ? _a : '', {
            expiresIn: parseInt((_b = env_1.env.expirationTime) !== null && _b !== void 0 ? _b : '')
        });
        return token;
    }
    async decrypt(cipherText) {
        var _a;
        return (0, jsonwebtoken_1.verify)(cipherText, (_a = env_1.env.secretKey) !== null && _a !== void 0 ? _a : '');
    }
}
exports.JwtAdapter = JwtAdapter;
