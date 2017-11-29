function peopleList(arr) {
    var i,
        len = arr.length,
        people = [];

    for (i = 0; i < len - 2; i += 3) {
        people.push( { firstname: arr[i],
                      lastname: arr[i+1],
                      age: +arr[i+2] }
                    );
    }

    let minAge = people[0].age;
    let youngest = `${people[0].firstname} ${people[0].lastname}`;

    for (var i = 0, len = people.length; i < len; i += 1) {
        if (people[i].age <= minAge) {
            minAge = people[i].age;
            youngest = `${people[i].firstname} ${people[i].lastname}`;
        }
    }

    console.log(youngest);
}


const arr = [
  'Gosho', 'Petrov', '32',
  'Bay', 'Ivan', '81',
  'John', 'Doe', '42',
];
peopleList(arr);
