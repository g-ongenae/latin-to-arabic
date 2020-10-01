import assert from "assert";
import forEach from "mocha-each";

import { toArabic, toLatin } from "./index";

describe.skip("Convert from latin to arabic numbers", (): void => {
  forEach([
    ["I", 1],
    ["II", 2],
    ["III", 3],
    ["IV", 4],
    ["V", 5],
    ["VI", 6],
    ["IX", 9],
    ["XXVII", 27],
    ["XLVIII", 48],
    ["LIX", 59],
    ["XCIII", 93],
    ["CXLI", 141],
    ["CLXIII", 163],
    ["CDII", 402],
    ["DLXXV", 575],
    ["CMXI", 911],
    ["MXXIV", 1024],
    ["MMM", 3000],
  ]).it("should convert %j to %d", (latin: string, arabic: number): void => {
    assert(toArabic(latin) === arabic);
  });
});

describe("Convert from arabic numbers to latin", (): void => {
  forEach([
    [1, "I"],
    [2, "II"],
    [3, "III"],
    [4, "IV"],
    [5, "V"],
    [6, "VI"],
    [9, "IX"],
    [27, "XXVII"],
    [48, "XLVIII"],
    [59, "LIX"],
    [93, "XCIII"],
    [141, "CXLI"],
    [163, "CLXIII"],
    [402, "CDII"],
    [575, "DLXXV"],
    [911, "CMXI"],
    [1024, "MXXIV"],
    [3000, "MMM"],
  ]).it("should convert %d to %j", (arabic: number, latin: string): void => {
    assert(toLatin(arabic) === latin);
  });
});
