function multipSign(arr){

    var x = arr[0];
    var y = arr[1];
    var z = arr[2];   
 
    if (x > 0 && y > 0 && z > 0){
        console.log('+');
    }
    else if(x == 0 || y == 0 || z == 0){
        console.log('0');
    }
    else if (x < 0 && y < 0 && z < 0){
        console.log('-');
    }    
    else if (x > 0 && y < 0 && z < 0){
        console.log('+');
    }
    else if (x < 0 && y > 0 && z < 0){
        console.log('+');
    }
    else if (x < 0 && y < 0 && z > 0){
        console.log('+');
    }else{
        console.log('-');
    }
}
var arr = Array;
arr[0] = 2;
arr[1] = -6;
arr[2] = -4;
multipSign(arr);