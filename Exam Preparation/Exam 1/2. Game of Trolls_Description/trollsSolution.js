function solve(args) {
    let field = args[0].split(' ').map(Number),
        rows = field[0],
        cols = field[1],
        startPositions = args[1].split(/[; ]/g).map(Number),
        instructions = args.slice(2, args.length);

    let trollW = {
        row: startPositions[0],
        col: startPositions[1],
        trapped: false
    };

    let trollN = {
        row: startPositions[2],
        col: startPositions[3],
        trapped: false
    };

    let princess = {
        row: startPositions[4],
        col: startPositions[5],
        trapped: false
    };

    let traps = [];
    for (let i = 0; i < rows; i += 1) {
        let row = new Array(cols);
        row.fill(false);
        traps.push(row);
    }

    for (let i = 0, len = instructions.length; i < len; i += 1) {
        if (instructions[i] === 'lay trap') {
            traps[princess.row][princess.col] = true;
        } else {
            let unit = instructions[i].split(' '),
                unitToMove;
            if (unit[1][0] === 'L') {
                unitToMove = princess;
            }
            else if (unit[1][0] === 'W') {
                unitToMove = trollW;
            }
            else if (unit[1][0] === 'N') {
                unitToMove = trollN;
            }

            if (unitToMove.trapped) {
                continue;
            }

            if (unit[2] === 'u' && unitToMove.row > 0) {
                unitToMove.row -= 1;
            }
            else if (unit[2] === 'd' && unitToMove.row < rows - 1) {
                unitToMove.row += 1;
            }
            else if (unit[2] === 'l' && unitToMove.col > 0) {
                unitToMove.col -= 1;
            }
            else if (unit[2] === 'r' && unitToMove.col < cols - 1) {
                unitToMove.col += 1;
            }

            if (trollW.row === trollN.row && trollW.col === trollN.col) {
                trollW.trapped = false;
                trollN.trapped = false;
                traps[trollW.row][trollW.col] = false;
            }
            else if (unit[1][0] !== 'L' && traps[unitToMove.row][unitToMove.col]) {
                unitToMove.trapped = true;
            }

            if (princess.row === rows - 1 && princess.col === cols - 1) {
                console.log(`Lsjtujzbo is saved! ${trollW.row} ${trollW.col} ${trollN.row} ${trollN.col}`);
            }
            else if (trollW.trapped && trollN.trapped) {
                console.log(`Lsjtujzbo is saved! ${trollW.row} ${trollW.col} ${trollN.row} ${trollN.col}`);
            }
            else if (trollW.row === princess.row && trollW.col === princess.col) {
                console.log(`The trolls caught Lsjtujzbo at ${princess.row} ${princess.col}`);
            }
            else if (trollN.row === princess.row && trollN.col === princess.col) {
                console.log(`The trolls caught Lsjtujzbo at ${princess.row} ${princess.col}`);
            }
            else if (Math.abs(princess.row - trollW.row) < 2 && Math.abs(princess.col - trollW.col) < 2) {
                console.log(`The trolls caught Lsjtujzbo at ${princess.row} ${princess.col}`);
            }
            else if (Math.abs(princess.row - trollN.row) < 2 && Math.abs(princess.col - trollN.col) < 2) {
                console.log(`The trolls caught Lsjtujzbo at ${princess.row} ${princess.col}`);
            }
        }
    }
}

let arr = [
    '8 8',
    '1 3;0 3;5 5',
    'mv Lsjtujzbo l',
    'mv Lsjtujzbo l',
    'lay trap',
    'mv Lsjtujzbo r',
    'lay trap',
    'mv Lsjtujzbo r',
    'lay trap',
    'mv Lsjtujzbo d',
    'lay trap',
    'mv Lsjtujzbo d',
    'lay trap',
    'mv Wboup r',
    'mv Wboup r',
    'mv Wboup d',
    'mv Wboup d',
    'mv Wboup d',
    'mv Wboup d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Lsjtujzbo l',
    'mv Nbslbub d',
    'mv Nbslbub r',
    'mv Nbslbub r',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d'
];
solve(arr);