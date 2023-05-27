"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddReportUseCaseImpl = void 0;
class AddReportUseCaseImpl {
    constructor(reportRepository) {
        this.reportRepository = reportRepository;
    }
    async add(userId, initialDescription, initialImage, startedAt) {
        const report = await this.reportRepository.addReport(userId, initialDescription, initialImage, startedAt);
        return report;
    }
}
exports.AddReportUseCaseImpl = AddReportUseCaseImpl;
