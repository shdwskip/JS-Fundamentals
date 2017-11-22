function solve(args) {
    let n = +args[0];
    let sum = 0,
        c = 0,
        b = 0,
        h = 0;
    for (c = 0; c <= n / 7; c += 1) {

        for (h = 0; h <= (n - 7 * c) / 5; h += 1) {

            if ((n - 7 * c - h * 5) % 2 !== 0) {
                if (c * 7 + h * 5 === n) {
                    sum += 1;
                }
            }
            else {

                sum += 1;
            }
        }

    }
    console.log(sum);
}
solve(['17']);