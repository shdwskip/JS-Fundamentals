function biggestNum(arr) {
    const x = parseFloat(arr[0]);
    const y = parseFloat(arr[1]);
    const z = parseFloat(arr[2]);

    if (x >= y) {
        if (x >= z) {
            console.log(x);
        } else {
            console.log(z);
        }
    } else if (y >= x) {
        if (y >= z) {
            console.log(y);
        } else {
            console.log(z);
        }
    } else {
        console.log(z);
    }
}
const arr = Array;
arr[0] = 0.20000000000001;
arr[1] = 0.2;
arr[2] = 0.2;
biggestNum(arr);
