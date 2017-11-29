function makePerson(firstname, lastname, age) {
    const obj = {
        firstname: firstname,
        lastname: lastname,
        age: age,
        gender: gen(),
    };

    function gen() {
        const a = Math.random();
        if (a >= 0.5) {
            return 'male';
        }

            return 'female';
    }
    return obj;
}
const people = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(function(_, i) {
    return makePerson('Person' + i, 'Ivanov' + i, Math.floor(Math.random() * 100));
});

console.log(people);


function peopleofAge(number) {
    return number.age >= 18;
}

if (people.every(peopleofAge)) {
    console.log('All people are of age');
} else {
    console.log('Teens in the list');
}

// ---------ECMAS 6------------------------
// function peopleOfAge() {

//     if (people.every(n => n.age > 18)) {
//         return 'All people are of age';
//     } else {
//         return 'BOOM';
//     }
// }
// let test = peopleOfAge();
// console.log(test);
// ---------------------------------------

function underAge(number) {
    return number.age < 18;
}

const teens = people.filter(underAge);
console.log(teens);

function females(gen) {
    return gen.gender == 'female';
}

const girls = people.filter(females);
let years = 0;

girls.forEach((girl) => years += girl.age);
const avgYears = years / girls.length;

console.log('================');

console.log(girls);
console.log(`Average age of all girls is: ${avgYears.toFixed(2)}`);

const boys = people.filter((boy) => boy.gender == 'male');
console.log('=======================================================================');
console.log(boys);

boys.sort(function(a, b) {
    return a.age - b.age;
});

// here the 'boys' array is sorted already and find returns the first element, which is the youngest boy...
const youngestBoy = boys.find((boy) => {
    return boy;
});
console.log('*************************************');
console.log(`${youngestBoy.firstname} ${youngestBoy.lastname}`);
