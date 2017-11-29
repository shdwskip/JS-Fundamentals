function solve(args) {
    let signal = args[0],
    result = [];

    for (let i = 0; i < signal.length; i += 1) {
        const current = signal[i];
        const next = signal[i+1];
        if (current == next) {
            continue;
        }
        result.push(current);
    }
    console.log(result.join(''));
}
solve(['Hello']);
solve(['hoboobbo422222Aaao']);
