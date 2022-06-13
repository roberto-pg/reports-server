import validator from 'validator'

import { EmailValidator } from '@/data/protocols/validator'

export class EmailValidatorImpl implements EmailValidator {
  isValidEmail(email: string): boolean {
    return validator.isEmail(email)
  }
}
