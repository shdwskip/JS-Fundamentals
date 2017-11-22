/* jshint esversion: 6 */

function solve(args) {
    let dimensions = args[0].split(' ').map(Number);
    let rows = dimensions[0],
        cols = dimensions[1],
        totalJumps = dimensions[2],
        board = createBoard();

    let startPosition = args[1].split(' ').map(Number);
    let currentRow = startPosition[0],
        currentCol = startPosition[1];

    let jumps = args.slice(2).map(x => x.split(' ').map(Number));
    let sumOfNumbers = 0;
    let numberOfJumps = 0;
    let escaped = false;
    let jumpsIndex = 0;

    function answer() {
        while (true) {
            if (currentRow < 0 || currentRow >= rows ||
                currentCol < 0 || currentCol >= cols) {

                escaped = true;
                break;
            }
            if (board[currentRow][currentCol] === 'X') {
                escaped = false;
                break;
            }

            sumOfNumbers += board[currentRow][currentCol];
            numberOfJumps += 1;
            board[currentRow][currentCol] = 'X';

            let currentJump = jumps[jumpsIndex++];
            if (jumpsIndex >= jumps.length) {
                jumpsIndex = 0;
            }
            currentRow += currentJump[0];
            currentCol += currentJump[1];
        }
        return escaped ? `escaped ${sumOfNumbers}`
                       : `caught ${numberOfJumps}`;
    }

    function createBoard() {
        let start = 1;
        let field = [];
        for (let row = 0; row < rows; row += 1) {
            field[row] = [];
            for (let col = 0; col < cols; col += 1) {
                field[row][col] = start;
                start += 1;
            }
        }
        return field;
    }

    console.log(answer());
}
solve([
    '6 7 3',
    '0 0',
    '2 2',
    '-2 2',
    '3 -1']);