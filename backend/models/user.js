//modelo del usuario.

const mongoose = require('mongoose');

const jwt = requiere("jsonwebtoken");

const moment = require("moment");

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    roleId:{ type: mongoose.Schema.ObjectId, ref: "role" },
    date:{type:Date,default:Date.now},
    dbStatus:Boolean,
});

//seguridad.

userSchema.methods.generateJWT = function(){
    return jwt.sing({
        _id:this._id,
        name:this.name,
        iat:moment().unix(),
    },process.env.SECRET_KEY_JWT
    );
};

const user = mongoose.model("user",userSchema);

module.exports = user;