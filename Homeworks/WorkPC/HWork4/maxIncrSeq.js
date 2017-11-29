function maxIncrSeq(arr) {
    let seq = arr,
        tempmax = 1,
        max = 1;

    for (let i = 0, len = seq.length; i < len - 1; i += 1) {
        if (parseInt(seq[i]) < parseInt(seq[i+1])) {
            tempmax += 1;
        } else if (tempmax > max) {
            max = tempmax;
            tempmax = 1;
        } else {
            tempmax = 1;
        }
    }
    if (tempmax > max) {
        max = tempmax;
    }
    console.log(max);
}
let arr = Array;
arr = ['3', '2', '3', '4', '2', '2', '4', '6', '8'];
maxIncrSeq(arr);
