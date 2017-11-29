/* jshint esversion: 6 */

function solve(args) {
    const totalNumbers = +args[0];
    let answer = 0;
    const numbersArray = args.slice(1).map(Number);

    for (let i = 0; i < numbersArray.length; i += 1) {
        if (numbersArray[i] <= numbersArray[i + 1]) {
            continue;
        } else {
            answer += 1;
        }
    }
    console.log(answer);
}

solve([
    '9',
    '1',
    '8',
    '8',
    '7',
    '6',
    '5',
    '7',
    '7',
    '6']);
