/* jshint esversion: 6 */
function solve(args){
    let obj = JSON.parse(args[0]),
        result = args[1],
        output;
        

    if (!String.prototype.placeHolder) {
        String.prototype.placeHolder = function(obj){
            let property;
               // result;
                //regex = new RegExp('#{' + property + '}', 'g');
            for(property in obj){
                result = result.replace(new RegExp('#{' + property + '}', 'g'), obj[property]);

            }
            return result;
        };
    }

    output = result.placeHolder(obj);
    console.log(output);
}
let arr = [
	'{ "name": "John", "age": 13 }', // options as JSON
	'My name is #{name} and I am #{age}-years-old' // template
];
solve(arr);