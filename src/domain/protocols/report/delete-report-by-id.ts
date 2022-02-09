export interface DeleteReportByIdUseCase {
  delete: (id: string, initial: string, final: string) => Promise<string>
}
