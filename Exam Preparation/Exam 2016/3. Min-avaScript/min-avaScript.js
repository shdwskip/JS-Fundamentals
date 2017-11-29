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
            const newPriority = parseInt(line.substr(1).trim());
            if (inSelector) {
                localPriority = newPriority;
            } else {
                globalPriority = newPriority;
            }
        } else if (line[0] === closeSelector) {
            inSelector = false;
        } else {
            const openSelectorIndex = line.indexOf(openSelector);
            if (openSelectorIndex < 0) {
                const splitted = line.split(/[:;]/g);
                const property = splitted[0].trim();
                const value = splitted[1].trim();
                let currentPriority = localPriority;
                const prioritySymbolIndex = splitted[2].indexOf(prioritySymbol);

                if (prioritySymbolIndex !== -1) {
                    currentPriority = parseInt(splitted[2].substr(prioritySymbolIndex + 1).trim());
                }

                if (!selectors.hasOwnProperty(property)) {
                    selectors[property] = {
                        value: value,
                        priority: currentPriority,
                    };
                } else {
                    const obj = selectors[property];
                    if (obj.priority < currentPriority) {
                        obj.value = value;
                        obj.priority = currentPriority;
                    }
                }
            } else {
                inSelector = true;
                const splitted = line.split(openSelector);
                const selectorName = splitted[0].trim();
                const prioritySymbolIndex = line.indexOf(prioritySymbol, openSelectorIndex);
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
    for (const selector in bindings) {
        selectors = bindings[selector];
        for (const key in selectors) {
            const value = selectors[key].value;
            const line = `${selector} { ${key}: ${value}; }`;
            result.push(line);
        }
    }
    console.log(result.sort().join('\n'));
}

const test2 = [
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
    '}',
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
