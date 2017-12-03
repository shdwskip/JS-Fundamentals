function biggestNum(arr) {
    const x = parseFloat(arr[0]);
    const y = parseFloat(arr[1]);
    const z = parseFloat(arr[2]);
    const t = parseFloat(arr[3]);
    const v = parseFloat(arr[4]);

    if (x >= y) {
        if (x >= z) {
            if (x >= t) {
                if (x >= v) {
                    console.log(x);
                } else {
                    console.log(z);
                }
            } else if (v >= t) {
                console.log(v);
            } else {
                console.log(t);
            }
        } else {
            console.log(z);
        }
    } else if (y >= z) {
        if (y >= t) {
            if (y >= v) {
                console.log(y);
            } else {
                console.log(v);
            }
        } else if (v >= t) {
            console.log(v);
        } else {
            console.log(t);
        }
    } else if (z >= t) {
        if (z >= v) {
            console.log(z);
        } else {
            console.log(v);
        }
    } else if (t >= v) {
        console.log(t);
    } else {
        console.log(v);
    }
}

const arr = Array;
arr[0] = 0.2;
arr[1] = 11;
arr[2] = -4;
arr[3] = 33;
arr[4] = 0.7;

biggestNum(arr);
