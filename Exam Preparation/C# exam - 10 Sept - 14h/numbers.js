/* jshint esversion: 6 */
function solve(args) {
    const commands = args;
    let arrNumbers = [];

    for (const line of commands) {
        const currentLine = line.split(' ');
        const currentCommand = currentLine[0];
        const currentNumber = +currentLine[1];
        switch (currentCommand) {
            case 'set': set(currentNumber); break;
            case 'print': print(); break;
            case 'front-add': frontAdd(currentNumber); break;
            case 'front-remove': frontRemove(currentNumber); break;
            case 'back-add': backAdd(currentNumber); break;
            case 'back-remove': backRemove(); break;
            case 'reverse': reverse(); break;

            default: break;
        }
    }

    function set(number) {
        arrNumbers = [number];
        return arrNumbers;
    }

    function print() {
        console.log(arrNumbers.join(''));
    }

    function frontAdd(number) {
        arrNumbers.unshift(number);
    }

    function frontRemove(number) {
        arrNumbers.shift(number);
    }

    function backAdd(number) {
        arrNumbers.push(number);
    }

    function backRemove() {
        arrNumbers.pop();
    }

    function reverse() {
        arrNumbers.reverse();
        return arrNumbers;
    }
}
solve(['set 2',
'print',
'front-add 1',
'print',
'back-add 2',
'print',
'front-remove',
'print',
'set 4',
'print',
'decrease',
'print',
'front-add 1',
'print',
'back-add 3',
'print',
'reverse',
'print',
'end']);
