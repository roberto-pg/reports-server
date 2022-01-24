export class UseCaseError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'UseCaseError'
  }
}
