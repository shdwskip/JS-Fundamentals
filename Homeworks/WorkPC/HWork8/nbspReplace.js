function solve(args){
    let text = args[0],
        output = text.replace(/\s/g, '&nbsp;');
        
    console.log(output);
    
}
let arr = [ 'This text contains 4 spaces!!' ];
solve(arr);