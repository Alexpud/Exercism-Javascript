export var Triangle = function(sideA, sideB, sideC) {
  this.kind = () => {
    validateSides();
    if (isEquilateral()) return 'equilateral';
    if (isIsosceles()) return 'isosceles';
    return 'scalene';
  }

  var validateSides = () => {
    validateTriangleInequality();
    validateSidesLength();
  }

  var validateTriangleInequality = () => {
    if ((sideA + sideB < sideC) || 
        (sideC + sideB < sideA) || 
        (sideB + sideC < sideA)) throws;
  }

  var validateSidesLength = () => {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) throws;
  }
  
  var isEquilateral = () => {
    return sideA == sideB && sideB == sideC;
  }
  
  var isIsosceles = () => {
    return (sideA == sideB && sideA != sideC) || 
            (sideA == sideC && sideA != sideB) || 
            (sideB == sideC && sideB != sideA);
  }
};