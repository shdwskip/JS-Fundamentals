//Write a script that parses an URL address given in the format: 
//[protocol]://[server]/[resource] and extracts from it the [protocol], [server] and [resource] elements.

// Output
// protocol: http
// server: telerikacademy.com
// resource: /Courses/Courses/Details/239

function solve(args) {
    let fullURL = args[0],
        protIndx = fullURL.indexOf(':'),
        servIndx = fullURL.indexOf('//'),
        partURL = fullURL.substring(servIndx + 2),
        resource = partURL.substring(partURL.indexOf('/')),
        protocol = fullURL.substring(0, protIndx),
        server = partURL.substring(0, partURL.indexOf('/'));
    
    console.log('protocol: ' + protocol);
    console.log('server: ' + server);
    console.log('resource: ' + resource);

}


let arr = ['http://telerikacademy.com/Courses/Courses/Details/239'];
solve(arr);