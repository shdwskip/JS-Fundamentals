/* jshint esversion: 6 */

function solve(params) {
    let sum = 0,
        product = 1,
        input = params[0],
        offset = +params[1],
        CONSTANTS = {
            ALPHABET: 'abcdefghijklmnopqrstuvwxyz',
        };
    const compressedText = compressText(input);
    const encryptedText = encryptText(compressedText, offset);

    transformText(encryptedText);
    console.log(sum);
    console.log(product);

    function compressText(string) {
        let result = '';
        for (let i = 0; i < string.length; i += 1) {
            let counter = 1;
            let currentSymbol = string[i],
                nextSymbol = string[i + 1];

            while (string[i] == string[i + 1]) {
                counter += 1;
                i += 1;
            }

            if (counter > 2) {
                result += counter + currentSymbol;
            } else if (counter == 2) {
                result += currentSymbol + currentSymbol;
            } else if (counter == 1) {
                result += currentSymbol;
            }
        }
        return result;
    }

    function encryptText(string, offset) {
        let result = '',
            cipherLetterCode = 0;

        for (let i = 0; i < string.length; i += 1) {
            const currentSymbol = string[i];
            if (isFinite(currentSymbol)) {
                result += currentSymbol;
            } else {
                const currentLetterCode = currentSymbol.charCodeAt();
                // shift alphabet with offset
                cipherLetterCode = currentLetterCode + CONSTANTS.ALPHABET.length - offset;
                // if cipher letter code is after letter 'z'
                if (cipherLetterCode > 122) {
                    cipherLetterCode -= CONSTANTS.ALPHABET.length; // decrease with alphabet length
                }
                const codeNumber = currentLetterCode ^ cipherLetterCode;
                result += codeNumber;
            }
        }
        return result;
    }

    function transformText(string) {
        for (let i = 0; i < string.length; i += 1) {
            const digit = +string[i];
            if (digit % 2 == 0) {
                sum += digit;
            } else {
                product *= digit;
            }
        }
    }
}

solve([
    'xxxxbbbccccaa',
    '8',
]);
