function solve(args) {
    let count1,
        count2,
        count3,
        price,
        money = args[0],
        cake1 = args[1],
        cake2 = args[2],
        cake3 = args[3],
        answer = 0;

    for (count1 = 0; count1 < (money / cake1) + 1; count1 += 1) {
        for (count2 = 0; count2 < (money / cake2) + 1; count2 += 1) {
            for (count3 = 0; count3 < (money / cake3) + 1; count3 += 1) {
                price = (count1 * cake1) + (count2 * cake2) + (count3 * cake3);
                if (price <= money) {
                    answer = Math.max(answer, price);
                } else {
                    break;
                }
            }
        }
    }
    console.log(answer);
}

const test1 = [
    110,
    13,
    15,
    17];

const test2 = [
    20,
    11,
    200,
    300];

const test3 = [
    110,
    19,
    29,
    39];

solve(test1);
solve(test2);
solve(test3);

