function solve(args) {
    let selectors = [],
        current = null;

    for (let line of args) {
        if (isSelector(line)) {
            line = line.trim();
            let selector = line.substr(0, line.length - 1)
                                .trim()
                                .replace(/\s\s+/, ' ');
            if (current) {
                let between = ' ';
                if (selector[0] === '$') {
                    between = '';
                    selector = selector.substr(1);
                }
                selector = `${current.selector}${between}${selector}`;
            }
            selectors.push(
                {
                    "selector": selector,
                    "parent": current,
                    "props": []
                }
            )
            current = selectors[selectors.length - 1];
        }
        else if (isProperty(line)) {
            line = line.trim();
            line = line.substr(0, line.length - 1).trim();
            let propValArr = line.split(':').map(x => x.trim());
            let propValPair = {
                "property": propValArr[0],
                "value": propValArr[1]
            }
            current.props.push(propValPair);
        } else {
            if (current) {
                current = current.parent
            }
        }
    }

    for (let selector of selectors) {
        console.log(`${selector.selector} {`);
        for (let pair of selector.props) {
            console.log(`  ${pair.property}: ${pair.value};`);
        }
        console.log('}');
    }


    function isSelector(line) {
        return line.indexOf('{') >= 0
    }

    function isProperty(line) {
        return line.indexOf(':') >= 0
    }
}
solve(['#the-big-b{',
    '    color: big-yellow;',
    '    .little-bs {',
    '             color: little-yellow;',
    '        $.male            {',
    '               color: middle-yellow;',
    '  }',
    '  }',
    '  }',
    '             .muppet           {',
    '               skin        :        fluffy;',
    '    $.water-spirit    {',
    '      powers    :     water;',
    '                       }',
    '    $>thread{',
    '       color: depends;  ',
    '  }',
    '    powers    :      all-muppet-powers;',
    '  }']);