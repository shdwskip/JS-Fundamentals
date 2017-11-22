function solve(meals, commands) {
    let count = 0;
    let command, meal;
    let foodGone = false;
    for (let i = 0; i < commands.length; i += 1) {
        let currentCommand = commands[i].split(' ');
        if (currentCommand == 'End') {
            break;
        }
        switch (currentCommand[0]) {
            case 'Serve':
                if (meals.length < 1) {
                    break;
                }
                console.log(`${meals.pop()} served!`); break;
            case 'Add':
                if (currentCommand[1] == undefined) {
                    break;
                }
                meals.unshift(currentCommand[1]); break;
            case 'Shift':
                let firstIndex = +currentCommand[1];
                let secondIndex = + currentCommand[2];
                if (meals[firstIndex] !== undefined && meals[secondIndex] !== undefined) {
                    let currentMeal = meals[firstIndex];
                    meals[firstIndex] = meals[secondIndex];
                    meals[secondIndex] = currentMeal;
                } break;
            case 'Eat':
                if (meals.length < 1) {
                    break;
                }
                console.log(`${meals.shift()} eaten`);
                count += 1; break;
            case 'Consume':
                let startIndex = +currentCommand[1];
                let endIndex = + currentCommand[2];
                if (meals[startIndex] !== undefined && meals[endIndex] !== undefined) {
                    let mealsEaten = endIndex - startIndex + 1;
                    count += mealsEaten;
                    meals.splice(startIndex, mealsEaten);
                    console.log('Burp!');
                } break;
        }
    }
    if (meals.length > 0) {
        console.log(`Meals left: ${meals.join(', ')}`);
    } else {
        console.log("The food is gone");
    }

    console.log(`Meals eaten: ${count}`);
}
// solve([
//     'chicken', 'steak', 'eggs'
// ],
//     [
//         'Serve',
//         'Eat',
//         'End',
//         'Consume 0 1'
//     ]
// );

// console.log('=======================================');

// solve(['fries', 'fish', 'beer', 'chicken',
//     'beer', 'eggs'],
//     ['Add spaghetti',
//         'Shift 0 1',
//         'Consume 1 4',
//         'End']);

// console.log('========================');

solve(['soup', 'spaghetti', 'eggs'],
['Consume 2 9',
'Eat',
'End',
]);