/* jshint esversion: 6 */
function solve(args) {
    let data = JSON.parse(args[0]);
    let html = args[1];
    html = html.replace(/'/, '"');


    if (!String.prototype.bind) {
        String.prototype.bind = function (data) {
            let property,
                regex = /data-bind-(.*?)="(.*?)"/ig,
                currentMatch;

            while (currentMatch = regex.exec(html)) {
                let index = html.indexOf('>');
                let field = currentMatch[1];
                if (html[index - 1] === '/') {
                    index -= 1;
                }

                if (field.toLowerCase() === 'content') {
                    let arr = html.split('');
                    let x = arr.splice(index + 1, 0, data[currentMatch[2]]);
                    html = arr.join('');
                } else {
                    let arr2 = html.split('');
                    let x2 = arr2.splice(index, 0, " " + field + '="' + data[currentMatch[2]] + '"');
                    html = arr2.join('');
                }

            }
            return html;
        };
    }

    let result = html.bind(data);
    console.log(result);
}
let arr = [
    '{ "name": "Elena", "link": "http://telerikacademy.com" }',
    '<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></а>'
];
solve(arr);