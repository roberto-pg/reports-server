export interface UpdateReportUseCase {
  update: (
    id: string,
    finalDescription: string,
    finalImage: string,
    stopedAt: string,
    finished: boolean
  ) => Promise<string>
}
