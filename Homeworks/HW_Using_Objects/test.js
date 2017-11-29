function calculateDistanse(point1, point2) {
    const distance = Math.sqrt(
        Math.abs(point2.x - point1.x) * Math.abs(point2.x - point1.x) +
        Math.abs(point2.y - point1.y) * Math.abs(point2.y - point1.y));
    return distance.toFixed(2);
}

const point1 = { x: 1, y: 2 };
const point2 = { x: 3, y: 5 };
const point3 = { x: 3, y: 2 };

const arrLines = [calculateDistanse(point1, point2),
                calculateDistanse(point2, point3),
                calculateDistanse(point1, point3)];

arrLines.sort();

function planarCoordinates() {
    console.log('Distance: '+calculateDistanse(point1, point2));
    console.log(arrLines);
    console.log('Can form a triangle:' + ((arrLines[0]*1 + arrLines[1]*1) > arrLines[2]*1));
}
planarCoordinates();
