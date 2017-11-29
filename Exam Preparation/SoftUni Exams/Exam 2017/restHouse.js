function solve(availableRooms, guests) {
    const roomNumbers = [];
    const allRooms = {};
    let guestsWithoutRoom = 0;
    for (const currentRoom of availableRooms) {
        const roomSpace = currentRoom.type == 'double-bedded' ? 2 : 3;
        if (!currentRoom.hasOwnProperty('emptyBeds')) {
            currentRoom.emptyBeds = roomSpace;
        }
    }
    for (const couple of guests) {
        let roomFound = false;
        if (couple.first.gender !== couple.second.gender) {
            for (const currentRoom of availableRooms) {
                const number = currentRoom.number;
                if (currentRoom.type == 'double-bedded' && currentRoom.emptyBeds == 2) {
                    currentRoom.guests = [];
                    currentRoom.guests = [couple.first, couple.second];
                    currentRoom.emptyBeds = 0;
                    roomFound = true;
                    allRooms[number] = currentRoom;
                    break;
                }
            }
        } else {
            for (const currentRoom of availableRooms) {
                const number = currentRoom.number;
                if (currentRoom.type == 'triple' && currentRoom.emptyBeds > 1) {
                    if (currentRoom.guests == undefined) {
                        currentRoom.guests = [];
                    } else if (currentRoom.guests[0].gender !== couple.second.gender) {
                        continue;
                    }

                    if (couple.first !== undefined) {
                        currentRoom.guests.push(couple.first);
                        currentRoom.emptyBeds -= 1;
                    }
                    currentRoom.guests.push(couple.second);
                    currentRoom.emptyBeds -= 1;
                    roomFound = true;
                    allRooms[number] = currentRoom;
                    break;
                } else if (currentRoom.type == 'triple' && currentRoom.emptyBeds == 1) {
                    if (currentRoom.guests[0].gender == couple.second.gender) {
                        currentRoom.guests.push(couple.first == undefined ? couple.second : couple.first);
                        currentRoom.emptyBeds -= 1;
                        couple.first = undefined;
                    }
                }
                allRooms[number] = currentRoom;
            }
        }
        if (!roomFound) {
            guestsWithoutRoom += couple.first == undefined ? 1 : 2;
        }
    }

    for (const room in allRooms) {
        roomNumbers.push(room);
    }
    roomNumbers.sort();

    for (let i = 0; i < roomNumbers.length; i += 1) {
        const currentRoom = roomNumbers[i];
        console.log(`Room number: ${currentRoom}`);
        if (allRooms[currentRoom].guests !== undefined) {
            for (const guest of allRooms[currentRoom].guests.sort(function(a, b) {
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
            })) {
                console.log(`--Guest Name: ${guest.name}`);
                console.log(`--Guest Age: ${guest.age}`);
            }
        }
        console.log(`Empty beds in the room: ${allRooms[currentRoom].emptyBeds}`);
    }
    console.log(`Guests moved to the tea house: ${guestsWithoutRoom}`);
}
solve(
    [
        { number: '206', type: 'double-bedded' },
        { number: '311', type: 'triple' },
    ],
    [
        {
            first: { name: 'Tanya Popova', gender: 'female', age: 24 },
            second: { name: 'Miglena Yovcheva', gender: 'female', age: 23 },
        },
        {
            first: { name: 'Katerina Stefanova', gender: 'female', age: 23 },
            second: { name: 'Angel Nachev', gender: 'male', age: 22 },
        },
        {
            first: { name: 'Tatyana Germanova', gender: 'female', age: 23 },
            second: { name: 'Boryana Baeva', gender: 'female', age: 22 },
        },
    ]
);

console.log('===================================================================================');

solve(
    [
        { number: '101A', type: 'double-bedded' },
        { number: '104', type: 'triple' },
        { number: '101B', type: 'double-bedded' },
        { number: '102', type: 'triple' },
    ],
    [
        {
            first: { name: 'Sushi & Chicken', gender: 'female', age: 15 },
            second: { name: 'Salisa Debelisa', gender: 'female', age: 25 },
        },
        {
            first: { name: 'Daenerys Targaryen', gender: 'female', age: 20 },
            second: { name: 'Jeko Snejev', gender: 'male', age: 18 },
        },
        {
            first: { name: 'Pesho Goshov', gender: 'male', age: 20 },
            second: { name: 'Gosho Peshov', gender: 'male', age: 18 },
        },
        {
            first: { name: 'Conor McGregor', gender: 'male', age: 29 },
            second: { name: 'Floyd Mayweather', gender: 'male', age: 40 },
        },
    ]

);
console.log('===================================================================================');

solve([
    { 'number': '408A', 'type': 'double-bedded' },
    { 'number': '303', 'type': 'triple' },
],
    [
        { 'first': { 'name': 'Javier Ortega', 'gender': 'male', 'age': 59 }, 'second': { 'name': 'Kevin Huff', 'gender': 'male', 'age': 67 } },
        { 'first': { 'name': 'Sadie Carson', 'gender': 'female', 'age': 66 }, 'second': { 'name': 'Wendell Powell', 'gender': 'male', 'age': 43 } },
    ]);
