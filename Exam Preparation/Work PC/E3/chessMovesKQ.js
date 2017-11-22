function solve(args) {
    let rows = +args[0],
        cols = +args[1],
        board = args.slice(2, 2 + rows),
        allMoves = args.slice(3 + rows);
    let knightMoves = [[-2, 1], [-1, 2], [1, 2], [2, 1],
    [2, -1], [1, -2], [-1, -2], [-2, -1]];

    function parseMove(move) {
        let cells = move.split(' ');

        return {
            from: {
                row: rows - Number(cells[0][1]),
                col: cells[0].charCodeAt(0) - 97
            },
            to: {
                row: rows - Number(cells[1][1]),
                col: cells[1].charCodeAt(0) - 97
            }
        }
    }

    function moveRook(from, to) {
        if ((from.row !== to.row) && (from.col !== to.col)) {
            return false;
        }

        if ((from.row === to.row) && (from.col === to.col)) {
            return false;
        }

        let deltaRow = from.row > to.row ? -1 : 1;
        let deltaCol = from.col > to.col ? -1 : 1;

        if (from.row === to.row) {
            deltaRow = 0;
        } else {
            deltaCol = 0;
        }

        while ((from.row !== to.row) || (from.col !== to.col)) {
            from.row += deltaRow;
            from.col += deltaCol;

            if (board[from.row][from.col] !== '-') {
                return false;
            }
        }

        return true;
    }
    function moveBishop(from, to) {
        if (Math.abs(from.row - to.row) !== Math.abs(from.col - to.col)) {
            return false;
        }
        if ((from.row === to.row) && (from.col === to.col)) {
            return false;
        }

        let deltaRow = from.row > to.row ? -1 : 1;
        let deltaCol = from.col > to.col ? -1 : 1;

        while ((from.row !== to.row) || (from.col !== to.col)) {
            from.row += deltaRow;
            from.col += deltaCol;

            if (board[from.row][from.col] !== '-') {
                return false;
            }
        }
        
        return true;
    }
    function moveQueen(from, to) {
        return moveBishop(from, to) || moveRook(from, to);
    }

    function moveKnight(from, to) {
        let requestedMove = [from.row - to.row, from.col - to.col];

        if (from.row === to.row || from.col === to.col) {
            return false;
        }

        for (let i = 0, len = knightMoves.length; i < len; i += 1) {
            if (knightMoves[i][0] === requestedMove[0] && knightMoves[i][1] === requestedMove[1]) {
                if (board[to.row][to.col] !== '-') {
                    return false;
                } else {
                    return true;
                }
            }
        }
        if ((from.row !== to.row) && (from.col !== to.col)) {
            if (Math.abs(from.row - to.row) >= 1 && Math.abs(from.col - to.col) !== 2) {
                return false;
            }
            if (Math.abs(from.row - to.row) >= 2 && Math.abs(from.col - to.col) !== 1) {
                return false;
            }
        }
        return true;
    }

    for (m of allMoves) {
        let move = parseMove(m);
        let figure = board[move.from.row][move.from.col];

        if (figure === 'Q') {
            let canMove = moveQueen(move.from, move.to);
            console.log(canMove ? 'yes' : 'no');
        }
        else if (figure === 'K') {
            let canMove = moveKnight(move.from, move.to);
            console.log(canMove ? 'yes' : 'no');
        } else {
            console.log('no');
        }
    }
}
solve(['9',
'13',
'-------------',
'--K-------K--',
'---K-------K-',
'--K----------',
'-----K------K',
'-------------',
'--K------K---',
'---K----K----',
'---------K---',
'10',
'j1 a9',
'j3 l5',
'k8 f7',
'm5 m3']);