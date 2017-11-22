function solve(args) {
    let inp = args[0],
        outp = '',
        orgCase = /<orgcase>|<\/orgcase>/ig,
        upCase = /<upcase>|<\/upcase>/ig,
        lowCase = inp.indexOf('<lowcase>');

outp = inp.replace(orgCase,'').replace(upCase, function () {
                                return arguments[0].replace(/<upcase>(.*?)<\/upcase>/ig, arguments[0].toUpperCase())
    
})
console.log(outp);
}

let arr = ['We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anything</lowcase> else.'];
solve(arr);