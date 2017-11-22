function solve(args) {
    let N = +args[0],
        productsPrices = {},
        M = +args[N + 1],
        productsList = args.slice(args.length - M);

    for (let i = 0; i < N; i += 1) {
        let currentProductPrice = args[i + 1].split(' ');
        if (currentProductPrice.length > 2) {
            let product = currentProductPrice[0];
            for (let j = 1; j < currentProductPrice.length - 1; j += 1) {
                product += ' ' + currentProductPrice[j];
            }
            let price = +currentProductPrice[currentProductPrice.length - 1];
            productsPrices[product] = price;
        } else {
            let product = currentProductPrice[0];
            let price = +currentProductPrice[1];
            productsPrices[product] = price;
        }
    }

    for (let line of productsList) {
        let purchases = line.split(',').map(x => x.trim().split(' '));
        let sum = 0;
        for (let buy of purchases) {
            if (buy.length > 1) {
                if (buy.length > 2) {
                    let quantity = +buy[0];
                    let currProduct = buy[1];
                    for (let j = 2; j < buy.length; j += 1) {
                        currProduct += ' ' + buy[j];
                    }
                    sum += quantity * productsPrices[currProduct];
                } else if (!isNaN(+buy[0])) {
                    let quantity = +buy[0];
                    let currProduct = buy[1];
                    sum += quantity * productsPrices[currProduct];
                } else {
                    let currProduct = buy[0] + ' ' + buy[1];
                    sum += productsPrices[currProduct];
                }
            } else if (buy.length === 1) {
                let currProduct = buy[0];
                sum += productsPrices[currProduct];
            }
        }
        console.log(sum.toFixed(2));


    }
}

let arr = [
    "5",
    "milk 1.2",
    "orange juice 2.9",
    "icecream 2",
    "cake 5.1",
    "beer 1.2",
    "5",
    "5 orange juice, 3 orange juice, orange juice, orange juice",
    "2 beer, 3 orange juice",
    "milk, cake",
    "icecream, 2 cake",
    "icecream, icecream, 3 icecream"
];
solve(arr);