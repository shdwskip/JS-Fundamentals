function numMatrix(arr) {
    const N = parseInt(arr[0]);

    for (let row = 1; row <= N; row += 1) {
        let line = '';
        for ( let col = row; col <= row + N - 1; col += 1) {
            line += col + ' ';
            if (col == row + N - 1) {
                line.trim();
                console.log(line);
            }
        }
    }
}

const arr = Array;
arr[0] = '4';
numMatrix(arr);
