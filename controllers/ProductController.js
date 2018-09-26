const mongoose = require('../config/db');
const Product = require('../models/Product');
module.exports =  {
    createProduct : async (req,res) => {
        try{
            const name = req.body.name;
            const description = req.body.description;
            const cliente = req.params.cliente;
            const estoque = req.body.estoque;
            const product = Product.create({name ,description, cliente, estoque });
           res.send(product).status(201);
        } catch (err) {
            return new Error(err);
        }
    },
    findProduct: async(req,res) => {
        try{   
            Product.find((err, products)=> {
                if(err) {
                    return err;
                }
                res.send(products);
            })
        } catch(e) {
            return Error('Error');
        }
    },
    findProductByID: async(req,res) => {

    }


}