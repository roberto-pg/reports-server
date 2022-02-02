export interface DeleteUserByIdUseCase {
  delete: (id: string) => Promise<string>
}
