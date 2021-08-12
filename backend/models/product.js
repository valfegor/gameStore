const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    code:String,
    description:String,
    date:{type:Date,default:Date.now},
    dbStatus:Boolean,
}),

const Product = mongoose.model("Product",productSchema);

module.exports = Product;