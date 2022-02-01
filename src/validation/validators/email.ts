import validator from 'validator'

import { EmailValidator } from '@/data/protocols/validators'

export class EmailValidatorImpl implements EmailValidator {
  isValidEmail(email: string): Boolean {
    return validator.isEmail(email)
  }
}
