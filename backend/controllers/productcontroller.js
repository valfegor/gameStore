const Product = require("../models/product");


const registerProduct = async (req,res) =>{
    if(!req.body.name || !req.body.price || !req.body.code || !req.body.description) return res.status(200).send("Sorry you have to check all the camps");

    const existingCode = await Product.findOne({code:req.body.code});

    const existingName = await Product.findOne({name:req.body.name});
    //si existe el codigo

    if(existingCode)return res.status(400).send("Sorry you have already one code stablished");

    if(existingName)return res.status(400).send("Sorry already one product with these name");


    const product = new Product({
        name:req.body.name,
        price:req.body.price,
        code:req.body.code,
        description:req.body.description,
        dbStatus:true,    
    })


    let result = product.save();

    if(!result) return res.status(400).send("Cant Save please try again");

    return res.status(200).send({product});




}


const listProduct = async (req,res) =>{
    const product = await Product.find();

    if(!product || product == 0) return res.status(400).send("No products");

    return res.status(200).send({product});
}


module.exports = {listProduct,registerProduct}