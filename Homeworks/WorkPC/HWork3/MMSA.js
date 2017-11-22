function MMSA(arr) {
    
    let min = Number(arr[0]);
    let max = Number(arr[0]);
    let sum = Number(arr[0]);
    let avg = 0;
    let len = arr.length;

    for(let i = 1; i < len; i += 1){
        min = Math.min(min, Number(arr[i]));
        max = Math.max(max, Number(arr[i]));
        sum += Number(arr[i]);
    }

    avg = sum / len;
   
    console.log('min=' + min.toFixed(2));
    console.log('max=' + max.toFixed(2));
    console.log('sum=' + sum.toFixed(2));
    console.log('avg=' + avg.toFixed(2));
}

MMSA([2, 5, 1]);