"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUserCache = exports.setBlackList = exports.deleteUserCache = exports.verifyBlackListToken = void 0;
const env_1 = require("@/main/config/env");
const Redis = require('./redis-connection').redisClient;
Redis.on('connect', () => {
    console.log('Redis connected');
});
const setUserCache = (id) => Redis.set(`userId:${id}`, id, 'EX', env_1.env.expirationTime);
exports.setUserCache = setUserCache;
const setBlackList = (token, id) => Redis.set(`blackListUserToken:${token}`, `UserId: ${id}`, 'EX', env_1.env.expirationTime);
exports.setBlackList = setBlackList;
const verifyBlackListToken = (token) => Redis.exists(`blackListUserToken:${token}`);
exports.verifyBlackListToken = verifyBlackListToken;
const deleteUserCache = (id) => Redis.del(`userId:${id}`);
exports.deleteUserCache = deleteUserCache;
