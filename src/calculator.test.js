import './calculator.js';
import calculator from './calculator.js';

test('calculator defined', () => {
    expect(calculator).toBeDefined();
});

test('calculator add', () => {
    expect(calculator.add(calculator.add(6,2), 1)).toBe(9);
})

test('calculator subtract', () => {
    expect(calculator.subtract(1, 10)).toBe(-9);
});

test('calculator multiply', () => {
    expect(calculator.multiply(3,3)).toBe(9);
});

test('calculator divide', () => {
    expect(calculator.divide(27, 3)).toBe(9);
})

test('calculator division by zero', () => {
    expect(calculator.divide(9,0)).toBeFalsy();
})