export const isLeap = (year) => {
    var isDivisibleBy4 = year % 4 == 0;
    var isEvenlyDivisibleBy100 = year % 100 == 0;
    var isEvenlyDivisibleBy400 = year % 400 == 0;
    return isDivisibleBy4 && (!isEvenlyDivisibleBy100 || isEvenlyDivisibleBy400)
};