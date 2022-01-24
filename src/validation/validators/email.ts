import validator from 'validator'

import { EmailValidator } from '@/data/protocols'

export class EmailValidatorImpl implements EmailValidator {
  isValid(email: string): Boolean {
    return validator.isEmail(email)
  }
}
