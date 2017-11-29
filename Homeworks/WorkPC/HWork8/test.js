function solve(args) {
    let inp = args[0],
        outp = '';

    outp = inp.replace(/<upcase>(.*?)<\/upcase>/g, function(words) {
 return words.toUpperCase();
})
        .replace(/<lowcase>(.*?)<\/lowcase>/g, function(words) {
 return words.toLowerCase();
})
        .replace(/<(.*?)>/g, '');

    console.log(outp);
}

const arr = ['We are <upcase><lowcase>liViNg</lowcase></upcase> in a <upcase>yellow submarine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anything</lowcase> else.'];
solve(arr);
