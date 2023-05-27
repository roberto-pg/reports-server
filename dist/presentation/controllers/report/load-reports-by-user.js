"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadReportsByUserController = void 0;
const view_models_1 = require("@/presentation/view-models");
const helpers_1 = require("@/presentation/helpers");
class LoadReportsByUserController {
    constructor(loadUseCase) {
        this.loadUseCase = loadUseCase;
    }
    async handle(request) {
        try {
            const reports = await this.loadUseCase.load(request.userId);
            return (0, helpers_1.serverSuccess)(view_models_1.ReportViewModel.mapCollection(reports));
        }
        catch (error) {
            return (0, helpers_1.serverError)(error);
        }
    }
}
exports.LoadReportsByUserController = LoadReportsByUserController;
