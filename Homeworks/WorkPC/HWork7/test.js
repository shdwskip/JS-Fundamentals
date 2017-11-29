function isGreater(number) {
    return number >= 18;
}

const result = [11, 22, 33];
const result1 = [18, 22, 33];

console.log(result.every(isGreater));
console.log(result1.every(isGreater));
