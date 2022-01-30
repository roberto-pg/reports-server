interface TokenUser {
  userId: string
}

export interface Decrypter {
  decrypt: (cipherText: string) => Promise<TokenUser>
}
