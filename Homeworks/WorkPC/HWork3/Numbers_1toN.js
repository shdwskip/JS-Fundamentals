function numbers(arr) {
    
    let num = parseInt(arr[0]);
    let output = '';
    for(i = 1; i <= num; i += 1){
        output += i + ' ';
    }
    output.trim();
    console.log(output);
}
var arr = Array;
arr[0] = 5;
numbers(arr);