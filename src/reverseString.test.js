import './reverseString.js'
import reverseString from './reverseString.js';

test("reverseString empty", ()=>{
    expect(reverseString('')).toBe('');
});

test("reverseString 1 character", ()=>{
    expect(reverseString('A')).toBe('A');
});

test("reverseString 2 characters", ()=>{
    expect(reverseString('Ab')).toBe('bA');
});

test("reverseString many characters", ()=>{
    expect(reverseString('nevaR')).toBe('Raven');
});