const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    quantity:Number,
    name:String,
    price:Number,
    code:String,
    description:String,
    date:{type:Date , default:Date.now},
    bdstatus:Boolean,
});

const product = mongoose.model('product',productSchema);

module.exports = product;