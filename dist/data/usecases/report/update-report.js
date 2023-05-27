"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReportUseCaseImpl = void 0;
const env_1 = require("@/main/config/env");
const fs_1 = require("fs");
class UpdateReportUseCaseImpl {
    constructor(repository) {
        this.repository = repository;
    }
    async update(id, finalDescription, finalImage, stopedAt, finished) {
        var _a;
        const report = await this.repository.loadReportById(id);
        if ((report === null || report === void 0 ? void 0 : report.finished) === true) {
            const previousFinalImage = (_a = report === null || report === void 0 ? void 0 : report.final_image) === null || _a === void 0 ? void 0 : _a.split('/');
            if (previousFinalImage)
                (0, fs_1.unlink)(env_1.env.imageStorage + previousFinalImage[4], (error) => {
                    if (error)
                        console.log(error);
                });
        }
        const result = await this.repository.update(id, finalDescription, finalImage, stopedAt, finished);
        return result;
    }
}
exports.UpdateReportUseCaseImpl = UpdateReportUseCaseImpl;
