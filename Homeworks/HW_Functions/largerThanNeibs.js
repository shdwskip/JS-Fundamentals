function main(arr) {
    let len = +arr.shift(),
        seq = arr[0].split(' ').map(Number),
        count= 0;

    compare(seq);

    function compare() {
        for (let i = 1; i < len - 1; i += 1) {
            if (seq[i-1] < seq[i] && seq[i] > seq[i+1]) {
                count += 1;
            }
        }
        console.log(count);
    }
}

const arr = ['6', '-26 -25 -28 31 2 27'];
main(arr);
