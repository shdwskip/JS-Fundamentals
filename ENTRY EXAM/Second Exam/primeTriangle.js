function solve(args) {
    const N = +args[0];
    const sequence = [];

    for (let i = 1; i <= N; i += 1) {
        sequence[i] = true;
    }

    for (let i = 2; i <= Math.sqrt(N); i += 1) {
        if (sequence[i] === true) {
            for (let j = i * i; j <= N; j += i) {
                sequence[j] = false;
            }
        }
    }

    const primeSequence = sequence.slice(0, sequence.lastIndexOf(true) + 1);

    for (let i = 1; i < primeSequence.length; i += 1) {
        let line = '';
        if (primeSequence[i] == false) {
            continue;
        }
        for (let j = 1; j <= i; j += 1) {
            if (primeSequence[j] == true) {
                line += '1';
            } else {
                line += '0';
            }
        }
        console.log(line);
    }
}


solve([10]);
