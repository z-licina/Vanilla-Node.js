const Product = require('../models/productModel.js');

// with 'async' function we are waiting for server response
async function getAll(req, res){
    try {
        const products = await Product.findAll(req, res);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(products)); 
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAll
}