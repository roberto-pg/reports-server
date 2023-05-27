"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addReportController = void 0;
const report_1 = require("@/presentation/controllers/report");
const report_2 = require("@/data/usecases/report");
const report_3 = require("@/infra/repositories/report");
const postgres_1 = require("@/infra/db/postgres");
const addReportController = () => {
    const prisma = new postgres_1.PrismaServer();
    const reportRepository = new report_3.ReportRepositoryImpl(prisma);
    const addReport = new report_2.AddReportUseCaseImpl(reportRepository);
    return new report_1.AddReportController(addReport);
};
exports.addReportController = addReportController;
