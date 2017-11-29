function solve(args) {
    let result = [],
        selectors,
        bindings = {},
        inSelector = false,
        setPriority = false,
        openSelector = '{',
        closeSelector = '}',
        prioritySymbol = '@',
        globalPriority = 0,
        localPriority = 0;

    console.log(result.sort().join('\n'));

    // function fillSelectors() {
    for (let line of args) {
        line = line.trim();
        // check for priority symbol
        if (checkPrioritySymbol(line)) {
            setPriority = true;
        }
        if (line[0] === prioritySymbol) {
            const newPriority = +line.substr(1).trim();
            if (inSelector) {
                localPriority = newPriority;
            } else {
                globalPriority = newPriority;
            }
        }
        // check for defining selector
        if (line.indexOf(openSelector) > -1) {
            inSelector = true;
            localPriority = globalPriority;
            line = line.split(openSelector);
            const selectorName = line[0].trim();
            if (!bindings.hasOwnProperty(selectorName)) {
                bindings[selectorName] = {};
            }
            selectors = bindings[selectorName];
            continue;
        }
        // end of selector
        if (line.indexOf(closeSelector) > -1) {
            inSelector = false;
            setPriority = false;
            localPriority = 0;
            continue;
        }

        if (inSelector) {
            if (line[0] !== prioritySymbol) {
                line = line.split(/[:;]/g);
                const key = line[0].trim();
                const value = line[1].trim();
                let currentPriority = localPriority;
                const priorityIndex = line[2].indexOf(prioritySymbol);
                if (priorityIndex > - 1) {
                    localPriority = parseInt(line[2].substr(priorityIndex + 1).trim());
                    currentPriority = localPriority;
                }

                if (!selectors.hasOwnProperty(key)) {
                    selectors[key] = {
                        value: value,
                        priority: currentPriority,
                    };
                } else {
                    const obj = selectors[key];
                    if (obj.priority < currentPriority) {
                        obj.value = value;
                        obj.priority = currentPriority;
                    }
                }
            } else {
               // let currentPriority = localPriority;
                globalPriority = localPriority;
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

    function checkPrioritySymbol(line) {
        if (line.indexOf(prioritySymbol) > - 1) {
            return true;
        }
        return false;
    }
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
console.log('=====================');
solve(test2);
