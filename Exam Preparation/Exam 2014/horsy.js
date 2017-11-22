function solve(args) {
    let sizes = args[0].split(' ').map(Number),
        rows = sizes[0],
        cols = sizes[1],
        directions = args.slice(1),
        board = createBoard(),
        currentRow = rows - 1,
        currentCol = cols - 1,
        sumWeeds = board[currentRow][currentCol],
        totalJumps = 0,
        escaped = false;

    board[currentRow][currentCol] = 'X';

    while (true) {
        totalJumps += 1;
        let currentMove = directions[currentRow][currentCol];
        moves(currentMove);
        if (currentRow < 0 || currentRow >= rows ||
            currentCol < 0 || currentCol >= cols) {
            escaped = true;
            break;
        }
        if (board[currentRow][currentCol] == 'X') {
            escaped = false;
            break;
        }

        sumWeeds += board[currentRow][currentCol];
        board[currentRow][currentCol] = 'X';
    }

    console.log(escaped ? `Go go Horsy! Collected ${sumWeeds} weeds` :
             `Sadly the horse is doomed in ${totalJumps} jumps`);

    function moves(currentMove) {
        switch (currentMove) {
            case '1': currentRow -= 2; currentCol += 1; break;
            case '2': currentRow -= 1; currentCol += 2; break;
            case '3': currentRow += 1; currentCol += 2; break;
            case '4': currentRow += 2; currentCol += 1; break;
            case '5': currentRow += 2; currentCol -= 1; break;
            case '6': currentRow += 1; currentCol -= 2; break;
            case '7': currentRow -= 1; currentCol -= 2; break;
            case '8': currentRow -= 2; currentCol -= 1; break;
        }
    }

    function createBoard() {
        let field = [];
        for (let row = 0; row < rows; row += 1) {
            field[row] = [];
            for (let col = 0; col < cols; col += 1) {
                field[row][col] = Math.pow(2, row) - col;
            }
        }
        return field;
    }
}

test1 = [
    '3 5',
    '54561',
    '43328',
    '52388',
];

test2 = [
    '3 5',
    '54361',
    '43326',
    '52188',
];

solve(test1);
solve(test2);