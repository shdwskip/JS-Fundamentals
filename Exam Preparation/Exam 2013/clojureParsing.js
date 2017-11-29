/* jshint esversion: 6 */
function solve(input) {
    let finalResult;
    const functions = [];
    for (let i = 0; i < input.length; i += 1) {
        const currentRow = input[i].trim();
        let inCommand = false;
        let inNestedCommand = false;
        let operator = '';
        let nestedOperator = '';
        let currentDigit = '';
        let currentFunctionName = '';
        let currentNewFunction = '';
        const parameters = [];
        let nestedParameters = [];
        for (let j = 0; j < currentRow.length; j += 1) {
            const currentSymbol = currentRow[j];
            if (currentSymbol === ' ' || currentSymbol == ')') {
                if (currentFunctionName !== '') {
                    if (functions[currentFunctionName] || functions[currentFunctionName] == 0) {
                        const funcResult = functions[currentFunctionName];
                        if (inNestedCommand) {
                            nestedParameters.push(funcResult);
                        } else {
                            parameters.push(funcResult);
                        }
                    } else {
                        currentNewFunction = currentFunctionName;
                    }
                    currentFunctionName = '';
                }
                if (currentDigit !== '') {
                    if (inNestedCommand) {
                        nestedParameters.push(+currentDigit);
                    } else {
                        parameters.push(+currentDigit);
                    }
                    currentDigit = '';
                }
                if (currentSymbol == ')' && currentNewFunction !== '') {
                    let result;
                    if (inNestedCommand) {
                        result = calculate(nestedOperator, nestedParameters);
                    } else {
                        result = calculate(operator, parameters);
                    }
                    if (result == 'Error') {
                        return `Division by zero! At Line:${i + 1}`;
                    }
                    if (currentNewFunction !== 'def') {
                        functions[currentNewFunction] = result;
                    }
                    currentNewFunction = '';
                }
                if (inNestedCommand && currentSymbol == ')') {
                    const nestedResult = calculate(nestedOperator, nestedParameters);
                    parameters.push(nestedResult);
                    nestedOperator = '';
                    nestedParameters = [];
                    inNestedCommand = false;
                }
                continue;
            }
            if (currentSymbol === '(') {
                if (inCommand) {
                    inNestedCommand = true;
                } else {
                    inCommand = true;
                }
                continue;
            }
            if (isOperator(currentSymbol)) {
                if (currentSymbol == '-' && (j + 1) < currentRow.length && isNumber(currentRow[j + 1])) {
                    currentDigit += currentSymbol;
                } else {
                    if (inNestedCommand) {
                        nestedOperator = currentSymbol;
                    } else {
                        operator = currentSymbol;
                    }
                }
                continue;
            }
            if (isNumber(currentSymbol)) {
                if (currentFunctionName != '') {
                    currentFunctionName += currentSymbol;
                } else {
                    currentDigit += currentSymbol;
                }
                continue;
            }
            currentFunctionName += currentSymbol;
        }
        finalResult = calculate(operator, parameters);

        if (finalResult == 'Error') {
            finalResult = `Division by zero! At Line:${i + 1}`;
            break;
        }
    }
    console.log(finalResult);

    function isOperator(symbol) {
        if (symbol == '+' || symbol == '-' || symbol == '*' || symbol == '/') {
            return true;
        }
        return false;
    }

    function isNumber(symbol) {
        if (symbol == ' ') {
            return false;
        }
        return !isNaN(symbol); // symbol == Number(symbol);
    }

    function calculate(operator, parameters) {
        if (parameters.length == 1) {
            return parameters[0];
        }
        let result = parameters[0];
        for (let i = 1; i < parameters.length; i += 1) {
            switch (operator) {
                case '+': result += parameters[i]; break;
                case '-': result -= parameters[i]; break;
                case '*': result *= parameters[i]; break;
                case '/':
                    if (parameters[i] == 0) {
                        return 'Error';
                    }
                    result /= parameters[i];
                    result = parseInt(result); break;
            }
        }
        return result;
    }
}

solve([
    '(def myFunc 0)',
    '(def myNewFunc (+  myFunc  myFunc 2))',
    '(def MyFunc (* 3  myNewFunc))',
    '(/   MyFunc  myFunc)',
]);
