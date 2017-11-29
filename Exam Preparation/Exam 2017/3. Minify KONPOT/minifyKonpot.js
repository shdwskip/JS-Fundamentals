function solve(args) {
    const result = [];
    let konpotLength = 0;
    const minify = args.join('').replace(/\s/g, '');
    const identifires = {};
    const identArr = [];

    minify.split(/[{};]+/).forEach((ident) => identifires[ident] = (identifires[ident] || 0) + 1);

    identifires[''] = 0;

    for (const ident in identifires) {
        identArr.push(identifires[ident]);
    }

    identArr.sort((x, y) => y - x).forEach((count, index) => konpotLength += count * (index < 63 ? 1 : 2));

    minify.split(/[^{};]+/).forEach((sep, index, all) => {
        let openBrackets = 0;
        let closeBrackets = 0;
        const len = sep.length;
        // count brackets
        for (let i = 0; i < len; i += 1) {
            if (sep[i] === '{') {
                openBrackets += 1;
            } else if (sep[i] === '}') {
                if (openBrackets > 0) {
                    openBrackets -= 1;
                } else {
                    closeBrackets += 1;
                }
            }
        }
        const isBetween = index > 0 && index < all.length - 1;
        konpotLength += openBrackets + closeBrackets || + isBetween;
    });
    console.log(konpotLength);
}

const test1 = [
    'hello;',
    '{this; is',
    ' ; an;;;example;',
    '}',
    'of;',
    '{',
    'KONPOT;',
    '{',
    'Some_numbers;',
    '42;5;3}',
    '_}',
];

const test2 = [
    '; ;;;jGefn4E5Pvq    ;;  ;  ; ;',
    'tQRZ5MMj26Ov { {    {;    ;;    5OVyKBFu7o1T2 ;szDVN2dWhex1V;1gDdNdANG2',
    ';    ;    ;  ;; jGefn4E5Pvq   ;;    ;p0OWoVFZ8c;;}    ;  ; ;',
    '5OVyKBFu7o1T2   ;  szDVN2dWhex1V ;    ;tQRZ5MMj26Ov    ;  ;   };',
    '1gDdNdANG2    ;   p0OWoVFZ8c ;  jGefn4E5Pvq ;; {;Z9n;;',
    ';1gDdNdANG2;   ;;    ;   ;jGefn4E5Pvq    ;; ;;p0OWoVFZ8c;;    ;;',
    ';',
    'tQRZ5MMj26Ov  ;',
    '{    ;szDVN2dWhex1V;   ;',
    ';   jGefn4E5Pvq   ;  ;  } }}',
];

const test3 = [
    '1; 2; 3; 4; 5; 6; 7; 8; 9; 10; 11; 12; 13; 14;',
    '15; 16; 17; 18; 19; 20; 21; 22; 23; 24; 25; 26; 27; 28;',
    '29; 30; 31; 32; 33; 34; 35; 36; 37; 38; 39; 40; 41; 42;',
    '43; 44; 45; 46; 47; 48; 49; 50; 51; 52; 53; 54; 55; 56;',
    '57; 58; 59; 60; 61; 62; 63; 64; 65; 66; 67; 68; 69; 70;',
];

solve(test1);
console.log('=========');
solve(test2);
console.log('=========');
solve(test3);
