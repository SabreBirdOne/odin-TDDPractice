import caesarCipher from './caesarCipher.js'

test('caesarCipher encrypt empty string', () => {
    expect(caesarCipher('', 3)).toBe('');
});

test('caesarCipher encrypt xyz', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('caesarCipher encrypt HeLLo', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('caesarCipher encrypt Hello, World!', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test("caesarCipher encrypt M asr'x qmww!", () => {
    expect(caesarCipher("M asr'x qmww!", 22)).toBe("I won't miss!");
});