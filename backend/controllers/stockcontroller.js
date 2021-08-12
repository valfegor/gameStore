const Stock = require("../models/stock");

const Product = require("../models/product");

const Sale = require("../models/sale");

const mongoose = require('mongoose');
//funciones flechas

const registerStock = async (req,res) =>{

    if(!req.body.quantity || !req.body.location || !req.body.name) return res.status(400).send("Please check all the camps");


    const product = await Product.findOne({name:req.body.name});

    if(!product) return res.status(400).send("no product registred with that name please checkout the name");

    

    

    const stock = new Stock({
        quantity:req.body.quantity,
        location:req.body.location,
        id_product:product._id
    })

    let result = stock.save();

    if(!result) return res.status(400).send("cant save try again");

    return res.status(200).send({stock})

}

const listStock = async (req,res) =>{
let stock= await Stock.find({location: new RegExp(req.params["location"],"i")}).populate("id_product").exec();

if(!stock || stock.length === 0) return res.status(401).send("No stock");

    return res.status(200).send({stock});
}

module.exports = {registerStock,listStock}