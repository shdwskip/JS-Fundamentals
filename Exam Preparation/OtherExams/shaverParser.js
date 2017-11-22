/* jshint esversion: 6 */
function solve(params) {
    let s = +params.splice(0, 1),
        modelProps = params.splice(0, s).map(function (line) {
            return line.split(':');
        }),
        startOfHtml = params.indexOf('<!DOCTYPE html>'),
        sections = params.splice(1, startOfHtml - 1),
        view = params.splice(1),
        inState = false,
        htmlParse = '';

    for (let i = 0; i < modelProps.length; i += 1) {
        if (modelProps[i][1].indexOf(',') > - 1) {
            modelProps[i][1] = modelProps[i][1].split(',');
        }
    }

    for (let line = 0; line < view.length; line += 1) {
        if (view[line].trim() === '}') {
            inState = false;
            continue;
        }
        if (view[line].indexOf('@renderSection') > -1) {
            let currentSection = view[line].substring(view[line].indexOf('"') + 1, view[line].lastIndexOf('"'));
            for (let i = 0; i < sections.length; i += 1) {
                if (sections[i].indexOf('@') > -1 && sections[i].indexOf(currentSection) > -1) {
                    while (true) {
                        i += 1;
                        if (sections[i].trim() === '}') {
                            break;
                        }
                        htmlParse += '    ' + sections[i].concat('\n');
                    }

                }
            }

        }
        else if (view[line].indexOf('@if') > -1) {
            let condition = view[line].substring(view[line].indexOf('(') + 1, view[line].indexOf(')'));
            for (let i = 0; i < modelProps.length; i += 1) {
                if (modelProps[i][0] === condition && modelProps[i][1] === 'true') {
                    inState = true;
                    break;
                }
                else if (modelProps[i][0] === condition && modelProps[i][1] === 'false') {
                    while (view[line].trim() !== '}') {
                        line += 1;
                    }
                    break;
                }
            }

        }
        else if (view[line].indexOf('@@') > - 1) {
            if (inState) {
                view[line] = '    ' + view[line].trim();
            }
            view[line] = view[line].replace('@', '');
            htmlParse += view[line].concat('\n');
        }
        else if (view[line].indexOf('>@') > -1) {
            if (inState) {
                view[line] = '    ' + view[line].trim()
            }
            let currentProp = view[line].substring(view[line].indexOf('@') + 1, view[line].lastIndexOf('<'));
            for (let i = 0; i < modelProps.length; i += 1) {
                if (modelProps[i][0] === currentProp) {
                    view[line] = view[line].replace(`@${currentProp}`, modelProps[i][1]);
                    htmlParse += view[line].concat('\n');
                    break;
                }
            }
        }
        else if (view[line].indexOf('@foreach') > -1) {
            inState = true;
            let iterrator = view[line].substring(view[line].indexOf('var ') + 4, view[line].indexOf('in') - 1);
            let currentProp = view[line].substring(view[line].indexOf('in ') + 3, view[line].indexOf(')'));
            for (let i = 0; i < modelProps.length; i += 1) {
                if (modelProps[i][0] === currentProp) {
                    line += 1;
                    let begin = line;
                    for (let indx = 0; indx < modelProps[i][1].length; indx += 1) {
                        line = begin;
                        while (view[line].trim() !== '}') {
                            htmlParse += '        ' + view[line].trim().concat('\n');
                            line += 1;
                            if (view[line].indexOf(`@${iterrator}`) > -1) {
                                htmlParse += '            ' + modelProps[i][1][indx].concat('\n');
                            } else if (view[line].indexOf('@') > -1) {
                                let currentProp = view[line].substring(view[line].indexOf('@') + 1, view[line].lastIndexOf('<'));
                                for (let i = 0; i < modelProps.length; i += 1) {
                                    if (modelProps[i][0] === currentProp) {
                                        let parseLine = view[line].replace(`@${currentProp}`, modelProps[i][1]);
                                        htmlParse += '        ' +parseLine.trim().concat('\n');
                                        break;
                                    }
                                }
                            } else {
                                htmlParse += '    ' + view[line].trim().concat('\n');
                            }
                            line += 1;
                        }

                    }
                }
            }
            // console.log('brrraap');

        }
        else {
            htmlParse += view[line].concat('\n');

        }
    }
    console.log(htmlParse);

}
solve(['6',
    'title:Telerik Academy',
    'showSubtitle:true',
    'subTitle:Free training',
    'showMarks:false',
    'marks:3,4,5,6',
    'students:Pesho,Gosho,Ivan',
    '42',
    '@section menu {',
    '<ul id="menu">',
    '    <li>Home</li>',
    '    <li>About us</li>',
    '</ul>',
    '}',
    '@section footer {',
    '<footer>',
    '    Copyright Telerik Academy 2014',
    '</footer>',
    '}',
    '<!DOCTYPE html>',
    '<html>',
    '<head>',
    '    <title>Telerik Academy</title>',
    '</head>',
    '<body>',
    '    @renderSection("menu")',
    '',
    '    <h1>@title</h1>',
    '    @if (showSubtitle) {',
    '        <h2>@subTitle</h2>',
    '        <div>@@JustNormalTextWithDoubleKliomba ;)</div>',
    '    }',
    '',
    '    <ul>',
    '        @foreach (var student in students) {',
    '            <li>',
    '                @student ',
    '            </li>',
    '            <li>Multiline @title</li>',
    '        }',
    '    </ul>',
    '    @if (showMarks) {',
    '        <div>',
    '            @marks ',
    '        </div>',
    '    }',
    '',
    '    @renderSection("footer")',
    '</body>',
    '</html>']);