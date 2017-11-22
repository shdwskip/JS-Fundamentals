// Description

// Write a function that extracts the content of a html page given as text. 
// The function should return anything that is in a tag, without the tags.


function solve(text) {
    let regex = /(<([^>]+)>)/ig,
        output = '',
        trimmed = [],
        tag = true,
        test = text.toString();
        result = test.replace(regex,'');
    console.log(result);

    for(let el in text){
        trimmed.push(text[el].trim());
    }

    for (let i = 0, len = trimmed.length; i < len; i += 1) {
        for (let j = 0, len = trimmed[i].length; j < len; j += 1) {
            if (trimmed[i][j] === '<') {
                tag = true;
            }
            else if (trimmed[i][j] === '>') {
                tag = false;
            }
            else if (trimmed[i][j] !== '>' && !tag) {
                output += trimmed[i][j];
            }
        }
    }
    // output = output.replace(/,\s* /g, '');
    // output = output.replace(/,/g, '');
    console.log(output);
}

let arr = [
   '<html>',
    '  <head>',
    '    <title>Sample site</title>',
    '  </head>',
    '  <body>',
    '    <div>text',
    '      <div>more  <b>text</b></div>',
    '      and more...',
    '    </div>',
    '    in body',
    '  </body>',
    '</html>'
];
solve(arr);