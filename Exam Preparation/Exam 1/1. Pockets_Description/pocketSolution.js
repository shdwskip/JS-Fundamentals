function solve(args) {
    let heights = args[0].split(' ').map(Number),
        result = 0;

    for (let i = 1, len = heights.length; i < len - 2; i += 1) {
        if (heights[i] < heights[i - 1] && heights[i] < heights[i + 1]) {
            if (heights[i - 1] > heights[i - 2] && heights[i + 1] > heights[i + 2]) {
                result += heights[i];
            }
        }
    }
    console.log(result);
}

const arr = ['53 20 1 30 2 40 3 10 1'];
solve(arr);
