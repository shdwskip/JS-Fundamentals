function primeNum(num) {
    let n = +num,
        sequence = [],
        tempMax = 0,
        max = 0;        

    for(let i = 2; i <= n; i += 1){
        sequence[i] = true;
    }

    for(let i = 2; i <= Math.sqrt(n); i += 1){
        if (sequence[i] === true) {
            for(let j = i*i; j <= n; j += i){
                sequence[j] = false;
            }
        }

    }
   
    for(let i = n; i >= 2; i -= 1){

        if (sequence[i] === true) {
            max = i;
            break;
        }

    }

    console.log(max);


}

// let timer = setTimeout(primeNum, 300);
// clearTimeout(timer);
let num = '7';
primeNum(num);