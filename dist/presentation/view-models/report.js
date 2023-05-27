"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportViewModel = void 0;
class ReportViewModel {
    static map(entity) {
        var _a;
        return {
            id: entity.id,
            userId: entity.user_id,
            initialDescription: entity.initial_description,
            initialImage: entity.initial_image,
            startedAt: entity.started_at.toISOString(),
            finalDescription: entity.final_description,
            finalImage: entity.final_image,
            stopedAt: entity.stoped_at !== null ? (_a = entity.stoped_at) === null || _a === void 0 ? void 0 : _a.toISOString() : entity.stoped_at,
            finished: entity.finished
        };
    }
    static mapCollection(entities) {
        return entities.map((entity) => ReportViewModel.map(entity));
    }
}
exports.ReportViewModel = ReportViewModel;
