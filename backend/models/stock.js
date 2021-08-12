const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    name:String,
    quantity:Number,
    location:String,
    date:{type:Date , default:Date.now},
    id_product:{ type: mongoose.Schema.ObjectId, ref: "product"},
    bdstatus:Boolean,
});


const stock = mongoose.model("stock",stockSchema);

module.exports = stock;