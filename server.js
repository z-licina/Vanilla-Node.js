const http = require('http');
const products = require('./data/products.json');

const server = http.createServer((req, res) =>{
    console.log(req.url);
    if (req.url === '/api/products' && req.method === 'GET'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(products)); 
    } else{
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({msg: "Route Not Found"}));
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, ()=>{
    console.log(`Server is running on PORT: ${PORT}`);
})