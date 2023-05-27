"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateReportController = void 0;
const report_1 = require("@/data/usecases/report");
const postgres_1 = require("@/infra/db/postgres");
const report_2 = require("@/infra/repositories/report");
const report_3 = require("@/presentation/controllers/report");
const updateReportController = () => {
    const prisma = new postgres_1.PrismaServer();
    const repository = new report_2.ReportRepositoryImpl(prisma);
    const updateUseCase = new report_1.UpdateReportUseCaseImpl(repository);
    return new report_3.UpdateReportController(updateUseCase);
};
exports.updateReportController = updateReportController;
