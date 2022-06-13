import { Report } from '@/domain/entities'

export class ReportViewModel {
  static map(entity: Report): ReportViewModel {
    return {
      id: entity.id,
      userId: entity.user_id,
      initialDescription: entity.initial_description,
      initialImage: entity.initial_image,
      startedAt: entity.started_at.toISOString(),
      finalDescription: entity.final_description,
      finalImage: entity.final_image,
      stopedAt:
        entity.stoped_at !== null
          ? entity.stoped_at.toISOString()
          : entity.stoped_at,
      finished: entity.finished,
    }
  }

  static mapCollection(entities: Report[]): ReportViewModel[] {
    return entities.map((entity) => ReportViewModel.map(entity))
  }
}
