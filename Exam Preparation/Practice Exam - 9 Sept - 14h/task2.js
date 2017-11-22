function solve(args) {
    let blocks = +args[0],
        counter = 0;

    while (blocks > 0) {
        counter += 1;
        blocks -= counter;
        if (blocks < (counter + 1)) {
            break;
        }
    }
    console.log(counter);
}


solve(["7"]);