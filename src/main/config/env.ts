import 'dotenv/config'

export const env = {
  port: process.env.PORT || 5000,
  secretKey: process.env.JWT_SECRET_KEY,
  expirationTime: process.env.TOKEN_EXPIRATION_TIME,
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT,
  redisPass: process.env.REDIS_PASS,
  dirImage: process.env.DIR_IMAGE,
  imageStorage: process.env.IMAGE_STORAGE
}
