function thirdDigit(a){
    
    let temp = Math.floor(a / 100);
    let digit = temp % 10;
    if (digit == 7) {
        console.log('true');        
    }
    else{
        console.log('false' + ' ' + digit);
    }
}
let a=801;
thirdDigit(a);