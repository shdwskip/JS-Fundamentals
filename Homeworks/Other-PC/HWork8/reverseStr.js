function solve(args) {
    let str = args[0],
        result='';
    for (let i = str.length - 1; i >=0; i -= 1 ) {
        result += str[i];
    }
    console.log(result);
}

const arr = ['sample'];
solve(arr);
