function solve(args) {
    let fieldSize = args[0].split(' ').map(Number),
        rows = fieldSize[0],
        cols = fieldSize[1],
        emptyField = -1,
        field = createField(),
        debris = args[1].split(';').map((x) => x.split(' ').map(Number)),
        debri = '@',
        playerTanks = {
            'Koceto': 4,
            'Cuki': 4,
        },
        player = '';


    const tankPositions = [
        { row: 0, col: 0 },
        { row: 0, col: 1 },
        { row: 0, col: 2 },
        { row: 0, col: 3 },
        { row: rows - 1, col: cols - 1 },
        { row: rows - 1, col: cols - 2 },
        { row: rows - 1, col: cols - 3 },
        { row: rows - 1, col: cols - 4 },
    ];

    const commands = args.slice(3).map(function(x) {
        const line = x.split(' ');
        // if tank moves
        if (line.length > 3) {
            return {
                action: line[0],
                tank: line[1],
                moves: line[2],
                dir: line[3],
            };
        }
            // tank shoots
            return {
                action: line[0],
                tank: line[1],
                dir: line[2],
            };
    });

    // place tanks on the field
    for (const i in tankPositions) {
        field[tankPositions[i].row][tankPositions[i].col] = i;
    }

    // place debris on the field
    for (let i = 0; i < debris.length; i += 1) {
        const debriRow = debris[i][0];
        const debriCol = debris[i][1];
        field[debriRow][debriCol] = debri;
    }

    for (let i = 0; i < commands.length; i += 1) {
        const line = commands[i];
        if (line.action == 'mv') {
            moveTank(+line.tank, +line.moves, line.dir);
        } else if (line.action == 'x') {
            shootWithTank(+line.tank, line.dir);
        }
    }

    // create RxC field with '-1'
    function createField() {
        const field = new Array(rows);
        field.fill(0);
        for (const i in field) {
            field[i] = new Array(cols);
            field[i].fill(emptyField);
        }
        return field;
    }

    function moveTank(tank, moves, direction) {
        let deltaRow = 0,
            deltaCol = 0,
            tankRow = tankPositions[tank].row,
            tankCol = tankPositions[tank].col;
        switch (direction) {
            case 'l': deltaCol -= 1; break;
            case 'r': deltaCol += 1; break;
            case 'u': deltaRow -= 1; break;
            case 'd': deltaRow += 1; break;
        }

        while (moves > 0) {
            const newRow = tankRow + deltaRow;
            const newCol = tankCol + deltaCol;
            if (newRow < 0 || newRow > rows - 1 || newCol < 0 || newCol > cols - 1) {
                break;
            }
            if (field[newRow][newCol] !== emptyField) {
                break;
            }
            tankRow = newRow;
            tankCol = newCol;
            moves -= 1;
        }
        field[tankPositions[tank].row][tankPositions[tank].col] = emptyField;
        tankPositions[tank].row = tankRow;
        tankPositions[tank].col = tankCol;
        field[tankRow][tankCol] = tank;
    }

    function shootWithTank(tank, direction) {
        let deltaRow = 0,
            deltaCol = 0;

        switch (direction) {
            case 'l': deltaCol -= 1; break;
            case 'r': deltaCol += 1; break;
            case 'u': deltaRow -= 1; break;
            case 'd': deltaRow += 1; break;
        }
        let shotRow = tankPositions[tank].row + deltaRow;
        let shotCol = tankPositions[tank].col + deltaCol;

        while (shotRow >= 0 && shotRow < rows && shotCol >= 0 && shotCol < cols) {
            if (field[shotRow][shotCol] == emptyField) {
                shotRow += deltaRow;
                shotCol += deltaCol;
            } else if (field[shotRow][shotCol] == debri) {
                field[shotRow][shotCol] = emptyField;
                break;
            } else {
                const destroyedTank = field[shotRow][shotCol];
                field[shotRow][shotCol] = emptyField;
                if (destroyedTank < 4) {
                    player = 'Koceto';
                } else {
                    player = 'Cuki';
                }
                playerTanks[player] -= 1;
                console.log(`Tank ${destroyedTank} is gg`);
                if (playerTanks[player] === 0) {
                    console.log(`${player} is gg`);
                }
                break;
            }
        }
    }
}

solve([
    '10 10',
    '1 0;1 1;1 2;1 3;1 4;4 1;4 2;4 3;4 4',
    '8',
    'mv 4 9 u',
    'x 4 l',
    'x 4 l',
    'x 4 l',
    'x 0 r',
    'mv 0 9 r',
    'mv 5 1 r',
    'x 5 u',
]);
