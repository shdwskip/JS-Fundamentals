function solve(params) {
    let heights = params[0].split(' ').map(Number),
        result = 0,
        maxResult = 0,
        peaks = [];

    function isPeak(index) {
        if (index === 0 || index === heights.length - 1) {
            return true;
        }
        if (heights[index] > heights[index - 1] && heights[index] > heights[index + 1]) {
            return true;
        }
        return false;
    }
    heights.forEach(function(height, index) {
        if (isPeak(index)) {
            peaks.push(index);
        }
    });

    for (let i = 1; i < peaks.length; i += 1) {
        const startIndex = peaks[i - 1];
        const endIndex = peaks[i];
        result = 0;
        for (let j = startIndex; j <= endIndex; j += 1) {
            result += heights[j];
        }
        if (result > maxResult) {
            maxResult = result;
        }
    }
    console.log(maxResult);
}

//     for (let i = 0; i < heights.length - 1; i += 1){

//         let peak = peaksIndexes[i];
//         let secondPeak = peaksIndexes[i + 1];
//         for (let j = peak; j <= secondPeak; j += 1){
//             result += heights[j];
//         }
//         if (result > maxResult) {
//             maxResult = result;
//             result = 0;
//         }
//     }
//    console.log(maxResult);
solve([
    '5 1 7 4 8',
]);

solve([
    '5 1 7 6 5 6 4 2 3 8',
]);
