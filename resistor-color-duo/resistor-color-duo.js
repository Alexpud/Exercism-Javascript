//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

let COLORS = [];
COLORS['BLACK'] = 0;
COLORS['BROWN'] = 1;
COLORS['RED'] = 2;
COLORS['ORANGE'] = 3;
COLORS['YELLOW'] = 4;
COLORS['GREEN'] = 5;
COLORS['BLUE'] = 6;
COLORS['VIOLET'] = 7;
COLORS['GREY'] = 8;
COLORS['WHITE'] = 9;

export const value = (colors) => {
  let colorsNumberRepresentation = "";
  colors.forEach((color) => {
    let colorValue = COLORS[color.toUpperCase()];
    if (colorValue === undefined) throw Error('Color not found');
    colorsNumberRepresentation += colorValue;
  });
  return Number(colorsNumberRepresentation);
};
