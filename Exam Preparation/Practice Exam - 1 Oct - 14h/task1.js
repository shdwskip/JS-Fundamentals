function solve(args) {
    let result = 0,
        balanced = false;
    for (let i = 0; i < args.length; i += 1){
        let number = args[i];
        
        if (parseInt(number[0]) + parseInt(number[2]) === parseInt(number[1])) {
            result += parseInt(number);
        }else{
            break;
        }
    }

    console.log(result);
}

solve(['132', '123']);
console.log('=============');
solve(['275', '693', '110', '742']);