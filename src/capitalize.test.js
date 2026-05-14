import "./capitalize";
import { capitalize } from "./capitalize";

test('Capitalize empty string', () => {
    expect(capitalize('')).toBe('');
});

test('Capitalize 1 character', () => {
    expect(capitalize('a')).toBe('A');
});

test('Capitalize name', () => {
    expect(capitalize('white glint')).toBe('White glint');
});

test('Capitalize numbers', () => {
    expect(capitalize('123')).toBe('123');
});
