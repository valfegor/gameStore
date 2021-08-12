const Product = require("../models/product");


const registerProduct = async (req,res) =>{
    if(!req.body.name || !req.body.price || !req.body.code || !req.body.description) return res.status(200).send("Sorry you have to check all the camps");

    const existingCode = Product.findOne({code:req.body.code});

    const existingName = Product.findOne({name:req.body.name});
    //si existe el codigo

    if(existingCode)return res.status(400).send("Sorry you have already one code stablished");

    if(existingName)return res.status(400).send("Sorry already one product with these name");



}