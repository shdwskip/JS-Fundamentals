function solve(args) {
    let sizes = args[0].split(' ').map(Number);
    let rows = sizes[0],
        cols = sizes[1];
    let maze = args.slice(1);
    maze = maze.map(x => x.split(' ').map(Number));
    let currentRow = Math.floor(rows / 2);
    let currentCol = Math.floor(cols / 2);
    let escaped = false;

    while (true) {
        let currentPosition = maze[currentRow][currentCol];
        let binary = decimalToBinary(currentPosition);
        let allowedMoves = checkMoves(binary); // left(no) down(yes) right(yes) up(yes) - 0111
        maze[currentRow][currentCol] = '@';
        for (let i = 0; i < allowedMoves.length; i += 1) {
            let direction = allowedMoves[i];
            let tempRow = 0;
            let tempCol = 0;
            switch (direction) {
                case 'u': tempRow -= 1; break;
                case 'r': tempCol += 1; break;
                case 'd': tempRow += 1; break;
                case 'l': tempCol -= 1; break;
            }
            if (currentRow + tempRow >= 0 && currentRow + tempRow < rows &&
                currentCol + tempCol >= 0 && currentCol + tempCol < cols) {
                if (maze[currentRow + tempRow][currentCol + tempCol] == '@') {
                    continue;
                } else {
                    currentRow += tempRow;
                    currentCol += tempCol;
                    break;
                }
            } else {
                escaped = true;
                maze[currentRow][currentCol] = 'goodbye';
                break;
            }

        }
        if (maze[currentRow][currentCol] == '@') {
            escaped = false;
            break;
        }
        if (escaped) {
            break;
        }
    }
    console.log(escaped ? `No rakiya, only JavaScript ${currentRow} ${currentCol}` :
        `No JavaScript, only rakiya ${currentRow} ${currentCol}`);

    function checkMoves(binary) {
        let result = '';
        for (let i = binary.length - 1; i >= 0; i -= 1) {
            let digit = binary[i];
            if (digit == '1' && i == 3) {
                result += 'u';
            }
            else if (digit == '1' && i == 2) {
                result += 'r';
            }
            else if (digit == '1' && i == 1) {
                result += 'd';
            }
            else if (digit == '1' && i == 0) {
                result += 'l';
            } else {
                continue;
            }
        }
        return result;
    }
    function decimalToBinary(number) {
        let remainder = 0;
        let binary = '';
        while (number > 0) {
            remainder = number % 2;
            number = Math.floor(number / 2);
            binary = remainder.toString() + binary;
        }
        while (binary.length < 4) {
            binary = '0' + binary;
        }
        return binary;
    }
}


let test1 = [
    '5 7',
    '9 5 3 11 9 5 3',
    '10 11 10 12 4 3 10',
    '10 10 12 7 13 6 10',
    '12 4 3 9 5 5 2',
    '13 5 4 6 13 5 6'
];

solve(test1);

console.log('=========');

let test2 = [
    '7 5',
    '9 3 11 9 3',
    '10 12 4 6 10',
    '12 3 13 1 6',
    '9 6 11 12 3',
    '10 9 6 13 6',
    '10 12 5 5 3',
    '12 5 5 5 6'
];

solve(test2);