export interface LogoutUseCase {
  logout: (userId: string, token: string) => Promise<string>
}
