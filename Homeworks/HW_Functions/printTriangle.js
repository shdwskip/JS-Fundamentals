/* jshint esversion: 6 */
function pritnTriangle(n) {
    let line;
    n = +n;

    for (line = 1; line <= n; line += 1) {
        printLine(1, line);
    }

    for(line = n - 1; line >= 1; line -= 1){
        printLine(1, line);
    }
}


function printLine(start, end) {
    let line = '',
        i;

    start = +start;
    end = +end;

    for (i = start; i <= end; i += 1) {
        line += ' ' + i;
    }
    console.log(line);
}

pritnTriangle(10);