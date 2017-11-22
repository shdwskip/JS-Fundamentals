function solve(arr) {
    let a = arr[0].split('\n'), 
        len = +a.shift(),
        num = +a.pop(),
        count = 0,
        seq = a[0].split(' ').map(Number);

    appCount(arr);

    function appCount() {
        for(let i = 0; i < seq.length; i += 1){
            if (seq[i] === num) {
                count += 1;
            }
        }
        console.log(count);
    }
}

let arr = ['8\n28 6 21 6 -7856 73 73 -56\n73'];
solve(arr);