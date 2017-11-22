/* jshint esversion: 6 */

function solve(params) {
    var N = +params[0],
        K = +params[1],
        sequence = params[2].split(' ').map(Number),
        result = [];
    for (let i = 0; i <= N - K; i += 1) {
        let tempArr = [];
        for (let j = 0; j < K; j += 1) {
            tempArr.push(sequence[i + j]);
        }
        let min = Math.min(...tempArr);
        let max = Math.max(...tempArr);
        result.push(min + max);
    }
    console.log(result.join(','));
}
solve([
    '8',
    '4',
    '1 8 8 4 2 9 8 11'
]);