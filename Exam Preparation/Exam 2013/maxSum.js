function solve(params) {
    const totalNumbers = +params[0];
    const sequence = params.slice(1).map(Number);
    let result = sequence[0];
    let maxResult = sequence[0];

    for (let i = 1; i < totalNumbers; i += 1) {
        result = Math.max(sequence[i], result + sequence[i]);
        maxResult = Math.max(maxResult, result);
        // console.log(result, maxResult, sequence[i]);
    }
    // console.log(result, maxResult);
    console.log(maxResult);
}
solve([
    '9',
    '-9',
    '-8',
    '-8',
    '-7',
    '-6',
    '-5',
    '-1',
    '-7',
    '-6']
);
