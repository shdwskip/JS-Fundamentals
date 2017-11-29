function solve(args) {
        const products = +args[0];
        const prodcutsPrices = args.slice(1, products + 1);
        const shoppingLists = +args[products + 1];
        const thingsToBuy = args.slice(products + 2);
        const pricelist = {};

        for (let i = 0; i < products; i += 1) {
            const element = prodcutsPrices[i].split(' ');
            const price = parseFloat(element.pop());
            const name = element.join(' ');
            pricelist[name] = price;
        }
        for (let i = 0; i < shoppingLists; i += 1) {
            const elementArr = thingsToBuy[i].split(', ');
            let rowValue = 0;

            for (let j = 0; j < elementArr.length; j += 1) {
                const element = elementArr[j].split(' ');
                let count = 1;
                const a = parseFloat(element[0]);
                let name;

                if (a >= 0) {
                    count = a;
                    name = element.slice(1).join(' ');
                } else {
                    name = element.join(' ');
                }
                rowValue += count*pricelist[name];
            }
            console.log(rowValue.toFixed(2));
        }
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
