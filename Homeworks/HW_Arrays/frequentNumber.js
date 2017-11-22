function frequentNum(arr) {
    
    var sequence = arr;
    var frequency = {};
    var max = 0;
    var mostFreqNum;

    sequence.shift();

    for(var i in sequence){
        frequency[sequence[i]] = (frequency[sequence[i]] || 0) + 1;

        if (frequency[sequence[i]] > max) {
            max = frequency[sequence[i]];
            mostFreqNum = sequence[i];
        }
    }

    console.log(`${mostFreqNum} (${max} times)`);
}

var arr = ['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3'];
frequentNum(arr);