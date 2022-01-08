const http = require('http');
const products = require('./data/products.json');

// Because we don not specific any method which server can be listen..
// We are getting those products with all http methods (GET, POST,..)
const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(products)); 
    // instead res.write(...); res.end(); => res.end(...)
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, ()=>{
    console.log(`Server is running on PORT: ${PORT}`);
})