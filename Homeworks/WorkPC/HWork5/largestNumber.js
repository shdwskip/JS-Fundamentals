function GetMax(arr) {
    let numbers = arr[0].split(' '),
        first = +numbers[0],
        second = +numbers[1];
        third = +numbers[2];

    console.log(larger(first, larger(second, third)));

    function larger(a, b) {
        if (first >= second && first >= third) {
            return (first);
        } else if (second >= first && second >= third) {
            return (second);
        } else if (third >= first && third >= second) {
            return (third);
        }
    }
}

const arr = ['5 8 4'];
GetMax(arr);
