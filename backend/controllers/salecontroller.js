const Sale = require("../models/sale");

const Product = require("../models/product");

const User = require("../models/user");


const Stock = require("../models/stock");

const mongoose = require("mongoose");

const registerSale = async (req,res) =>{
    
    if(!req.body.name_product || !req.body.price || !req.body.name_seller || !req.body.quantity || !req.body.location) return res.status(400).send("Sorry Check the camps please");

    const product = await Product.findOne({name:req.body.name_product});

    if(!product) return res.status(400).send("The item dont exist please check again");

    const user = await User.findOne({name:req.body.name_seller});

    if(!user) return res.status(400).send("Sorry the vendor not exist");

    const stock = await Stock.findOne({location:req.body.location});
    
    console.log(stock.quantity);

    const stock_real = (stock.quantity - parseInt(req.body.quantity));

    console.log(stock_real);

    const precio_exacto = (product.price * parseInt(req.body.quantity) );

    if(stock_real<=0) return res.status(400).send("Sorry you have to add more stock you are in 0");
    stock.quantity = stock_real;
    




    const sale = new Sale({ 
        quantity:req.body.quantity,
        location:req.body.location,
        name_product:req.body.name_product,
        name_seller:req.body.name_seller,
        id_product:product._id,
        id_user:user._id,
        price:precio_exacto,
    })


    let result = sale.save();
    stock.save();

    if(!result) return res.status(400).send("cant save try again")

    return res.status(200).send({sale});

}


const listSale = async (req,res) =>{
    let sale = await Sale.find({name_product: new RegExp(req.params["name_product"],"i")}).populate("id_product").exec();
    if(!sale || sale.length === 0) return res.status(401).send("No users created yet");

    return res.status(200).send({sale});
}

module.exports={registerSale,listSale}


