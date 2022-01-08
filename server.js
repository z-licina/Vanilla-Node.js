const http = require('http');
const {getProducts, getProductById, createProduct} = require('./controllers/productController.js');

const server = http.createServer((req, res) =>{
    console.log(req.url);
    if (req.url === '/api/products' && req.method === 'GET'){
        getProducts(req, res);
    } 
    else if (req.url.match(/\/api\/products\/[0-9]+/) && req.method === 'GET'){
        const id = req.url.split('/')[3]; // '',api,products,id(3)
        getProductById(req, res, id);
    } else if (req.url === '/api/products' && req.method === 'POST'){
        createProduct(req, res);
    } else{
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({msg: "Route Not Found"}));
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, ()=>{
    console.log(`Server is running on PORT: ${PORT}`);
})