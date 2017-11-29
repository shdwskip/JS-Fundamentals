const numberStr = '11';
const number = +numberStr;
let divider = 2;
const maxDivider = Math.sqrt(number);
let prime = true;
while (prime && (divider <= maxDivider)) {
if (!(number % divider)) {
prime = false;
}
divider++;
}
console.log('output-tb', prime);
