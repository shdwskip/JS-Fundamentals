function multipSign(arr) {
    const x = arr[0];
    const y = arr[1];
    const z = arr[2];

    if (x > 0 && y > 0 && z > 0) {
        console.log('+');
    } else if (x == 0 || y == 0 || z == 0) {
        console.log('0');
    } else if (x < 0 && y < 0 && z < 0) {
        console.log('-');
    } else if (x > 0 && y < 0 && z < 0) {
        console.log('+');
    } else if (x < 0 && y > 0 && z < 0) {
        console.log('+');
    } else if (x < 0 && y < 0 && z > 0) {
        console.log('+');
    } else {
        console.log('-');
    }
}
const arr = Array;
arr[0] = 2;
arr[1] = -6;
arr[2] = -4;
multipSign(arr);
