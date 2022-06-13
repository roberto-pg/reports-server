import bcrypt from 'bcryptjs'
import { Hasher, HashComparer } from '@/data/protocols/cryptography'

export class BcryptAdapter implements Hasher, HashComparer {
  async hash(password: string): Promise<string> {
    const hashPassword = await bcrypt.hash(password, 10)
    return hashPassword
  }

  async compare(password: string, dbPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, dbPassword)
  }
}
