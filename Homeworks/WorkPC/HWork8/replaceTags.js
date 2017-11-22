//Write a JavaScript function that replaces 
//in a HTML document given as string all the tags <a href="…">…</a> with corresponding tags [TEXT](URL).

//Output
//<p>Please visit [our site](http://academy.telerik.com) to choose a training course. 
//Also visit [our forum](www.devbg.org) to discuss the courses.</p>
function solve(args) {
    let url = args[0],
        regex = /<a href="(.*?)">(.*?)<\/a>/g;
    url = url.replace(regex, function(){
                            return `[${arguments[2]}](${arguments[1]})`
                        });
    
    console.log(url);

}


let arr = [ '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>' ];
solve(arr);