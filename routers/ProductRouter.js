
const router = require('express').Router();
const ProductController = require('../controllers/ProductController');
 module.exports = (app) => {
    router
    .route('/')
    .get(ProductController.findProduct)
    .post(ProductController.createProduct);
    app.use('/api/products', router);
 }
