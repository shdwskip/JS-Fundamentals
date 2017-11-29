function numberWord(arr) {
    const num = parseInt(arr[0]);
    const numAsString = num.toString();
    const numLen = numAsString.length;
    let numAsWord = '';


    if (numLen == 1) {
        switch (numAsString) {
            case '0': numAsWord = 'Zero'; break;
            case '1': numAsWord = 'One'; break;
            case '2': numAsWord = 'Two'; break;
            case '3': numAsWord = 'Three'; break;
            case '4': numAsWord = 'Four'; break;
            case '5': numAsWord = 'Five'; break;
            case '6': numAsWord = 'Six'; break;
            case '7': numAsWord = 'Seven'; break;
            case '8': numAsWord = 'Eight'; break;
            case '9': numAsWord = 'Nine'; break;
        }
    } else if (numLen == 2) {
        if (numAsString[0] === '1') {
            switch (numAsString[1]) {
                case '0': numAsWord = 'Ten'; break;
                case '1': numAsWord = 'Eleven'; break;
                case '2': numAsWord = 'Twelve'; break;
                case '3': numAsWord = 'Thirteen'; break;
                case '4': numAsWord = 'Fourteen'; break;
                case '5': numAsWord = 'Fifteen'; break;
                case '6': numAsWord = 'Sixteen'; break;
                case '7': numAsWord = 'Seventeen'; break;
                case '8': numAsWord = 'Eighteen'; break;
                case '9': numAsWord = 'Nineteen'; break;
            }
        } else {
            switch (numAsString[0]) {
                case '2': numAsWord = 'Twenty'; break;
                case '3': numAsWord = 'Thirty'; break;
                case '4': numAsWord = 'Fourty'; break;
                case '5': numAsWord = 'Fifty'; break;
                case '6': numAsWord = 'Sixty'; break;
                case '7': numAsWord = 'Seventy'; break;
                case '8': numAsWord = 'Eighty'; break;
                case '9': numAsWord = 'Ninety'; break;
            }

            switch (numAsString[1]) {
                case '1': numAsWord += ' one'; break;
                case '2': numAsWord += ' two'; break;
                case '3': numAsWord += ' three'; break;
                case '4': numAsWord += ' four'; break;
                case '5': numAsWord += ' five'; break;
                case '6': numAsWord += ' six'; break;
                case '7': numAsWord += ' seven'; break;
                case '8': numAsWord += ' eight'; break;
                case '9': numAsWord += ' nine'; break;
                default: break;
            }
        }
    } else if (numLen == 3) {
        switch (numAsString[0]) {
            case '1': numAsWord = 'One hundred'; break;
            case '2': numAsWord = 'Two hundred'; break;
            case '3': numAsWord = 'Three hundred'; break;
            case '4': numAsWord = 'Four hundred'; break;
            case '5': numAsWord = 'Five hundred'; break;
            case '6': numAsWord = 'Six hundred'; break;
            case '7': numAsWord = 'Seven hundred'; break;
            case '8': numAsWord = 'Eight hundred'; break;
            case '9': numAsWord = 'Nine hundred'; break;
        }

        if (numAsString[1] === '0') {
            switch (numAsString[2]) {
                case '1': numAsWord += ' and one'; break;
                case '2': numAsWord += ' and two'; break;
                case '3': numAsWord += ' and three'; break;
                case '4': numAsWord += ' and four'; break;
                case '5': numAsWord += ' and five'; break;
                case '6': numAsWord += ' and six'; break;
                case '7': numAsWord += ' and seven'; break;
                case '8': numAsWord += ' and eight'; break;
                case '9': numAsWord += ' and nine'; break;
                default: break;
            }
        } else if (numAsString[1] === '1') {
            switch (numAsString[2]) {
                case '0': numAsWord += ' and ten'; break;
                case '1': numAsWord += ' and eleven'; break;
                case '2': numAsWord += ' and twelve'; break;
                case '3': numAsWord += ' and thirteen'; break;
                case '4': numAsWord += ' and fourteen'; break;
                case '5': numAsWord += ' and fifteen'; break;
                case '6': numAsWord += ' and sixteen'; break;
                case '7': numAsWord += ' and seventeen'; break;
                case '8': numAsWord += ' and eighteen'; break;
                case '9': numAsWord += ' and nineteen'; break;
            }
        } else if (numAsString[2] === '0') {
            switch (numAsString[1]) {
                case '2': numAsWord += ' and twenty'; break;
                case '3': numAsWord += ' and thirty'; break;
                case '4': numAsWord += ' and fourty'; break;
                case '5': numAsWord += ' and fifty'; break;
                case '6': numAsWord += ' and sixty'; break;
                case '7': numAsWord += ' and seventy'; break;
                case '8': numAsWord += ' and eighty'; break;
                case '9': numAsWord += ' and ninety'; break;
            }
        } else if (numAsString[2] !== '0') {
            switch (numAsString[1]) {
                case '2': numAsWord += ' and twenty'; break;
                case '3': numAsWord += ' and thirty'; break;
                case '4': numAsWord += ' and fourty'; break;
                case '5': numAsWord += ' and fifty'; break;
                case '6': numAsWord += ' and sixty'; break;
                case '7': numAsWord += ' and seventy'; break;
                case '8': numAsWord += ' and eighty'; break;
                case '9': numAsWord += ' and ninety'; break;
            }

            switch (numAsString[2]) {
                case '1': numAsWord += ' one'; break;
                case '2': numAsWord += ' two'; break;
                case '3': numAsWord += ' three'; break;
                case '4': numAsWord += ' four'; break;
                case '5': numAsWord += ' five'; break;
                case '6': numAsWord += ' six'; break;
                case '7': numAsWord += ' seven'; break;
                case '8': numAsWord += ' eight'; break;
                case '9': numAsWord += ' nine'; break;
                default: break;
            }
        }
    }
    console.log(numAsWord);
}

const arr = Array;
arr[0] = '410';
numberWord(arr);
