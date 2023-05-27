"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadReportByIdController = void 0;
const report_1 = require("@/data/usecases/report");
const postgres_1 = require("@/infra/db/postgres");
const report_2 = require("@/infra/repositories/report");
const report_3 = require("@/presentation/controllers/report");
const loadReportByIdController = () => {
    const prisma = new postgres_1.PrismaServer();
    const repository = new report_2.ReportRepositoryImpl(prisma);
    const reportByIdUseCase = new report_1.LoadReportByIdUseCaseImpl(repository);
    return new report_3.LoadReportByIdController(reportByIdUseCase);
};
exports.loadReportByIdController = loadReportByIdController;
