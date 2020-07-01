const http = require('http');
const fs = require('fs');

const productsData = fs.readFileSync('./data/data.json', 'utf-8');
const productsDataObject = JSON.parse(productsData);


const server = http.createServer((req, res) => {
    const pathName = req.url;

    if(pathName === '/' || pathName === '/overview') {
        res.end("This is an OVERVIEW Page");
    } else if(pathName === '/product') {
        res.end("This is an PRODUCT Page");
    } else if(pathName === '/api') {
        res.writeHead(200, { 'Content-type' : 'application/json' });
        //console.log(productsDataObject);
        res.end(productsData);
    } else {
        res.writeHead(404, {
            'Content-type' : 'text/html'
        });
        res.end("<h1>Resource not found</h1>");
    }
});

server.listen(8080, 'localhost', () => {
    console.log('API serving on port 8080');
})