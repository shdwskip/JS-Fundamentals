function solve(args) {
    let str = args[0],
        brackets = 0;
    for (let ch in str) {
        if (str[ch] === '(') {
            brackets += 1;
        }
        else if (str[ch] === ')') {
            brackets -= 1;
        }

        if (brackets < 0) {
            console.log('Incorrect');
            break;
        }
    }

    if (brackets === 0) {
        console.log('Correct');
    }
    else if (brackets > 0) {
        console.log('Incorrect');
    }
}
let arr = [')(a+b))'];
solve(arr);