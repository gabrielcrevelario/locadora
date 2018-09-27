const mongoose = require('../config/db');
const Schema = mongoose.Schema;
const User = require('./User');
const Product = require('./Product');
const rentSchema = new Schema({
    name: {type: String, required: true},
    description: {type:String, required: false},
    funcionario:{type:Schema.Types.ObjectId, ref:User},
    cliente:{type:Schema.Types.ObjectId, ref:User},
    estoque:{type:Number, required:true}

});
const Product = mongoose.model('Product', productSchema);
module.exports = Product;