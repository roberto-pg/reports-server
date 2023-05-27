"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReportController = void 0;
const fs_1 = require("fs");
const errors_1 = require("@/data/errors");
const env_1 = require("@/main/config/env");
const helpers_1 = require("@/presentation/helpers");
class UpdateReportController {
    constructor(updateUseCase) {
        this.updateUseCase = updateUseCase;
    }
    async handle(request) {
        try {
            if (!request.finalDescription || !request.stopedAt) {
                throw (0, errors_1.customException)('Informe os dados');
            }
            else {
                const finalImage = env_1.env.dirImage + request.imageUrl;
                const finished = true;
                const result = await this.updateUseCase.update(request.id, request.finalDescription, finalImage, request.stopedAt, finished);
                return (0, helpers_1.serverSuccess)(result);
            }
        }
        catch (error) {
            (0, fs_1.unlink)(env_1.env.imageStorage + '/' + request.imageUrl, (error) => {
                if (error)
                    console.log(error);
            });
            return (0, helpers_1.serverError)(error);
        }
    }
}
exports.UpdateReportController = UpdateReportController;
