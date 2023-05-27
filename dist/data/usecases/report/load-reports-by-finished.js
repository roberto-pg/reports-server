"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadReportsByFinishedUseCaseImpl = void 0;
class LoadReportsByFinishedUseCaseImpl {
    constructor(repository) {
        this.repository = repository;
    }
    async load(userId, finished) {
        const reports = await this.repository.loadReportsByFinished(userId, finished);
        return reports;
    }
}
exports.LoadReportsByFinishedUseCaseImpl = LoadReportsByFinishedUseCaseImpl;
