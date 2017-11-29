function solve(args) {
    let sequence = args[0].split(' ').map(Number),
        len = sequence.length;
    const secondSequence = [];
    let result = 0;

    for (let i = 1; i < len; i += 1) {
        const currentNumber = Math.abs(sequence[i] - sequence[i-1]);
        if (currentNumber % 2 !== 0) {
            secondSequence.push(currentNumber);
        } else {
            i += 1;
            secondSequence.push(currentNumber);
        }
    }

    const len2 = secondSequence.length;
    for (let i = 0; i < len2; i += 1) {
        if (secondSequence[i] % 2 == 0) {
            result += secondSequence[i];
        }
    }
    console.log(result);
}
solve(['1 6 8 10 3 1 1']);
solve(['-5 5 1 8 -4 1 2']);
