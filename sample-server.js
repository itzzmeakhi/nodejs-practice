// Import HTTP Module

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const pathName = req.url;
    // console.log(req.url);

    if(pathName === '/' || pathName === '/overview') {
        res.end("This is an OVERVIEW Page");
    } else if(pathName === '/product') {
        res.end("This is an Product Page");
    } else {
        res.writeHead(404, {
            'Content-type' : 'text/html',
            'custom-header' : 'Resource not found'
        });
        res.end("<h1>Page not found</h1>");
    }
    // res.end("Hello from the server");
})

server.listen(8080, 'localhost', () => {
    console.log("Listening on port 8080");
})