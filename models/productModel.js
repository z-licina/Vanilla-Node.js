var products = require('../data/products.json');
const {v4: uuidv4 } = require('uuid');
const path = require('path');

const { writeDataToFile } = require('../utils.js');

function findAll(){
    return new Promise((resolve, reject) =>{
        resolve(products);
    })
}
function findById(id){
    return new Promise((resolve, reject) =>{
        const product = products.find((temp) => temp.id === id);
        resolve(product);
    })
}
function createOne(product){
    return new Promise((resolve, reject) =>{
        const newProduct = { id: uuidv4(), ...product}
        products.push(newProduct);
        writeDataToFile(path.join(__dirname, '../data', 'products.json').toString(), products);
        resolve(product);
    })
}
function updateOne(updateProduct, id){
    return new Promise((resolve, reject) =>{
        let array = products;
        array.filter((temp) => temp.id === id);
        writeDataToFile(path.join(__dirname, '../data', 'products.json').toString(), array);
        resolve(updateProduct);
    })
}
function removeOne(id){
    return new Promise((resolve, reject) =>{
        products = products.filter((temp) => temp.id !== id);
        writeDataToFile(path.join(__dirname, '../data', 'products.json').toString(), products);
        resolve();
    })
}

module.exports = {
    findAll,
    findById,
    createOne,
    updateOne,
    removeOne
}