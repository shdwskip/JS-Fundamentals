function solve(args) {
    let result = args.join('');
    const lastPropRegex = /;(\s*?)}/g; // to be replaced with '}'
    let selector = '';
    const noSpace = {
        '.': true,
        '>': true,
        '~': true,
        '+': true,
        //  '#': true,
        ';': true,
        '{': true,
    };
    result = result.replace(lastPropRegex, '}');
    String.prototype.last = function() {
        return this[this.length - 1];
    };
    // Array.prototype.last = function () {
    //     return this[this.length - 1];
    // }

    for (let line = 0; line < args.length; line += 1) {
        const split = args[line].trim().split(/\s+/);
        for (let i = 0; i < split.length; i += 1) {
            if ((selector === '') || noSpace[split[i][0]] || noSpace[selector.last()]) {
                selector += split[i];
            } else {
                selector += ' ' + split[i];
            }
        }
    }
    console.log(selector);


    // console.log(result);
}


solve(['#the-big-b{',
    '    color: yellow;',
    '    size: big;',
    '  }',
    '  .muppet{',
    '    powers: all;',
    '    skin: fluffy;',
    '  }',
    '       .water-spirit         {',
    '    powers: water;',
    '               alignment    : not-good;',
    '                  }',
    '  all{',
    '    meant-for: nerdy-children;',
    '  }',
    '  .muppet      {',
    '      powers: everything;',
    '  }',
    '  all            .muppet {',
    '      alignment             :             good                             ;',
    '  }',
    '     .muppet+             .water-spirit{',
    '     power: everything-a-muppet-can-do-and-water;',
    '  }']);
