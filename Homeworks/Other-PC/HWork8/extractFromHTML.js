function solve(args) {
    let i = 0,
        len = args.length,
        regex = /<(.*?)>/g,
        result = '';

    for (i; i < len; i += 1) {
        result += args[i].replace(regex, '').trim();
    }

    console.log(result);
}

const arr = [
    '<html>',
    '  <head>',
    '    <title>Sample site</title>',
    '  </head>',
    '  <body>',
    '    <div>text',
    '      <div>more text</div>',
    '      and more...',
    '    </div>',
    '    in body',
    '  </body>',
    '</html>',
];
solve(arr);
