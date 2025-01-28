import * as bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export function createHash(plainText: string) {
  return bcrypt.hash(plainText, SALT_ROUNDS);
}

export function verifyHash(plainText: string, hashText: string) {
  return bcrypt.compare(plainText, hashText);
}
