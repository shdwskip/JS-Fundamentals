function compare(arr) {
    const a = arr[0];
    const b = arr[1];

    if (a > b) {
        console.log(b + ' ' + a);
    } else if (a < b) {
        console.log(a + ' ' + b);
    } else {
        console.log(a + ' ' + b);
    }
}
const arr = Array;
arr[0] = 5;
arr[1] = 3;
compare(arr);
