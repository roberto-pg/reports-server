export interface DeleteReportByIdUseCase {
  delete: (
    id: string,
    initialImage: string,
    finalImage: string
  ) => Promise<string>
}
