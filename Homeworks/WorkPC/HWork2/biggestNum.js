function biggestNum(arr){

    var x = parseFloat(arr[0]);
    var y = parseFloat(arr[1]);
    var z = parseFloat(arr[2]);   
 
    if (x >= y){
        if(x >= z){
            console.log(x);
        }else{
            console.log(z);
        }
    }
    else if (y >= x) {
        if(y >= z){
            console.log(y);
        }else{
            console.log(z);
        }
        
    }else{
        console.log(z);
    }
     
}
var arr = Array;
arr[0] = 0.20000000000001;
arr[1] = 0.2;
arr[2] = 0.2;
biggestNum(arr);