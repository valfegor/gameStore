const mongoose = require('mongoose');


const salesSchema = new mongoose.Schema({
    name_product:String,
    name_seller:String,
    id_product:{ type: mongoose.Schema.ObjectId, ref: "product"},
    id_user:{ type: mongoose.Schema.ObjectId, ref: "user"},
    price:Number,
    date:{type:Date , default:Date.now},
    bdstatus:Boolean,
});

const sale = mongoose.model("sale",salesSchema);

module.exports = sale;