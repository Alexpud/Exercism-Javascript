//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

let Colors = {
  Black: 0,
  Brown: 1,
  Red: 2,
  Orange: 3,
  Yellow: 4,
  Green: 5,
  Blue: 6,
  Violet: 7,
  Grey: 8,
  White: 9
};

export const value = (colors) => {
  let colorsNumberRepresentation = "";
  colors.map((color) => colorsNumberRepresentation += colorNumberRepresentationLookUp(color));
  return Number(colorsNumberRepresentation);
};

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const colorNumberRepresentationLookUp = (color) => {
  let colorValue = Colors[capitalize(color)];
  if (colorValue === undefined) throw Error('Color not found');
  return colorValue;
}

