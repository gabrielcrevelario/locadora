const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/locadora', { useNewUrlParser: true } );
console.log('ruining mongo')
module.exports = mongoose;



