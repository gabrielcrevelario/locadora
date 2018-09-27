
const mongoose = require('../config/db');
const app = require('../config/config');
const User = require('../models/User');

    app.post('/api/users', (req, res) =>  {
        try{
            const user =  User.create({name:req.body.name,subName:req.body.subName, email:req.body.email, password:req.body.password, type:req.body.type});
            res.send(user).status(201);
        } catch (err) {
            return new Error(err);
        }
    });
    app.get('/api/users', (req, res) =>  { 
           try{   
               User.find((err, users)=> {
                   if(err) {
                       return err;
                   }
                   res.send(users);
               })
           } catch(e) {
               return Error('Error');
           }
    });
module.exports = app;