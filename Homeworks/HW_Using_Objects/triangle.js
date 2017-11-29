function calcSides(arr) {
    let x1 = +arr[0], x2 = +arr[2], x3 = +arr[4], x4 = +arr[6], x5 = +arr[8], x6 = +arr[10],
        y1 = +arr[1], y2 = +arr[3], y3 = +arr[5], y4 = +arr[7], y5 = +arr[9], y6 = +arr[11];

    const sideA = +Math.sqrt(Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2));
    const sideB = +Math.sqrt(Math.pow((x4-x3), 2) + Math.pow((y4-y3), 2));
    const sideC = +Math.sqrt(Math.pow((x6-x5), 2) + Math.pow((y6-y5), 2));

    console.log(sideA.toFixed(2));
    console.log(sideB.toFixed(2));
    console.log(sideC.toFixed(2));

    if ((sideA + sideB) > sideC && (sideB + sideC) > sideA && (sideA + sideC) > sideB) {
        console.log('Triangle can be built');
    } else {
        console.log('Triangle can not be built');
    }
}


const arr = [
  '5', '6', '7', '8',
  '1', '2', '3', '4',
  '9', '10', '11', '12',
];
calcSides(arr);
