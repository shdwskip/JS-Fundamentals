function charArrs(arr) {
    let firstArr = arr[0],
        secondArr = arr[1],
        char,
        longer;
        chArr1 = [];
        chArr2 = [];

    if (firstArr > secondArr) {
        longer = firstArr;
    } else {
        longer = secondArr;
    }

    for (i = 0; i < longer.length; i += 1) {
        chArr1[i] = firstArr[i].toLowerCase();
        chArr2[i] = secondArr[i].toLowerCase();
    }

    for (char = 0, len = longer.length; char < len; char += 1) {
        if (chArr1[char] < chArr2[char]) {
            return '<';
        } else if (chArr1[char] > chArr2[char]) {
            return '>';
        }
    }
    return '=';
}
const arr = Array;
arr[0] = ['a', 'a', 'c'];
arr[1] = ['a', 'A', 'c'];
// arr[2] = arr[1][1].toLowerCase();
charArrs(arr);
