import Redis from 'ioredis'
import { env } from '@/main/config/env'

const redisClient = new Redis({
  host: env.redisHost,
  port: Number(env.redisPort),
  password: env.redisPass
})

module.exports = { redisClient }
