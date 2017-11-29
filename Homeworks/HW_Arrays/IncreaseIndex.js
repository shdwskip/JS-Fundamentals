function incrArr(num) {
    const arr = [];

    for (let i = 0; i < num; i += 1) {
        arr[i] = i*5;
        console.log(arr[i]);
    }
}
incrArr(5);
