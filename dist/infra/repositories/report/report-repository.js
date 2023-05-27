"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportRepositoryImpl = void 0;
class ReportRepositoryImpl {
    constructor(prismaServer) {
        this.prismaServer = prismaServer;
    }
    async addReport(userId, initialDescription, initialImage, startedAt) {
        const report = await this.prismaServer.connectPrisma().report.create({
            data: {
                user_id: userId,
                initial_description: initialDescription,
                initial_image: initialImage,
                started_at: new Date(startedAt)
            }
        });
        return report;
    }
    async loadReports(userId) {
        const reports = await this.prismaServer.connectPrisma().report.findMany({
            where: {
                user_id: userId,
                finished: true
            }
        });
        return reports;
    }
    async update(id, finalDescription, finalImage, stopedAt, finished) {
        const report = await this.prismaServer.connectPrisma().report.update({
            data: {
                final_description: finalDescription,
                final_image: finalImage,
                stoped_at: new Date(stopedAt),
                finished: finished
            },
            where: {
                id
            }
        });
        return report.id;
    }
    async loadReportById(reportId) {
        const report = await this.prismaServer.connectPrisma().report.findUnique({
            where: {
                id: reportId
            }
        });
        return report;
    }
    async loadReportsByFinished(userId, finished) {
        const reports = await this.prismaServer.connectPrisma().report.findMany({
            where: {
                user_id: userId,
                finished: finished === 'true'
            }
        });
        return reports;
    }
    async deleteReportById(id) {
        const result = await this.prismaServer.connectPrisma().report.delete({
            where: {
                id
            }
        });
        return result.id;
    }
}
exports.ReportRepositoryImpl = ReportRepositoryImpl;
