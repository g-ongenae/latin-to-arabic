/**
 * Convert from latin to arabic numbers
 */
export function toArabic(latin: string): number{
  return parseInt(latin, 10);
}

enum LatinToArabic {
  M = 1000,
  D = 500,
  C = 100,
  L = 50,
  X = 10,
  V = 5,
  I = 1,
}

/**
 * Convert from arabic numbers to latin
 */
export function toLatin(arabic: number): string {
  let latin = '';

  while (arabic > 0) {
    if (arabic >= LatinToArabic.M) {
      latin += 'M';
      arabic -= LatinToArabic.M;
      continue;
    }

    if (arabic >= LatinToArabic.M - LatinToArabic.C) {
      latin += 'CM';
      arabic -= LatinToArabic.M - LatinToArabic.C;
      continue;
    }

    if (arabic >= LatinToArabic.D) {
      latin += 'D';
      arabic -= LatinToArabic.D;
      continue;
    }

    if (arabic >= LatinToArabic.D - LatinToArabic.C) {
      latin += 'CD';
      arabic -= LatinToArabic.D - LatinToArabic.C;
      continue;
    }

    if (arabic >= LatinToArabic.C) {
      latin += 'C';
      arabic -= LatinToArabic.C;
      continue;
    }

    if (arabic >= LatinToArabic.C - LatinToArabic.X) {
      latin += 'XC';
      arabic -= LatinToArabic.C - LatinToArabic.X;
      continue;
    }

    if (arabic >= LatinToArabic.L) {
      latin += 'L';
      arabic -= LatinToArabic.L;
      continue;
    }

    if (arabic >= LatinToArabic.L - LatinToArabic.X) {
      latin += 'XL';
      arabic -= LatinToArabic.L - LatinToArabic.X;
      continue;
    }

    if (arabic >= LatinToArabic.X) {
      latin += 'X';
      arabic -= LatinToArabic.X;
      continue;
    }

    if (arabic >= LatinToArabic.X - LatinToArabic.I) {
      latin += 'IX';
      arabic -= LatinToArabic.X - LatinToArabic.I;
      continue;
    }

    if (arabic >= LatinToArabic.V) {
      latin += 'V';
      arabic -= LatinToArabic.V;
      continue;
    }

    if (arabic >= LatinToArabic.V - LatinToArabic.I) {
      latin += 'IV';
      arabic -= LatinToArabic.V - LatinToArabic.I;
      continue;
    }

    if (arabic >= LatinToArabic.I) {
      latin += 'I';
      arabic -= LatinToArabic.I;
      continue;
    }
  }

  return latin;
}
