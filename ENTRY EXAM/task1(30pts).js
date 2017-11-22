function solve(args) {
    let number = args,
        len = number.length,
        temp = 0;
    let broke = false;


    while (true) {
        temp = 0;
        for (let i = 0; i < number.length; i += 1) {
            broke = false;
            if (number[i] == '.' || number[i] == '-') {
                continue;
            }
            let digit = +number[i];
            temp += Math.abs(digit);
            if (temp > 9) {
                number = temp.toString();
                broke = true;
                break;
            }
        }
        if (!broke) {
            number = temp.toString();
            console.log(number);
            break;
        }else{
            if (temp < 10) {
                console.log(temp);
            }
        }
    }

}
// solve(5);
// console.log('==================');
// solve('-4321');
// console.log('==================');
solve('102000034000567.00000800000900');
