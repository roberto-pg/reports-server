"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailValidatorImpl = void 0;
const validator_1 = __importDefault(require("validator"));
class EmailValidatorImpl {
    isValidEmail(email) {
        return validator_1.default.isEmail(email);
    }
}
exports.EmailValidatorImpl = EmailValidatorImpl;
