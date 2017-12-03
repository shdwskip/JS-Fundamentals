function binarySearch(arr) {
    let sequence = arr,
        len = +sequence.shift(),
        num = +sequence.pop(),
        min = 0,
        max = len - 1;

    while (min <= max) {
        const middle = Math.floor((min + max)/2);
        if (+sequence[middle] === num) {
            console.log(middle);
            break;
        } else if (+sequence[middle] > num) {
            max = middle - 1;
        } else {
            min = middle + 1;
        }
    }

    if (min > max) {
        console.log(-1);
    }
}

const arr = ['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '32'];
binarySearch(arr);
