function solve(args) {
    let sub = args[0],
        origText = args[1],
        count = 0,
        text = origText.toLowerCase(),
        pattern = sub.toLowerCase(),
        index = text.indexOf(pattern);

    while (index > -1) {
        count += 1;
        index = text.indexOf(pattern, index + 1);
    }

    console.log(count);
}

const arr = [
    'in',
    'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.',
];
solve(arr);
