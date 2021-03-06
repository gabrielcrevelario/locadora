const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');
const productSchema = new Schema({
    name: {type: String, required: true},
    description: {type:String, required: false},
    user:{type:Schema.Types.ObjectId, ref:'User'},
    estoque:{type:Number, required:true}
});
const Product = mongoose.model('Product', productSchema);
module.exports = Product;