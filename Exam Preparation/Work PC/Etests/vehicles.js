function solve(args) {
    let s = +args[0],
        count = 0,
        car = 4,
        truck = 10,
        trike = 3,
        all;

    for(let i = 0; i < (s/car) + 1; i += 1){
        for(let j = 0; j < (s/truck) + 1; j += 1 ){
            for(let z = 0; z < (s/trike) + 1; z += 1){
                all = (i*car) + (j*truck) + (z*trike);
                if (all === s) {
                    count += 1;
                }
            }
        }
    }

    console.log(count);
}

solve(['40']);