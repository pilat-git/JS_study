const Calculator = require('./calculator');

describe('unit tests for calculator.js file', () =>
{
    let calc;

    beforeEach(() =>
    {
        calc = new Calculator();
    });

    // block for unit tests of the add method
    describe('add method tests', () =>
    {
        it('should sum multiple positive numbers', () =>
        {
            expect(calc.add(1, 2, 3, 4, 5)).toBe(15);
        });

        it('should return the same number if only one argument provided', () =>
        {
            expect(calc.add(5)).toBe(5);
        });

        it('should return 0 if no arguments provided', () =>
        {
            expect(calc.add()).toBe(0);
        });

        it('should handle negative numbers correctly', () =>
        {
            expect(calc.add(-3, -13, 16)).toBe(0);
        });

        it('should sum two negative numbers correctly', () =>
        {
            expect(calc.add(-5, -10)).toBe(-15);
        });

        it('should return a negative sum when negative numbers dominate', () =>
        {
            expect(calc.add(-10, 5, -2)).toBe(-7);
        });

        it('should return the same number when adding zero', () =>
        {
            expect(calc.add(5, 0)).toBe(5);
        });

        it('should return zero when provided zero', () =>
        {
            expect(calc.add(0)).toBe(0);
        });

    });

    // block for unit tests of the multiply method
    describe('multiply method tests', () =>
    {
        it('should multiply multiple numbers', () =>
        {
            expect(calc.multiply(2, 3, 4)).toBe(24);
        });

        it('should return the same number if only one argument provided', () =>
        {
            expect(calc.multiply(4)).toBe(4);
        });

        it('should return 1 if no arguments provided', () =>
        {
            expect(calc.multiply()).toBe(1);
        });

        it('should return 0 if one of the numbers is 0', () =>
        {
            expect(calc.multiply(10, 20, 0, 5)).toBe(0);
        });

        it('should return 0 when multiplying a negative number by zero', () =>
        {
            expect(calc.multiply(-20, 0)).toBe(0);
        });

        it('should return a negative result when multiplying by one negative number', () =>
        {
            expect(calc.multiply(-2, 5, 3)).toBe(-30);
        });

        it('should return a positive result when multiplying two negative numbers', () =>
        {
            expect(calc.multiply(-2, -4)).toBe(8);
        });

        it('should return the same number when multiplying by 1', () =>
        {
            expect(calc.multiply(10, 1)).toBe(10);
        });
    });

    // block for unit tests of the subtraction method
    describe('subtraction method tests', () =>
    {
        it('should subtract positive numbers', () =>
        {
            expect(calc.subtraction(10, 3)).toBe(7);
        });

        it('should return negative result if subtrahend is larger', () =>
        {
            expect(calc.subtraction(5, 10)).toBe(-5);
        });

        it('should return 0 when subtracting a number from itself', () =>
        {
            expect(calc.subtraction(7, 7)).toBe(0);
        });

        it('should return 0 when subtracting a negative number from itself', () =>
        {
            expect(calc.subtraction(-5, -5)).toBe(0);
        });

        it('should return a positive result when subtracting from a negative number (result > 0)', () =>
        {
            expect(calc.subtraction(-5, -10)).toBe(5);
        });

        it('should return a negative result when subtracting from a negative number (result < 0)', () =>
        {
            expect(calc.subtraction(-5, 10)).toBe(-15);
        });

        it('should return a negative value when subtracting from zero', () =>
        {
            expect(calc.subtraction(0, 5)).toBe(-5);
        });

        it('should return the same number when subtracting zero', () =>
        {
            expect(calc.subtraction(5, 0)).toBe(5);
        });

        it('should return NaN if no arguments provided', () =>
        {
            expect(calc.subtraction()).toBeNaN();
        });

        it('should return NaN if only one argument provided', () =>
        {
            expect(calc.subtraction(10)).toBeNaN();
        });
    });

    // block for unit tests of the divide method
    describe('divide method tests', () =>
    {
        it('should divide correctly', () =>
        {
            expect(calc.divide(20, 4)).toBe(5);
        });

        it('should return a decimal result when dividend is smaller than divider', () =>
        {
            expect(calc.divide(2, 5)).toBe(0.4);
        });

        it('should return Infinity when dividing by zero (JS specific behavior)', () =>
        {
            expect(calc.divide(10, 0)).toBe(Infinity);
        });

        it('should return 0 when dividend is zero', () =>
        {
            expect(calc.divide(0, 5)).toBe(0);
        });

        it('should return a positive result when dividing two negative numbers', () =>
        {
            expect(calc.divide(-10, -2)).toBe(5);
        });

        it('should return NaN if no arguments provided', () =>
        {
            expect(calc.divide()).toBeNaN();
        });

        it('should return NaN if only one argument provided', () =>
        {
            expect(calc.divide(10)).toBeNaN();
        });
    });

    // block for unit tests of the exponentiation method
    describe('exponentiation method tests', () =>
    {
        it('should return 1 when squaring -1', () =>
        {
            expect(calc.exponentiation(-1)).toBe(1);
        });

        it('should return 1 when squaring 1', () =>
        {
            expect(calc.exponentiation(1)).toBe(1);
        });

        it('should return 0 when squaring 0', () =>
        {
            expect(calc.exponentiation(0)).toBe(0);
        });

        it('should return NaN if no arguments provided', () =>
        {
            expect(calc.exponentiation()).toBeNaN();
        });
    });
});
