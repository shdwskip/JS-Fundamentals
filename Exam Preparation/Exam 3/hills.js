/* jshint esversion: 6 */

function solve(args) {
    let heights = args[0].split(' ').map(Number),
        result = 0,
        maxResult = 0,
        peaksIndexes = [],
        valleys = [];

    //create valleys array
    for (let i = 1; i < heights.length - 1; i += 1) {
        if (heights[i - 1] > heights[i]) {
            if (heights[i + 1] > heights[i]) {
                valleys.push(heights[i]);
            }
        }
    }

    //create peaksIndexes array
    for (let i = 0, len = heights.length; i < len; i += 1) {
        if (i !== 0) {
            if (i !== len - 1) {
                if (heights[i] > heights[i - 1] && heights[i] > heights[i + 1]) {
                    peaksIndexes.push(i);
                }
            } else {
                peaksIndexes.push(i);
            }

        } else {
            peaksIndexes.push(i);
        }
    }

    for (let i = 0, len = peaksIndexes.length; i < len - 1; i += 1) {
        result = Math.abs(peaksIndexes[i + 1] - peaksIndexes[i]);
        if (result > maxResult) {
            maxResult = result;
        }
    }

    console.log(maxResult);
}

solve(['7 6 3 4 8']);