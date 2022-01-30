import { Encrypter, Decrypter } from '@/data/protocols/cryptography'
import { sign, verify } from 'jsonwebtoken'
import { env } from '@/main/config/env'

interface TokenUser {
  userId: string
}

export class JwtAdapter implements Encrypter, Decrypter {
  async encrypt(plainText: string): Promise<string> {
    const token = sign({ userId: plainText }, env.secretKey, {
      expiresIn: parseInt(env.expirationTime)
    })
    return token
  }

  async decrypt(cipherText: string): Promise<TokenUser> {
    return verify(cipherText, env.secretKey) as TokenUser
  }
}
