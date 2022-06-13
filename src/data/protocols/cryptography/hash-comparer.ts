export interface HashComparer {
  compare: (password: string, dbPassword: string) => Promise<boolean>
}
