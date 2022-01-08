const Product = require('../models/productModel.js');

// @desc    Gets All Products
// @route   GET /api/products 
async function getProducts(req, res){
    try {
        const products = await Product.findAll(req, res);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(products)); 
    } catch (error) {
        console.log(error);
    }
}

// @desc    Gets Product By ID
// @route   GET /api/products/:id
async function getProductById(req, res, id){
    try {
        const product = await Product.findById(id);
        if (!product){
            res.writeHead(404, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({msg: "Product Not Found"})); 
        } else {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(product)); 
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getProducts,
    getProductById
}