function solve(args) {
    let numbers = args.slice(1),
        len = numbers.length,
        mergeArray = [],
        squashArray = [];

    for (let i = 0; i < len - 1; i += 1) {
        const number1 = numbers[i];
        const number2 = numbers[i + 1];
        const merged = mergeNumbers(number1, number2);
        mergeArray.push(merged);
    }
    console.log(mergeArray.join(' '));

    for (let i = 0; i < len - 1; i += 1) {
        const number1 = numbers[i];
        const number2 = numbers[i + 1];
        const squashed = squashNumbers(number1, number2);
        squashArray.push(squashed);
    }
    console.log(squashArray.join(' '));

    function mergeNumbers(number1, number2) {
        const mergedNumber = number1.substr(1) + number2.substring(0, 1);
        return mergedNumber;
    }

    function squashNumbers(number1, number2) {
        let middleSum = parseInt(number1.substr(1)) + parseInt(number2.substring(0, 1));
        if (middleSum > 9) {
            middleSum = '' + middleSum;
            const middleNumber = middleSum.substr(1);
            const squashedNumber = number1.substring(0, 1) + middleNumber + number2.substr(1);
            return squashedNumber;
        }
            middleSum.toString();
            const squashedNumber = number1.substring(0, 1) + middleSum + number2.substr(1);
            return squashedNumber;
    }
}
solve(['11',
    '44',
    '69',
    '46',
    '63',
    '83',
    '13',
    '62',
    '14',
    '31',
    '68',
    '87']);
