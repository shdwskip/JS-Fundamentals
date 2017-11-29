/* Numbers have powers! They can transform themselves. One transformation is done by replacing:
 each 0 - with the absolute difference of its neighboring numbers
 all other even numbers - with the maximum of its neighboring numbers
 each 1 - with the sum of its neighboring numbers
 all other odd numbers - with the minimum of its neighboring numbers

The leftmost and rightmost numbers are neighbors.
A K-sum of a sequence is the sum of the numbers after K transformations of the sequence. Your task is to
find the K-sum of a given sequence. */

/* jshint esversion: 6 */

function solve(params) {
    let nk = params[0].split(' ').map(Number),
        seq = params[1].split(' ').map(Number),
        len = nk[0],
        count = 0,
        iterrations = nk[1],
        result = 0;

    function transform(num, left, right) {
        if (num === 0) {
            return Math.abs(left - right);
        } else if (num === 1) {
            return (left + right);
        } else if (num % 2 === 0) {
            return Math.max(left, right);
        }
            return Math.min(left, right);
    }

    while (count < iterrations) {
        const currentSeq = [];
        for (let i = 0; i < len; i += 1) {
            if (i === 0) {
                currentSeq[i] = transform(seq[i], seq[len - 1], seq[i + 1]);
            } else if (i === (len - 1)) {
                currentSeq[i] = transform(seq[i], seq[i - 1], seq[0]);
            } else {
                currentSeq[i] = transform(seq[i], seq[i - 1], seq[i + 1]);
            }
        }
        seq = currentSeq;
        count += 1;
    }

    for (let i = 0; i < len; i += 1) {
        result += seq[i];
    }
    console.log(result);
}

const arr = ['10 3',
    '1 9 1 9 1 9 1 9 1 9',
];
solve(arr);
