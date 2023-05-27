"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddReportController = void 0;
const helpers_1 = require("@/presentation/helpers");
const view_models_1 = require("@/presentation/view-models");
const env_1 = require("@/main/config/env");
const errors_1 = require("@/data/errors");
const fs_1 = require("fs");
class AddReportController {
    constructor(addReport) {
        this.addReport = addReport;
    }
    async handle(request) {
        try {
            if (!request.initialDescription || !request.startedAt) {
                throw (0, errors_1.customException)('Informe os dados');
            }
            else {
                const initialImage = env_1.env.dirImage + request.imageUrl;
                const report = await this.addReport.add(request.userId, request.initialDescription, initialImage, request.startedAt);
                return (0, helpers_1.serverSuccess)(view_models_1.ReportViewModel.map(report));
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
exports.AddReportController = AddReportController;
