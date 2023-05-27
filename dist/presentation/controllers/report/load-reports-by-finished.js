"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadReportsByFinishedController = void 0;
const helpers_1 = require("@/presentation/helpers");
const view_models_1 = require("@/presentation/view-models");
class LoadReportsByFinishedController {
    constructor(finishedUseCase) {
        this.finishedUseCase = finishedUseCase;
    }
    async handle(request) {
        try {
            const reports = await this.finishedUseCase.load(request.userId, request.finished);
            return (0, helpers_1.serverSuccess)(view_models_1.ReportViewModel.mapCollection(reports));
        }
        catch (error) {
            return (0, helpers_1.serverError)(error);
        }
    }
}
exports.LoadReportsByFinishedController = LoadReportsByFinishedController;
