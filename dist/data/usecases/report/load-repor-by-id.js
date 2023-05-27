"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadReportByIdUseCaseImpl = void 0;
const errors_1 = require("@/data/errors");
class LoadReportByIdUseCaseImpl {
    constructor(repository) {
        this.repository = repository;
    }
    async load(reportId) {
        const report = await this.repository.loadReportById(reportId);
        if (!report) {
            throw (0, errors_1.customException)('Relatório não encontrado');
        }
        return report;
    }
}
exports.LoadReportByIdUseCaseImpl = LoadReportByIdUseCaseImpl;
