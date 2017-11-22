function solve(args) {
    let number = args[0],
        len = number.length,
        numArray = [],
        stop = false;
    iterations = 0;

    for (let i = 0; i < len; i += 1) {
        numArray.push(+number[i]);
    }
    if (len === 1) {
        for (let i = 1; i <= 10; i += 1) {
            console.log(+number + i);
        }
        stop = true;
    }
    while (iterations < 10 && !stop) {
        let x = 1;
        if (numArray[len - x] != 9) {
            numArray[len - x] += 1;
            console.log(numArray.join(''));
            iterations += 1;
        } else {
            numArray[len - x] = 0;
            x += 1;
            numArray[len - x] += 1;
            if (numArray[len - x] === 10 && len > 1) {
                numArray[len - x] = 0;
                numArray.shift();
                numArray.unshift(10);
            }
            console.log(numArray.join(''));
            iterations += 1;
        }
    }


}
solve(['9243536798']);