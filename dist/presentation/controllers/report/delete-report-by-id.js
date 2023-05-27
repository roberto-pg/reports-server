"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteReportByIdController = void 0;
const errors_1 = require("@/data/errors");
const helpers_1 = require("@/presentation/helpers");
class DeleteReportByIdController {
    constructor(deleteUseCase) {
        this.deleteUseCase = deleteUseCase;
    }
    async handle(request) {
        try {
            if (!request.id) {
                throw (0, errors_1.customException)('Informe o ID do relatório');
            }
            if (!request.initialImage) {
                throw (0, errors_1.customException)('Informe o título da imagem inicial');
            }
            const result = await this.deleteUseCase.delete(request.id, request.initialImage, request.finalImage);
            return (0, helpers_1.serverSuccess)(result);
        }
        catch (error) {
            return (0, helpers_1.serverError)(error);
        }
    }
}
exports.DeleteReportByIdController = DeleteReportByIdController;
