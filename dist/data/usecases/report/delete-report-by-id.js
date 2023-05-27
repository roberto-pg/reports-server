"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteReportByIdUseCaseImpl = void 0;
const errors_1 = require("@/data/errors");
const env_1 = require("@/main/config/env");
const fs_1 = require("fs");
class DeleteReportByIdUseCaseImpl {
    constructor(repository) {
        this.repository = repository;
    }
    async delete(id, initialImage, finalImage) {
        const report = await this.repository.loadReportById(id);
        if (!report) {
            throw (0, errors_1.customException)('Relatório não existe');
        }
        try {
            const result = await this.repository.deleteReportById(id);
            (0, fs_1.unlink)(env_1.env.imageStorage + '/' + initialImage, (error) => {
                if (error)
                    console.log(error);
            });
            (0, fs_1.unlink)(env_1.env.imageStorage + '/' + finalImage, (error) => {
                if (error)
                    console.log(error);
            });
            return result;
        }
        catch (error) {
            throw (0, errors_1.customException)('Erro ao excluir relatório');
        }
    }
}
exports.DeleteReportByIdUseCaseImpl = DeleteReportByIdUseCaseImpl;
