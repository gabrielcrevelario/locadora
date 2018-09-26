
const mongoose = require('../config/db');
const User = require('../models/User');
module.exports =  {
 findUsers:async(req, res) => {
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
},
createUser:async (req, res) => {
            try{
             const name = req.body.name;
             const subName = req.body.subName;
             const email = req.body.email;
             const password = req.body.password;
          const user = User.create( {name,subName, email, password });
            res.send(user).status(201);
         } catch (err) {
             return new Error(err);
         }
        }
}