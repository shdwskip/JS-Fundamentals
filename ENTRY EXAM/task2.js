function solve(args) {
    const bricks = args.slice(0, 3).map(Number);
    const layers = +args[3];
    let totalBricks = 0;

    for (let i = layers; i > 0; i -= 1) {
        totalBricks += i;
    }

    for (let i = 3; i < totalBricks; i += 1) {
        const currentBrick = bricks[i - 1] + bricks[i - 2] + bricks[i - 3];
        bricks.push(currentBrick);
    }

    for (let i = 0; i < layers; i += 1) {
        let line = '';
        for (let j = i; j < (2 * i + 1); j += 1) {
            line += bricks.shift() + ' ';
        }
        console.log(line.trim());
    }
}

solve([1, 4, 2, 3]);

console.log('===============');

solve([1, -1, 1, 4]);
