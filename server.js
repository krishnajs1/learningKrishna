// Load the HTTP module
const http = require('http');

// Define the server and its response
const server = http.createServer((req, res) => {
    // Set the response HTTP header with a 200 status and content type
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    // Send the response body
    res.end('Hello, World  Anushakrishna!\n'); 
});

// Define the port and host
const port = 3000;
const host = '0.0.0.0';

// Start the server and listen on the defined port and host
server.listen(port, host, () => {
    console.log(`Server running at ${port}/`);
});
