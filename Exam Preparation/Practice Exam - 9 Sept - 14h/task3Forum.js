function solve(args) {
        const nN = +args[0];
        const mM = +args[nN + 1];
        const pricelist = {};
        let rowValue = 0;
        const daString = args.slice(nN + 2).join(', nababatihvarchiloto, ') + ', nababatihvarchiloto';
        const elementArr = daString.split(', ');

        for (let k = 1; k < (nN + 1); k += 1) {
            const element = args[k].split(' ');
            const price = parseFloat(element.pop());
            const name = element.join(' ');
            pricelist[name] = price;
        }
        for (let ind = 0; ind <= elementArr.length; ind += 1) {
            const a = elementArr[ind];
            const b = parseInt(a);
            if (a === 'nababatihvarchiloto') {
                console.log(rowValue.toFixed(2));
                rowValue = 0;
                continue;
            }

            if (isNaN(b)) {
                rowValue += pricelist[a];
            } else {
                // var sss = elementArr[ind].indexOf(' ');
                // var vvv = a.slice((elementArr[ind].indexOf(' '))+1);

                rowValue += b * pricelist[a.slice((elementArr[ind].indexOf(' '))+1)];
            }
        }
    }
    const arr = [
        '10',
        'sveps 3',
        'bira1 1',
        'bira2 1',
        'bira3 1',
        'bira4 1',
        'bira5 1',
        'bira6 1',
        'bira7 1',
        'bira8 1',
        'bira9 1',
        '3',
        'sveps, 1.5 sveps',
        'sveps, 1.5 sveps',
        'bira1, 1.5 sveps',
    ];
    solve(arr);
