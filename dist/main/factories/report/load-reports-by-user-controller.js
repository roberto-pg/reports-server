"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadReportsByUserController = void 0;
const report_1 = require("@/data/usecases/report");
const report_2 = require("@/presentation/controllers/report");
const postgres_1 = require("@/infra/db/postgres");
const report_3 = require("@/infra/repositories/report");
const loadReportsByUserController = () => {
    const prisma = new postgres_1.PrismaServer();
    const repository = new report_3.ReportRepositoryImpl(prisma);
    const loadUseCase = new report_1.LoadReportsByUserUseCaseImpl(repository);
    return new report_2.LoadReportsByUserController(loadUseCase);
};
exports.loadReportsByUserController = loadReportsByUserController;
