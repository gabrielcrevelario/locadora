const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');
const productSchema = new Schema({
    name: {type: String, required: true},
    description: {type:String, required: false},
    cliente:{type:Schema.Types.ObjectId, ref:'User'},
    estoque:{type:Number, required:true}
});
const product = mongoose.model('Product', productSchema);
module.exports = product;