function solve(args) {
    const directions = [];
    const allEatenCarrots = [];
    const board = args[0].split(', ').map(Number);
    const len = board.length;

    for (let j = 2; j < args.length; j += 1) {
        const line = args[j].split(', ').map(Number);
        directions.push(line);
    }

    for (const sequence of directions) {
        const field = board.slice(0);
        let currentPosition = 0,
            jumpIndex = 0;
        let eatenCarrots = field[0];
        field[0] = '@';

        while (true) {
            const currentHop = sequence[jumpIndex];
            currentPosition += currentHop;
            if (currentPosition >= 0 && currentPosition < len && field[currentPosition] !== '@') {
                eatenCarrots += field[currentPosition];
                field[currentPosition] = '@';
                jumpIndex += 1;
                if (jumpIndex >= sequence.length) {
                    jumpIndex = 0;
                }
            } else {
                allEatenCarrots.push(eatenCarrots);
                break;
            }
        }
    }
    console.log(Math.max(...allEatenCarrots));
}
solve(
    [
        '2, -4, -6, 10, 2, 1, 5',
        '3',
        '3, 2, -1',
        '2, 2, -4',
        '2, -3',
    ]);
