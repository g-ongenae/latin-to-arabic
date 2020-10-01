/**
 * Convert from latin to arabic numbers
 */
export function toArabic(latin: string): number {
  return parseInt(latin, 10);
}

const thousand: string[] = ["", "M", "MM", "MMM"];
const hundred: string[] = [
  "",
  "C",
  "CC",
  "CCC",
  "CD",
  "D",
  "DC",
  "DCC",
  "DCCC",
  "CM",
];
const ten: string[] = [
  "",
  "X",
  "XX",
  "XXX",
  "XL",
  "L",
  "LX",
  "LXX",
  "LXXX",
  "XC",
];
const one: string[] = [
  "",
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
];

/**
 * Convert from arabic numbers to latin
 */
export function toLatin(arabic: number): string {
  let roman: string = "";

  roman += thousand[Math.floor(arabic / 1000) % 10];
  roman += hundred[Math.floor(arabic / 100) % 10];
  roman += ten[Math.floor(arabic / 10) % 10];
  roman += one[arabic % 10];

  return roman;
}
