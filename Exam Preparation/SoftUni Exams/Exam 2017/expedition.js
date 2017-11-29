function solve(primary, secondary, targets, startPoint) {
    const primaryRows = primary.length;
    const primaryCols = primary[0].length;
    const secondaryRows = secondary.length;
    const secondaryCols = secondary[0].length;
    let steps = 1;

    for (const target of targets) {
        modifyPrimary(target);
    }
    let currentRow = startPoint[0],
        currentCol = startPoint[1];
    let previousDirection;

    while (true) {
        if (currentRow + 1 < primaryRows && primary[currentRow + 1][currentCol] == 0 && previousDirection !== 'up') {
            currentRow += 1;
            previousDirection = 'down';
        } else if (currentCol + 1 < primaryCols && primary[currentRow][currentCol + 1] == 0 && previousDirection !== 'left') {
            currentCol += 1;
            previousDirection = 'right';
        } else if (currentRow > 0 && primary[currentRow - 1][currentCol] == 0 && previousDirection !== 'down') {
            currentRow -= 1;
            previousDirection = 'up';
        } else if (currentCol > 0 && primary[currentRow][currentCol - 1] == 0 && previousDirection != 'right') {
            currentCol -= 1;
            previousDirection = 'left';
        } else {
            break;
        }
        steps += 1;
    }
    console.log(steps);
    calculatePosition(currentRow, currentCol);

    function calculatePosition(row, col) {
        if (row == 0) {
            console.log('Top');
        } else if (row == primaryRows - 1) {
            console.log('Bottom');
        } else if (col == 0) {
            console.log('Left');
        } else if (col == primaryCols - 1) {
            console.log('Right');
        } else if (row < primaryRows / 2 && col >= primaryCols / 2) {
            console.log('Dead end 1');
        } else if (row < primaryRows / 2 && col < primaryCols / 2) {
            console.log('Dead end 2');
        } else if (row >= primaryRows / 2 && col < primaryCols / 2) {
            console.log('Dead end 3');
        } else if (row >= primaryRows / 2 && col >= primaryCols / 2) {
            console.log('Dead end 4');
        }
    }

    function modifyPrimary(coordinates) {
        let row = coordinates[0],
            col = coordinates[1];

        for (let i = 0; i < secondaryRows; i += 1) {
            if (i + row < primaryRows) {
                for (let j = 0; j < secondaryCols; j += 1) {
                    if (primary[i + row][j + col] !== undefined && secondary[i][j] == 1) {
                        primary[i + row][j + col] = primary[i + row][j + col] == 0 ? 1 : 0;
                    }
                }
            }
        }
    }
}
solve([
    [1, 1, 0, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 0, 1, 1, 0, 0, 1],
    [1, 0, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 0, 1, 0, 0]],
    [
        [0, 1, 1],
        [0, 1, 0],
        [1, 1, 0]],
    [
        [1, 1],
        [2, 3],
        [5, 3]],
    [0, 2]);
