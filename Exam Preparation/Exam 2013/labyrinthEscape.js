function solve(args) {
    const dimensions = args[0].split(' ').map(Number);
    let rows = dimensions[0],
        cols = dimensions[1];

    const startPosition = args[1].split(' ').map(Number);
    let currentRow = startPosition[0],
        currentCol = startPosition[1];

    const moves = args.slice(2);
    const board = createLabyrinth();

    let sumOfNumbers = board[currentRow][currentCol];
    let totalSteps = 0;
    let escaped = false;

    board[currentRow][currentCol] = 'X';
    while (true) {
        const currentMove = moves[currentRow][currentCol];
        totalSteps += 1;
        switch (currentMove) {
            case 'l': currentCol -= 1; break;
            case 'r': currentCol += 1; break;
            case 'd': currentRow += 1; break;
            case 'u': currentRow -= 1; break;
        }
        if (currentRow < 0 || currentRow >= rows || currentCol < 0 || currentCol >= cols) {
            escaped = true;
            break;
        }
        if (board[currentRow][currentCol] == 'X') {
            escaped = false;
            // totalSteps += 1;
            break;
        }
        sumOfNumbers += board[currentRow][currentCol];
        board[currentRow][currentCol] = 'X';
    }

    console.log(escaped ? `out ${sumOfNumbers}` : `lost ${totalSteps}`);

    function createLabyrinth() {
        let counter = 1;
        const field = [];
        for (let row = 0; row < rows; row += 1) {
            field[row] = [];
            for (let col = 0; col < cols; col += 1) {
                field[row][col] = counter;
                counter += 1;
            }
        }
        return field;
    }
}

const test1 = [
    '3 4',
    '1 3',
    'lrrd',
    'dlll',
    'rddd'];

const test2 = [
    '2 31',
    '1 24',
    'ullllrrrlluurruluurrdduldddurdl',
    'rululludrluuurrlrllllulduurllrd'];

const test3 = [
    '5 8',
    '0 0',
    'rrrrrrrd',
    'rludulrd',
    'lurlddud',
    'urrrldud',
    'ulllllll'];

// solve(test1);
solve(test2);
// solve(test3);


