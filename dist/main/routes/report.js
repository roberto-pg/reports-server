"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const middlewares_1 = require("@/main/middlewares");
const adapters_1 = require("@/main/adapters");
const report_1 = require("@/main/factories/report");
const multer_1 = __importDefault(require("multer"));
const multerConfig = require('../middlewares/multer');
exports.default = (router) => {
    router.post('/start-report', middlewares_1.protectedRoute, (0, multer_1.default)(multerConfig).single('imageUrl'), (0, adapters_1.adaptRoute)((0, report_1.addReportController)()));
    router.patch('/close-report/:id', middlewares_1.protectedRoute, (0, multer_1.default)(multerConfig).single('imageUrl'), (0, adapters_1.adaptRoute)((0, report_1.updateReportController)()));
    router.get('/all-reports-by-user', middlewares_1.protectedRoute, (0, adapters_1.adaptRoute)((0, report_1.loadReportsByUserController)()));
    router.get('/report-by-id/:reportId', middlewares_1.protectedRoute, (0, adapters_1.adaptRoute)((0, report_1.loadReportByIdController)()));
    router.get('/reports-by-finished/:finished', middlewares_1.protectedRoute, (0, adapters_1.adaptRoute)((0, report_1.loadReportsByFinishedController)()));
    router.delete('/delete-report', middlewares_1.protectedRoute, (0, adapters_1.adaptRoute)((0, report_1.deleteReportByIdController)()));
};
