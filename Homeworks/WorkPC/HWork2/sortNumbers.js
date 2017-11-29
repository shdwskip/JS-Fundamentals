function sortNumbers(arr) {
    const num1 = parseFloat(arr[0]);
    const num2 = parseFloat(arr[1]);
    const num3 = parseFloat(arr[2]);
    let biggestNum;
    let middleNum;
    let smallestNum;


    if (num1 > num2) {
        if (num1 > num3) {
            biggestNum = num1;
            if (num2 > num3) {
                middleNum = num2;
                smallestNum = num3;
            } else {
                middleNum = num3;
                smallestNum = num2;
            }
        } else if (num1 < num3) {
            biggestNum = num3;
            middleNum = num1;
            smallestNum = num2;
        } else {
            biggestNum = num1;
            middleNum = biggestNum;
            smallestNum = num2;
        }
    } else if (num2 > num1) {
        if (num2 > num3) {
            biggestNum = num2;
            if (num1 > num3) {
                middleNum = num1;
                smallestNum = num3;
            } else {
                middleNum = num3;
                smallestNum = num1;
            }
        } else if (num2 < num3) {
            biggestNum = num3;
            middleNum = num2;
            smallestNum = num1;
        } else {
            biggestNum = num2;
            middleNum = biggestNum;
            smallestNum = num1;
        }
    } else if (num1 === num2) {
        if (num1 >= num3) {
            biggestNum = num1;
            middleNum = num2;
            smallestNum = num3;
        } else {
            biggestNum = num3;
            middleNum = num1;
            smallestNum = num2;
        }
    }

    console.log(biggestNum + ' ' + middleNum + ' ' + smallestNum);
}
const arr = Array;
arr[0] = 1;
arr[1] = 1;
arr[2] = 1;
sortNumbers(arr);
