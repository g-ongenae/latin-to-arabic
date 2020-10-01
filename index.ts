/**
 * Convert from latin to arabic numbers
 */
export function toArabic(latin: string): number {
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
  "" = 0,
}

const LONG_TO_SHORT_MAP = {
  DCCCC: "CM", // 900
  CCCC: "CD", // 400
  LXXXX: "XC", // 90
  XXXX: "XL", // 40
  VIIII: "IX", // 9
  IIII: "IV", // 4
};

/**
 * Convert from arabic numbers to latin
 */
export function toLatin(arabic: number): string {
  let latin = "";

  function convertStep(before: LatinToArabic | number, current: LatinToArabic) {
    if (arabic >= before) {
      return;
    }

    if (arabic >= current) {
      latin += LatinToArabic[current];
      arabic -= current;
    }
  }

  while (arabic > 0) {
    convertStep(Number.POSITIVE_INFINITY, LatinToArabic.M);
    convertStep(LatinToArabic.M, LatinToArabic.D);
    convertStep(LatinToArabic.D, LatinToArabic.C);
    convertStep(LatinToArabic.C, LatinToArabic.L);
    convertStep(LatinToArabic.L, LatinToArabic.X);
    convertStep(LatinToArabic.X, LatinToArabic.V);
    convertStep(LatinToArabic.V, LatinToArabic.I);
  }

  Object.keys(LONG_TO_SHORT_MAP).forEach((key: keyof typeof LONG_TO_SHORT_MAP) => {
    latin = latin.replace(key, LONG_TO_SHORT_MAP[key]);
  });

  return latin;
}
