/* jshint esversion: 6 */

function solve(params) {
    let rows = +params[0],
        cols = +params[1],
        // tests = +params[rows + 2],
        moves = params.slice(3 + rows),
        board = params.slice(2, 2 + rows);

    function parseMove(move) {
        const cells = move.split(' ');

        return {
            from: {
                row: rows - Number(cells[0][1]),
                col: cells[0].charCodeAt(0) - 97,
            },
            to: {
                row: rows - Number(cells[1][1]),
                col: cells[1].charCodeAt(0) - 97,
            },
        };
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

        const deltaRow = from.row > to.row ? -1 : 1;
        const deltaCol = from.col > to.col ? -1 : 1;

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

    for (m of moves) {
        const move = parseMove(m);
        const figure = board[move.from.row][move.from.col];

        if (figure === 'R') {
            const canMove = moveRook(move.from, move.to);
            console.log(canMove ? 'yes' : 'no');
        } else if (figure === 'B') {
            const canMove = moveBishop(move.from, move.to);
            console.log(canMove ? 'yes' : 'no');
        } else if (figure === 'Q') {
            const canMove = moveQueen(move.from, move.to);
            console.log(canMove ? 'yes' : 'no');
        } else {
            console.log('no');
        }
    }
}


const arr = ['3',
    '4',
    '--R-',
    'B--B',
    'Q--Q',
    '12',
    'd1 b3',
    'a1 a3',
    'c3 b2',
    'a1 c1',
    'a1 b2',
    'a1 c3',
    'a2 b3',
    'd2 c1',
    'b1 b2',
    'c3 b1',
    'a2 a3',
    'd1 d3',
];
solve(arr);
