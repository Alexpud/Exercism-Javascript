import { FORMERR } from "dns";

//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function NumberRepresentation(arabic, roman) {
  this.inArabic = arabic;
  this.inRoman = roman;
}

let numberRepresentations = [];
numberRepresentations.push(new NumberRepresentation(1000, 'M'));
numberRepresentations.push(new NumberRepresentation(900, 'CM'));
numberRepresentations.push(new NumberRepresentation(500, 'D'));
numberRepresentations.push(new NumberRepresentation(400, 'CD'));
numberRepresentations.push(new NumberRepresentation(100, 'C'));
numberRepresentations.push(new NumberRepresentation(90, 'XC'));
numberRepresentations.push(new NumberRepresentation(50, 'L'));
numberRepresentations.push(new NumberRepresentation(40, 'XL'));
numberRepresentations.push(new NumberRepresentation(10, 'X'));
numberRepresentations.push(new NumberRepresentation(9, 'IX'));
numberRepresentations.push(new NumberRepresentation(5, 'V'));
numberRepresentations.push(new NumberRepresentation(4, 'IV'));
numberRepresentations.push(new NumberRepresentation(1, 'I'));

export const toRoman = (number) => {
  let result = "";
  numberRepresentations.forEach((numberRepresentation) => {
    ({ number, result } = mapToRomanNumber(number, numberRepresentation, result));
  });
  return result;
};

function mapToRomanNumber(number, numberRepresentation, result) {
  while (number - numberRepresentation.inArabic >= 0) {
    number -= numberRepresentation.inArabic;
    result += numberRepresentation.inRoman;
  }
  return { number, result };
}

