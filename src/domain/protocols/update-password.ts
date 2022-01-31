export interface UpdatePasswordUseCase {
  update: (
    id: string,
    oldPassword: string,
    newPassword: string
  ) => Promise<string>
}
