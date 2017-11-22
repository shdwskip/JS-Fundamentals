function solve(args) {
    let total = +args[0],
        chickenLegs = 7,
        bearLegs = 2,
        humanLegs = 5,
        combinations = 0;
    
    let currentTime = new Date();

    // if (total === 2000) {
    //     console.log('28772');
    // }
    // else if (total === 1000) {
    //     console.log('7243');
    // }
    // else {
    for (let i = 0; i <= (total / 7); i += 1) {
        for (let j = 0; j <= (total / 5); j += 1) {
            for (let z = 0; z <= (total / 2); z += 1) {
                if ((i * chickenLegs) + (j * humanLegs) + (z * bearLegs) === total) {
                    combinations += 1;
                }
                // else if (result > total) {
                //     break;
                // }
            }
        }
    }
    
    console.log(combinations);
    console.log(new Date() - currentTime);
    // }

}

solve(['2000']);