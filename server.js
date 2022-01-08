const http = require('http');
const products = require('./data/products.json');

const server = http.createServer((req, res) =>{
    // req.url - everything past host (localhost:5000)
    // wIth this 'localhost:5000/products', we getting 'products'
    console.log(req.url);
    if (req.url === '/api/products'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(products)); 
    } else{
        // with this 'else statement' we solve 'hanging issue'
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({msg: "Route Not Found"}));
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, ()=>{
    console.log(`Server is running on PORT: ${PORT}`);
})