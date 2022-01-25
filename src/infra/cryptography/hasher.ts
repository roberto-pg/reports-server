import bcrypt from 'bcryptjs'
import { Hasher } from '@/data/protocols/cryptography'

export class HasherImpl implements Hasher {
  async hash(password: string): Promise<string> {
    const hashPassword = await bcrypt.hash(password, 10)
    return hashPassword
  }
}
