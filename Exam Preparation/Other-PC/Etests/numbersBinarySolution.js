function solve(params) {
    const N = parseInt(params[0]).toString(2);
    console.log(typeof(N));
    let output;
    const len = N.length;
    const one = Array(len).join('0') + 1;
    console.log(one.length);

    for (let i = len - 1; i >= 0; i -= 1 ) {
        if (+N[i] === 0) {
            output = N ^ one;
            // output = N.substring(0, i) + '1';
            console.log(parseInt(output, 2).toString(10));
        } else {
            output = N ^ 1;
            output = N.substr(0, i) + '0' + N.substr(i + 1);
            console.log(parseInt(output, 2).toString(10));
        }
    }

    console.log(N);
    console.log(parseInt(1110111011, 2).toString(10));
    console.log(parseInt(95, 10).toString(2));
    console.log(parseInt(96, 10).toString(2));
}
solve(['95']);
