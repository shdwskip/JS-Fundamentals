function solve(args) {
    let numbers = + args[0],
        sequence = args.slice(1).map(Number),
        result = 0;

    for (let i = 0; i < numbers; i += 1) {
        const currentNumber = sequence[i];
        if (currentNumber % 2 == 0) {
            result += currentNumber;
            i += 1;
        } else {
            if (i !== 0) {
                result *= currentNumber;
            } else {
                result += currentNumber;
            }
        }
        result = result % 1024;
    }
    console.log(result);
}
const test1 = [
    '10',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
  ];
  solve(test1);

  console.log('======================');

  const test2 = [
    '9',
    '9',
    '9',
    '9',
    '9',
    '9',
    '9',
    '9',
    '9',
    '9',
  ];
  solve(test2);
