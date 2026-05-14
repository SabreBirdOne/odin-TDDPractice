upperCaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
lowerCaseAlphabet = upperCaseAlphabet.map((letter) => letter.toLowerCase());

function caesarCipherChar (character, shift) {
    if (upperCaseAlphabet.includes(character)) {
        const index = upperCaseAlphabet.findIndex((letter) => letter === character);
        return upperCaseAlphabet[(index + shift) % upperCaseAlphabet.length];
    }
    else if (lowerCaseAlphabet.includes(character)) {
        const index = lowerCaseAlphabet.findIndex((letter) => letter === character);
        return lowerCaseAlphabet[(index + shift) % lowerCaseAlphabet.length];
    }
    else {
        return character;
    }
}

export default function caesarCipher(string, shift){
    return string.split('').map((char) => caesarCipherChar(char, shift)).join("");
}