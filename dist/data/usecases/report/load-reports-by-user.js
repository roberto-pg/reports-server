"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadReportsByUserUseCaseImpl = void 0;
class LoadReportsByUserUseCaseImpl {
    constructor(repository) {
        this.repository = repository;
    }
    async load(userId) {
        const reports = await this.repository.loadReports(userId);
        return reports;
    }
}
exports.LoadReportsByUserUseCaseImpl = LoadReportsByUserUseCaseImpl;
