// Import HTTP Module

const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hello from the server");
})

server.listen(8080, 'localhost', () => {
    console.log("Listening on port 8080");
})