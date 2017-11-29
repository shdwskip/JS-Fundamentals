function getRandomValue(opt) {
    const min = +opt.min || Number.MIN_VALUE;
    const max = +opt.max || Number.MAX_VALUE;
    console.log(Number.MIN_VALUE);
    console.log(Number.MAX_VALUE);

    return (Math.random() * (max - min + 1) + min) | 0;
}

console.log(getRandomValue({ min: 0, max: 15 }));
