function solve(number) {
    let result = 0;
    number = number.toString();
    while (true) {
        for (let i = 0; i < number.length; i += 1) {
            let digit = +number[i];
            if (isFinite(digit)) {
                result += digit;
            }
        }
        if (result > 9) {
            number = result.toString();
            result = 0;
        } else {
            console.log(result);
            break;
        }
    }
}

let tests = ['5', '-4321', '102000034000567.00000800000900'];

tests.forEach(function (test) {
    solve(test);
});