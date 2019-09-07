import { FORMERR } from "dns";

//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function arabicRoman(arabic, roman) {
  this.arabic = arabic;
  this.roman = roman;
}

let arabicRomans = [];
arabicRomans.push(new arabicRoman(1000, 'M'));
arabicRomans.push(new arabicRoman(900, 'CM'));
arabicRomans.push(new arabicRoman(500, 'D'));
arabicRomans.push(new arabicRoman(400, 'CD'));
arabicRomans.push(new arabicRoman(100, 'C'));
arabicRomans.push(new arabicRoman(90, 'XC'));
arabicRomans.push(new arabicRoman(50, 'L'));
arabicRomans.push(new arabicRoman(40, 'XL'));
arabicRomans.push(new arabicRoman(10, 'X'));
arabicRomans.push(new arabicRoman(9, 'IX'));
arabicRomans.push(new arabicRoman(5, 'V'));
arabicRomans.push(new arabicRoman(4, 'IV'));
arabicRomans.push(new arabicRoman(1, 'I'));

export const toRoman = (number) => {
  let result = "";
  arabicRomans.forEach((element) => {
    while(number - element.arabic >= 0) {
      number -= element.arabic;
      result += element.roman;
    }
  });
  return result;
};
