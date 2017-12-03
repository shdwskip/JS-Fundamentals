// different input format

function solve(arr) {
    let len = +arr.shift(),
        num = +arr.pop(),
        count = 0,
        seq = arr[0].split(' ').map(Number);

    appCount(arr);

    function appCount() {
        for (let i = 0; i < seq.length; i += 1) {
            if (seq[i] === num) {
                count += 1;
            }
        }
        console.log(count);
    }
}

const arr = ['8', '28 6 21 6 -7856 73 73 -56', '73'];
solve(arr);
