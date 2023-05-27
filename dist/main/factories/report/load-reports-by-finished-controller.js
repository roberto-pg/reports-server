"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadReportsByFinishedController = void 0;
const report_1 = require("@/data/usecases/report");
const postgres_1 = require("@/infra/db/postgres");
const report_2 = require("@/infra/repositories/report");
const report_3 = require("@/presentation/controllers/report");
const loadReportsByFinishedController = () => {
    const prisma = new postgres_1.PrismaServer();
    const repository = new report_2.ReportRepositoryImpl(prisma);
    const finishedUseCase = new report_1.LoadReportsByFinishedUseCaseImpl(repository);
    return new report_3.LoadReportsByFinishedController(finishedUseCase);
};
exports.loadReportsByFinishedController = loadReportsByFinishedController;
