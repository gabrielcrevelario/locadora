const mongoose = require('../config/db');
const Product = require('../models/Product');
const app = require('../config/config')

   app.post('/api/products', async (req, res) =>  {
    try{
        const productCreated =await Product.create({name:req.body.name, 
            description: req.body.description,
             user:req.body.user, 
             estoque:req.body.estoque });
        res.send(productCreated).status(201);
    } catch (err) {
            return new Error(err);
        }
    });
   
    app.get('/api/products', async (req, res) =>  { 
        try{   
            await Product.find((err, products)=> {
                if(err) {
                    return err;
                }
                res.send(products);
            })
        } catch(e) {
            return Error('Error');
        }
    });
module.exports = app;


