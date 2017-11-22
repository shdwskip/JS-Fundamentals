/* jshint esversion: 6 */

function solve(args) {
    let category,
        catList = [],
        usedValues = {},
        sharedCatList = [],
        sharedUsedValues = {},
        shared = false,
        result = [];

    function assignValues(catList, usedValues) {
        let currentValue = 0;
        catList.forEach(function (item) {
            if (item.value < 0) {
                while (usedValues[currentValue]) {
                    currentValue += 1;
                }
                item.value = currentValue;
                currentValue += 1;
            }
            result.push(`${item.name} = ${item.value} :: ${item.category};`);
        });
    }

    args.forEach(function (line) {
        line = line.trim();
        if (line === '</>') {
            if (!shared) {
                assignValues(catList, usedValues);
            }
        }
        else if (line[0] === '<') {
            shared = line[1] === '@';
            category = line.replace(/[<>@]/g, '');
            catList = [];
            usedValues = {};
        } else {
            let splitted = line.split(/[=;]/g),
                name = splitted[0].trim(),
                value = -1;
            if (splitted.length === 3) {
                value = +splitted[1].trim();
                if (shared) {
                    sharedUsedValues[value] = true;
                } else {
                    usedValues[value] = true;
                }
            }
            let item = {
                name: name,
                value: value,
                category: category
            };
            if (shared) {
                sharedCatList.push(item);
            } else {
                catList.push(item);
            }
        }
    });

    assignValues(sharedCatList, sharedUsedValues);

    console.log(result.sort().join('\n'));
}

let arr = [
    '<@Languages>',
    '   CSharp;',
    '   JavaScript;',
    '   Haskell = 42;',
    '   Rust = 4;',
    '   CPP;',
    '</>',
    '<Result>',
    '   Failed;',
    '   Passed;',
    '   Excellence;',
    '</>',
    '<@Insects>',
    '   Ant;',
    '   Mosquito = 2;',
    '</>'
];
solve(arr);

// Output

// Ant = 5 :: Insects;
// CPP = 3 :: Languages;
// CSharp = 0 :: Languages;
// Excellence = 2 :: Result;
// Failed = 0 :: Result;
// Haskell = 42 :: Languages;
// JavaScript = 1 :: Languages;
// Mosquito = 2 :: Insects;
// Passed = 1 :: Result;
// Rust = 4 :: Languages;