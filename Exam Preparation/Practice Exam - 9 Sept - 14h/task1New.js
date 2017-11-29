function solve(args) {
    let number = args[0],
        numArray = [],
        len = number.length,
        previousIsZero = false,
        iterations = 0;

    for (let i = 0; i < len; i += 1) {
        numArray.push(+number[i]);
    }

    const finalArray = [];

    while (iterations < 10) {
        let lastDigit = numArray.length - 1,
            i = 1;
        while (numArray[lastDigit - 1] < 9 && iterations < 10) {
            lastDigit = numArray.length - 1;
            numArray[lastDigit] += 1;
            finalArray.push(numArray.join(''));
            iterations += 1;
        }
        if (iterations !== 10) {
            lastDigit = 0;
            numArray[len - i] = lastDigit;
            i += 1;
            if (numArray[len - i] !== 9 && (len - i !== 0)) {
                numArray[len - i] += 1;
            } else {
                numArray[len - i] = 0;
                previousIsZero = true;
                i += 1;
                if (numArray[len - i] !== 9 && previousIsZero) {
                    numArray[len - i] += 1;
                    finalArray.push(numArray.join(''));
                    i += 1;
                    iterations += 1;
                } else if (len - i === 0) {
                    numArray[len - i] = 0;
                    numArray.unshift(1);
                    finalArray.push(numArray.join(''));
                    iterations += 1;
                }
            }
        } else {
            break;
        }
    }

    for (const num of finalArray) {
        console.log(num);
    }
}

solve(['999']);
