"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadReportByIdController = void 0;
const helpers_1 = require("@/presentation/helpers");
const view_models_1 = require("@/presentation/view-models");
class LoadReportByIdController {
    constructor(reportByIdUseCase) {
        this.reportByIdUseCase = reportByIdUseCase;
    }
    async handle(request) {
        try {
            const result = await this.reportByIdUseCase.load(request.reportId);
            return (0, helpers_1.serverSuccess)(view_models_1.ReportViewModel.map(result));
        }
        catch (error) {
            return (0, helpers_1.serverError)(error);
        }
    }
}
exports.LoadReportByIdController = LoadReportByIdController;
