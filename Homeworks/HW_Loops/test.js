var numberStr = '11';
var number = +numberStr;
var divider = 2;
var maxDivider = Math.sqrt(number);
var prime = true;
while (prime && (divider <= maxDivider)) {
if (!(number % divider)) {
prime = false;
}
divider++;
}
console.log('output-tb',prime);