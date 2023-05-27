"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = __importDefault(require("ioredis"));
const env_1 = require("@/main/config/env");
const redisClient = new ioredis_1.default({
    host: env_1.env.redisHost,
    port: Number(env_1.env.redisPort),
    password: env_1.env.redisPass
});
module.exports = { redisClient };
