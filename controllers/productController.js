const Product = require('../models/productModel.js');
const { getPostData } = require('../utils.js');

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

// @desc    Create Product
// @route   POST /api/products
async function createProduct(req, res){
    try {
        var body = await getPostData(req);
        var {name, description, price} = JSON.parse(body);
        const product = {
            name,
            description,
            price,
        }
        const newProduct = await Product.createOne(product);
        res.writeHead(201, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(newProduct)); 
    } catch (error) {
        console.log(error);
    }
}

// @desc    Update Product
// @route   PUT /api/products/:id
async function updateProductById(req, res, id){
    try {
        const product = await Product.findById(id);
        if (!product){
            res.writeHead(404, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({msg: "Product Not Found"})); 
        } else {
            var body = await getPostData(req);
            var {name, description, price} = JSON.parse(body);
            const updateProduct = {
                id: id,
                name: name || product.name,
                description: description || product.description,
                price: price || product.price,
            }
            const uproduct = await Product.updateOne(updateProduct, id);
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(uproduct)); 
        }
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProductById
}