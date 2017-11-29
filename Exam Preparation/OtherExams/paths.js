/* jshint esversion: 6 */
function solve(params) {
    let arr = params[0].split(' '),
        rows = +arr[0],
        cols = +arr[1],
        directions = params.splice(1).map(function(line) {
            return line.split(' ');
        }),
        board = [],
        visited = [],
        deltaR = 0,
        deltaC = 0,
        failed = false,
        result = 0;

    for (let r = 0; r < rows; r += 1) {
        board[r] = [];
        board[r][0] = Math.pow(2, r);
        for (let c = 1; c < cols; c += 1) {
            board[r][c] = board[r][c - 1] + 1;
        }
    }

    while (deltaR >= 0 && deltaR < rows && deltaC >=0 && deltaC < cols && !failed) {
        const move = directions[deltaR][deltaC];
        visited.push([deltaR, deltaC]);
        result += board[deltaR][deltaC];
        for (let y = 0; y < move.length; y += 1) {
            switch (move[y]) {
                case 'd': deltaR += 1; break;
                case 'u': deltaR -= 1; break;
                case 'r': deltaC += 1; break;
                case 'l': deltaC -= 1; break;
            }
        }

        for (let v = 0; v < visited.length; v += 1) {
            if (visited[v][0] === deltaR && visited[v][1] === deltaC) {
                console.log(`failed at (${deltaR}, ${deltaC})`);
                failed = true;
                break;
            }
        }
    }

    if (!failed) {
        console.log(`successed with ${result}`);
    }
}

solve(['2 4',
    'dr dr ul dl',
    'dl ur dl dr']);
