function solve(params) {
    let rows = +params[0],
        cols = +params[1],
        moves = params.slice(3 + rows),
        board = params.slice(2, 2 + rows);

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

    //print moves
    for (m of moves) {
        let move = parseMove(m);
        let figure = board[move.from.row][move.from.col];
        
        if (figure === 'R') {
            let canMove = moveRook(move.from, move.to);
            console.log(canMove ? 'yes' : 'no');
        }
        else if (figure === 'B') {
            let canMove = moveBishop(move.from, move.to);
            console.log(canMove ? 'yes' : 'no');
        }
        else if (figure === 'Q') {
            let canMove = moveQueen(move.from, move.to);
            console.log(canMove ? 'yes' : 'no');
        }else{
            console.log('no');
        }


    }
}

let arr = ['9',
'9',
'---Q-----',
'------Q--',
'---------',
'---------',
'----Q----',
'---------',
'---------',
'-------Q-',
'-Q-------',
'5',
'e5 d3',
'e5 a1',
'd9 e7',
'g8 b3',
'g8 h6'];

solve(arr);