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
  '' = 0,
}

/**
 * Convert from arabic numbers to latin
 */
export function toLatin(arabic: number): string {
  let latin = '';

  function convertStep(before: LatinToArabic | Number, current: LatinToArabic, next: LatinToArabic | 0) {
    if (arabic >= before) {
      return;
    }

    if (arabic >= current) {
      latin += LatinToArabic[current];
      arabic -= current;
      return;
    }

    if (arabic >= current - next) {
      latin += LatinToArabic[next] + LatinToArabic[current];
      arabic -= current - next;
    }
  }

  while (arabic > 0) {
    convertStep(Number.POSITIVE_INFINITY, LatinToArabic.M, LatinToArabic.C);
    convertStep(LatinToArabic.M, LatinToArabic.D, LatinToArabic.C);
    convertStep(LatinToArabic.D, LatinToArabic.C, LatinToArabic.X);
    convertStep(LatinToArabic.C, LatinToArabic.L, LatinToArabic.X);
    convertStep(LatinToArabic.L, LatinToArabic.X, LatinToArabic.I);
    convertStep(LatinToArabic.X, LatinToArabic.V, LatinToArabic.I);
    convertStep(LatinToArabic.V, LatinToArabic.I, 0);
  }

  return latin;
}
