console.log("!!!");

var http = require('http'),
    fs = require('fs');

console.log("create http and fs");
let port = 5000;

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    console.log("creating server");
    http.createServer(function(request, response) {  

        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();
    }).listen(port);

    console.log("server listening on port " + port);

});