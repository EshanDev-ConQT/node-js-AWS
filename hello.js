var http = require("http");

// Define the request listener function
var listener = function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/html
    response.writeHead(200, { 'Content-Type': 'text/html' });
   
    // Send the response body as "Hello World"
    response.end('<h2 style="text-align: center;">Hello World</h2>');
};

// Create the server and pass in the listener
var server = http.createServer(listener);

// Make the server listen on port 3000
server.listen(3002, '0.0.0.0');

// Log the server status
console.log('Server running at http://0.0.0.0:3002/');