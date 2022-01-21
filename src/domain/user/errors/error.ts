class UserError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'UserError'
  }
}
function userError(message: string) {
  throw new UserError(message)
}

export { userError }
