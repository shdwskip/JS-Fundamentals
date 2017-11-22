function numMatrix(arr){

    let N = parseInt(arr[0]);

    for (var row = 1; row <= N; row += 1) {
        let line = '';
        for( var col = row; col <= row + N - 1; col += 1){
            line += col + ' ';
            if (col == row + N - 1) {
                line.trim();
                console.log(line);
            }
        }

    }
}

let arr = Array;
arr[0] = '4';
numMatrix(arr);