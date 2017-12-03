function thirdDigit(a) {
    const temp = Math.floor(a / 100);
    const digit = temp % 10;
    if (digit == 7) {
        console.log('true');
    } else {
        console.log('false' + ' ' + digit);
    }
}
const a=801;
thirdDigit(a);
