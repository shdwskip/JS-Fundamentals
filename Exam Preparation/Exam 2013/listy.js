function solve(input) {
    let finalResult;
    const functions = [];
    let print = false;

    for (let i = 0; i < input.length; i += 1) {
        const currentRow = input[i].trim();
        let command = '';
        let currentDigit = '';
        let currentFunction = '';
        let currentNewFunction = '';
        let parameters = [];
        let inFunc = false;
        let lastRow = false;

        for (let j = 0; j < currentRow.length; j += 1) {
            const currentSymbol = currentRow[j];

            if (currentFunction == 'def' && currentSymbol == ' ') {
                currentFunction = '';
                continue;
            }
            if (!isNumber(currentSymbol) && !isLetter(currentSymbol) &&
                functions[currentFunction] || functions[currentFunction] == 0) {
                if (typeof (functions[currentFunction]) === 'object') {
                    if (parameters.length == 0) {
                        parameters = functions[currentFunction].slice();
                    } else {
                        const len = functions[currentFunction].length;
                        for (let x = 0; x < len; x += 1) {
                            parameters.push(functions[currentFunction][x]);
                        }
                    }
                } else {
                    parameters.push(functions[currentFunction]);
                }
                currentFunction = '';
            }
            if (currentFunction != '' && currentSymbol == ' ') {
                currentNewFunction = currentFunction;
                currentFunction = '';
                continue;
            }
            if (currentSymbol == ',' || currentSymbol == ' ') {
                continue;
            }
            if ((currentFunction == 'sum' || currentFunction == 'avg' ||
                currentFunction == 'min' || currentFunction == 'max') &&
                !isLetter(currentSymbol)) {
                command = currentFunction;
                currentFunction = '';
                if (currentNewFunction !== '') {
                    functions[currentNewFunction] = [];
                }
                continue;
            }

            if (currentSymbol == '[') {
                inFunc = true;
                if (currentNewFunction !== '') {
                    functions[currentNewFunction] = [];
                } else {
                    currentNewFunction = currentFunction;
                    currentFunction = '';
                }
                continue;
            }
            if (currentSymbol == '-' && (j + 1) < currentRow.length && isNumber(currentRow[j + 1])) {
                currentDigit += currentSymbol;
                continue;
            }
            if (isNumber(currentSymbol)) {
                if (currentFunction != '') {
                    currentFunction += currentSymbol;
                    continue;
                } else {
                    if (!inFunc) {
                        currentDigit += currentSymbol;
                        if (!isNumber(currentRow[j + 1])) {
                            parameters.push(+currentDigit);
                            currentDigit = '';
                        }
                    } else {
                        currentDigit += currentSymbol;
                        if (!isNumber(currentRow[j + 1])) {
                            parameters.push(+currentDigit);
                            currentDigit = '';
                        }
                    }
                    continue;
                }
            }
            if (functions[currentFunction] && currentNewFunction !== '' &&
                (currentSymbol == ' ' || currentSymbol == ']')) {
                functions[currentNewFunction] = functions[currentFunction];
                parameters = functions[currentNewFunction].slice();
            }
            if (currentSymbol == ']' && command !== '') {
                if (i == input.length - 1) {
                    // lastRow = true;
                    break;
                }
                const result = calculate(command, parameters);
                if (currentNewFunction !== '') {
                    functions[currentNewFunction] = result;
                }
                continue;
            } else if (currentSymbol == ']' && command == '') {
                if (i == input.length - 1) {
                    lastRow = true;
                    break;
                }
                if (currentNewFunction !== '') {
                    functions[currentNewFunction] = parameters.slice();
                }
                continue;
            }
            currentFunction += currentSymbol;
        }
        if (lastRow) {
            console.log(finalResult);
            print = false;
        } else {
            finalResult = calculate(command, parameters);
            print = true;
        }
    }
    if (print) {
        console.log(finalResult);
    }

    function isNumber(symbol) {
        if (symbol == ' ') {
            return false;
        }
        return !isNaN(symbol);
    }

    function isLetter(symbol) {
        const letter = symbol.toLowerCase();
        if (letter.charCodeAt(0) - 97 >= 0) {
            return true;
        }
        return false;
    }

    function calculate(command, parameters) {
        let result = 0;
        switch (command) {
            case 'sum':
                for (let i = 0; i < parameters.length; i += 1) {
                    result += parameters[i];
                } break;
            case 'avg':
                let sum = 0;
                for (let j = 0; j < parameters.length; j += 1) {
                    sum += parameters[j];
                }
                result = Math.floor(sum / parameters.length); break;
            case 'min': result = Math.min(...parameters); break;
            case 'max': result = Math.max(...parameters); break;
            default: break;
        }
        return result;
    }
}

const test1 = [
    'def maxy max[100, 5000, 4,2,1]',
    'def summary1 [0]',
    'def summary11 avg[summary1,maxy]',
    'def summary111 avg[   summary11 ,  maxy]',
    'def summary1111 avg[summary111 , maxy]',
    'sum[75468, summary1111]'];

solve(test1);
