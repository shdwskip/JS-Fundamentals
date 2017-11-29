function solve(keyword, text) {
    const pattern = /(north|east)\D*(\d{2})[^,]*(,)\D*(\d{6})/gi;
    const messagePattern = new RegExp(`(${keyword})(.*?)(${keyword})`, 'g');
    const message = messagePattern.exec(text)[2];

    let latOutput = '';
    let longOutput = '';
    let match = pattern.exec(text);
    while (match) {
        if (match[1].toLowerCase() === 'north') {
            latOutput = `${match[2]}.${match[4]} N`;
        } else {
            longOutput = `${match[2]}.${match[4]} E`;
        }
        match = pattern.exec(text);
    }

    console.log(latOutput);
    console.log(longOutput);
    console.log(`Message: ${message}`);
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
