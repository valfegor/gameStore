const Sale = require("../models/stock");

const Product = require("../models/product");

const User = require("../models/user");


const registerSale = async (req,res) =>{
    
    if(!req.body.name_product || !req.body.price) return res.status(400).send("Sorry Check the camps please");

    const product = await Product.findOne({name:req.body.name_product});

    if(!product) return res.status(400).send("The item dont exist please check again");

    const user = await User.findOne({});

}