function solve(args) {
    const option = JSON.parse(args[0]);
    let text = args[1];

    let bindList = text.match(/data-bind-(.*?)="(.*?)"/g);
    if (bindList === null) {
      console.log(text);
    } else {
      bindList = bindList.map((x) => generateItem(x));
      for (item of bindList) {
        if (item[0].toLowerCase() === 'content') {
        text = text.replace(/>/, `>${option[item[1]]}`);
      } else {
        const index = text.indexOf('>');
        if (text[index-1] === '/') {
            text= text.replace(/\/>/, ` ${item[0]}=\"${option[item[1]]}\"\/>`);
        } else {
            text= text.replace(/>/, ` ${item[0]}=\"${option[item[1]]}\">`);
        }
        }
      }
      console.log(text);
    }


    function generateItem(x) {
        const index = x.indexOf('=');
        const prop = x.substring(10, index);
        const val = x.substring(index + 2, x.length-1);
        return [prop, val];
    }
}
const arr = [
	'{ "name": "Elena", "link": "http://telerikacademy.com" }',
	'<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></а>',
];
solve(arr);
