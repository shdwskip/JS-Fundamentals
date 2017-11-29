function solve(keyword, text) {
    const decryptedMessageStart = text.indexOf(keyword) + keyword.length;
    const decryptedMessageEnd = text.lastIndexOf(keyword);
    const decryptedMessage = text.substring(decryptedMessageStart, decryptedMessageEnd);
    const north = 'north';
    const east = 'east';

    text = text.replace(keyword + decryptedMessage + keyword, '');
    text = text.replace(/\s/g, '');
    // a negative lookahead that looks for the text abc, and that is not followed by any further abc text
    const northRegEx = /north(?!.*north)/ig;// another regex: new RegExp('[^\"]north(?!/)', 'ig');
    const eastRegEx = /east(?!.*east)/ig; // another regex: new RegExp('[^\"]east(?!/)', 'ig');
    // =================================================================================================
    let northStartIndex = northRegEx.exec(text).index + 'north'.length;
    let eastStartIndex = eastRegEx.exec(text).index + 'east'.length;
    // ============ nagajdane sprqmo inputa ot testovete ???? ================================================
    if (text.toLowerCase().indexOf('north') < eastStartIndex && text.toLowerCase().indexOf('east') == 0) {
        eastStartIndex = text.toLowerCase().indexOf('east');
    }
    if (text.toLowerCase().indexOf('east') < northStartIndex && text.toLowerCase().indexOf('north') == 0) {
        northStartIndex = text.toLowerCase().indexOf('north');
    }
    // =====================================================================================================
    const northPosition = getCoordinates(northStartIndex);
    const eastPosition = getCoordinates(eastStartIndex);

    console.log(`${northPosition} N`);
    console.log(`${eastPosition} E`);
    console.log(`Message: ${decryptedMessage}`);

    function getCoordinates(startindex) {
        let coordinates = '';
        let decimalNumbers = false;
        for (let i = startindex; i < text.length; i += 1) {
            const currentSymbol = text[i];
            if (isFinite(currentSymbol) && coordinates.length != 2) {
                coordinates += currentSymbol;
            } else if (currentSymbol == ',') {
                decimalNumbers = true;
            } else if (decimalNumbers && isFinite(currentSymbol)) {
                coordinates += '.' + text.substr(i, 6);
                break;
            }
        }
        return coordinates;
    }
}

solve(
    '<>',
    'o u%&lu43t&^ftgv><nortH4276hrv756dcc, jytbu64574655k <>ThE sanDwich is iN the refrIGErator<>yl i75evEAsTer23,lfwe 987324tlblu6b'
);
console.log('===================================');
solve(
    '4ds',
    'eaSt 19,432567noRt north east 53,123456north 43,3213454dsNot all those who wander are lost.4dsnorth 47,874532'
);
console.log('====================================');
solve('keyword',
'keyword  let them eat cake!keywordNORTHEASTNORTH again42,north234567,dsae345East	23,432568');
