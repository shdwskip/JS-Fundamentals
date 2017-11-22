function incrArr(num){
    
    var arr = [];
    
    for(var i = 0; i < num; i += 1){
        arr[i] = i*5;
        console.log(arr[i]);
    }
    
}
incrArr(5);