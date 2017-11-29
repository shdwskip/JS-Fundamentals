function solve(args) {
    const obj = JSON.parse(args[0]);
    let text = '' + args[1];
    text = text.replace(/'/, '"');
    const regex = /data-bind-(.*?)="(.*?)"/gi;
    let currentMatch;
    while (currentMatch = regex.exec(text)) {
        let index = text.indexOf('>');
        if (text[index - 1] === '/') {
            index--;
        }
        const field = currentMatch[1];
        if (field.toLowerCase() === 'content') {
            const arr = text.split('');
            const x = arr.splice(index + 1, 0, obj[currentMatch[2]]);
            text = arr.join('');
        } else {
            const arr2 = text.split('');
            const x2 = arr2.splice(index, 0, ' ' + field + '="' + obj[currentMatch[2]] + '"');
            text = arr2.join('');
        }
    }

    console.log(text);
}
const arr = [
	'{ "name": "Elena", "link": "http://telerikacademy.com" }',
	'<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></а>',
];
solve(arr);
