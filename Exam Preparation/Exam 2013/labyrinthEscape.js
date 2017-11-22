function solve(args) {
    let dimensions = args[0].split(' ').map(Number);
    let rows = dimensions[0],
        cols = dimensions[1];

    let startPosition = args[1].split(' ').map(Number);
    let currentRow = startPosition[0],
        currentCol = startPosition[1];

    let moves = args.slice(2);
    let board = createLabyrinth();

    let sumOfNumbers = board[currentRow][currentCol];
    let totalSteps = 0;
    let escaped = false;
    
    board[currentRow][currentCol] = 'X';
    while (true) {
        let currentMove = moves[currentRow][currentCol];
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
            //totalSteps += 1;
            break;
        }
        sumOfNumbers += board[currentRow][currentCol];
        board[currentRow][currentCol] = 'X';
    }

    console.log(escaped ? `out ${sumOfNumbers}` : `lost ${totalSteps}`);

    function createLabyrinth() {
        let counter = 1;
        let field = [];
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

let test1 = [
    "3 4",
    "1 3",
    "lrrd",
    "dlll",
    "rddd"];

let test2 = [
    '2 31',
    '1 24',
    'ullllrrrlluurruluurrdduldddurdl',
    'rululludrluuurrlrllllulduurllrd'];

let test3 = [
    "5 8",
    "0 0",
    "rrrrrrrd",
    "rludulrd",
    "lurlddud",
    "urrrldud",
    "ulllllll"];

//solve(test1);
solve(test2);
//solve(test3);


