function solve(params) {
    let result = [],
        selectors,
        bindings = {},
        inSelector = false,
        globalPriority = 0,
        localPriority = 0,
        prioritySymbol = '@',
        openSelector = '{',
        closeSelector = '}';

    for (let line of params) {
        line = line.trim();
        if (line[0] === prioritySymbol) {
            let newPriority = parseInt(line.substr(1).trim());
            if (inSelector) {
                localPriority = newPriority;
            } else {
                globalPriority = newPriority;
            }
        }
        else if (line[0] === closeSelector) {
            inSelector = false;
        } else {
            let openSelectorIndex = line.indexOf(openSelector);
            if (openSelectorIndex < 0) {
                let splitted = line.split(/[:;]/g);
                let property = splitted[0].trim();
                let value = splitted[1].trim();
                let currentPriority = localPriority;
                let prioritySymbolIndex = splitted[2].indexOf(prioritySymbol);

                if (prioritySymbolIndex !== -1) {
                    currentPriority = parseInt(splitted[2].substr(prioritySymbolIndex + 1).trim());
                }

                if (!selectors.hasOwnProperty(property)) {
                    selectors[property] = {
                        value: value,
                        priority: currentPriority
                    };
                } else {
                    let obj = selectors[property];
                    if (obj.priority < currentPriority) {
                        obj.value = value;
                        obj.priority = currentPriority;
                    }
                }

            } else {
                inSelector = true;
                let splitted = line.split(openSelector);
                let selectorName = splitted[0].trim();
                let prioritySymbolIndex = line.indexOf(prioritySymbol, openSelectorIndex);
                localPriority = globalPriority;

                if (!bindings.hasOwnProperty(selectorName)) {
                    bindings[selectorName] = {};
                }
                selectors = bindings[selectorName];

                if (prioritySymbolIndex !== -1) {
                    localPriority = parseInt(line.substring(prioritySymbolIndex + 1).trim());
                }
            }
        }
    }
    for (let selector in bindings) {
        selectors = bindings[selector];
        for (let key in selectors) {
            let value = selectors[key].value;
            let line = `${selector} { ${key}: ${value}; }`;
            result.push(line);
        }
    }
    console.log(result.sort().join('\n'));
}

let test2 = [
    'enthusiasm { @5',
    '  ap-percept-ion:buying;',
    '  @2',
    '  houston:pZ!X;',
    '  chute-s:accelerometers;',
    '}',
    '@9',
    'molar { @6',
    '  @15',
    '  houston:E!NVDt; @7',
    '  houston:u#It#;',
    '  ap-percept-ion:Dog; @15',
    '  chute-s:advises;',
    '}',
    'oodles {',
    '  @13',
    '  chute-s:perish;',
    '}',
    'molar {',
    '  r-ega-rding:4lXPE;',
    '  r-ega-rding:digesting;',
    '  houston:xZAEIh#S;',
    '  chute-s:benched;',
    '  @3',
    '  ap-percept-ion:gssO%FDd;',
    '}',
    'enthusiasm { @15',
    '  houston:NkR99XZ;',
    '  ap-percept-ion:aPQG;',
    '}'
];
// Output:
// enthusiasm { ap-percept-ion: aPQG; }
// enthusiasm { chute-s: accelerometers; }
// enthusiasm { houston: NkR99XZ; }
// molar { ap-percept-ion: Dog; }
// molar { chute-s: advises; }
// molar { houston: u#It#; }
// molar { r-ega-rding: 4lXPE; }
// oodles { chute-s: perish; }

solve(test2);