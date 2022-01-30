import 'dotenv/config'

export const env = {
  port: process.env.PORT || 5000,
  secretKey: process.env.JWT_SECRET_KEY,
  expirationTime: process.env.TOKEN_EXPIRATION_TIME
}
