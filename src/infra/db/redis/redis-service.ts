import { env } from '@/main/config/env'
const Redis = require('./redis-connection').redisClient

Redis.on('connect', () => {
  console.log('Redis connected')
})

const setUserCache = (id: string) =>
  Redis.set(`userId:${id}`, id, 'EX', env.expirationTime)

const setBlackList = (token: string, id: string) =>
  Redis.set(
    `blackListUserToken:${token}`,
    `UserId: ${id}`,
    'EX',
    env.expirationTime
  )

const verifyBlackListToken = (token: string) =>
  Redis.exists(`blackListUserToken:${token}`)

const deleteUserCache = (id: string) => Redis.del(`userId:${id}`)

export { verifyBlackListToken, deleteUserCache, setBlackList, setUserCache }
