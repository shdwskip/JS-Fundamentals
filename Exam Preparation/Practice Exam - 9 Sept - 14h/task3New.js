function solve(args) {
    const productsCount = +args[0];
    const listsCount = +args[productsCount + 1];
    const thingsToBuy = args.slice(productsCount + 2);
    const pricesList = {};

    // fill pricesList
    for (let prodIndex = 1; prodIndex < productsCount + 1; prodIndex += 1) {
        let prices = args[prodIndex].split(' '),
            currPrice = Number(prices.pop()),
            currProduct = prices.join(' ');
        pricesList[currProduct] = currPrice;
    }

    // let buyersList = args.slice(args.length - listsCount)
    //     .map(x => x.split(', '));

    for (let i = 0; i < listsCount; i += 1) {
        const line = thingsToBuy[i].split(', ');
        let total = 0;

        for (let j = 0; j < line.length; j += 1) {
            const element = line[j].split(' ');
            let quantity = 1;
            const tempQuantity = parseFloat(element[0]);
            let product;
            if (tempQuantity >= 0) {
                quantity = tempQuantity;
                product = element.slice(1).join(' ');
            } else {
                product = element.join(' ');
            }
            total += quantity * pricesList[product];
        }
        console.log(total.toFixed(2));
    }

    // function normalizeProductName(index, arr) {
    //     let product = arr[index];
    //     for (let j = index + 1; j < arr.length; j += 1) {
    //         product += ' ' + arr[j];
    //     }

    //     return product;
    // }
}

const arr = [
    '5',
    'milk 1.2',
    'orange juice 2.9',
    'icecream 2',
    'cake 5.1',
    'beer 1.2',
    '5',
    '2 beer, 3 orange juice',
    '5 orange juice, 3 orange juice, orange juice, orange juice',
    'milk, cake',
    'icecream, 2 cake',
    'icecream, icecream, 3 icecream',
];
// let arr = [
//     "10",
//     "sveps 3",
//     "bira1 1",
//     "bira2 1",
//     "bira3 1",
//     "bira4 1",
//     "bira5 1",
//     "bira6 1",
//     "bira7 1",
//     "bira8 1",
//     "bira9 1",
//     "3",
//     "sveps, 1.5 sveps",
//     "sveps, 1.5 sveps",
//     "bira1, 1.5 sveps",
// ];
solve(arr);
