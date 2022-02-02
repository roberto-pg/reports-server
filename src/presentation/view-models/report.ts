import { Report } from '@/domain/entities'

export class ReportViewModel {
  constructor(
    id: string,
    userId: string,
    initialDescription: string,
    initialImage: string,
    startedAt: string
  ) {}

  static map(entity: Report): ReportViewModel {
    return {
      id: entity.id,
      userId: entity.user_id,
      initialDescription: entity.initial_description,
      initialImage: entity.initial_image,
      startedAt: entity.started_at.toISOString()
    }
  }
}
