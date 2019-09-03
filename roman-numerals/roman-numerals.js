import { FORMERR } from "dns";

//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
let arabicRoman = [];
arabicRoman.push({'arabic': 10, 'roman': 'X'});
arabicRoman.push({'arabic': 9, 'roman': 'IX'});
arabicRoman.push({'arabic': 5, 'roman': 'V'});
arabicRoman.push({'arabic': 4, 'roman': 'IV'});
arabicRoman.push({'arabic': 1, 'roman': 'I'});

export const toRoman = (number) => {
  let result = "";
  arabicRoman.forEach((element) => {
    while(number - element.arabic >= 0) {
      number -= element.arabic;
      result += element.roman;
    }
  });
  return result;
};
