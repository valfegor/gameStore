const Sale = require("../models/sale");

const Product = require("../models/product");

const User = require("../models/user");

const Stock = require("../models/stock");

const registerSale = async (req,res) =>{
    
    if(!req.body.name_product || !req.body.price || !req.body.name_seller || !req.body.quantity || !req.body.location) return res.status(400).send("Sorry Check the camps please");

    const product = await Product.findOne({name:req.body.name_product});

    if(!product) return res.status(400).send("The item dont exist please check again");

    const user = await User.findOne({name:req.body.name_seller});

    if(!user) return res.status(400).send("Sorry the vendor not exist");

    

    const precio_exacto = (product.price * parseInt(req.body.quantity) );

    
    


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

    if(!result) return res.status(400).send("cant save try again")

    return res.status(200).send({sale});

}


const listSale = async (req,res) =>{
    let sale = await Sale.find({name_product: new RegExp(req.params["name_product"],"i")}).populate("id_product").exec();
    if(!sale || sale.length === 0) return res.status(401).send("No users created yet");

    return res.status(200).send({sale});
}

module.exports={registerSale,listSale}


