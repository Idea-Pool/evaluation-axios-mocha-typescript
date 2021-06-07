import * as randomstring from 'randomstring';

export function generateAlphanumericString(length: number): string {
  return randomstring.generate(length);
}

export function generateAlphabeticString(length: number) {
  return randomstring.generate({ length, charset: 'alphabetic' });
}
