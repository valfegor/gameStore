//importamos nuestro modelo
const User = require("../models/user");

//tambien requerimos de nuestro modelo de rol.

const Role = require("../models/role");

//libreria para encriptar.

const bcrypt = require("bcrypt");


//inicializamos nuestra logica con funciones asyncronas.


const registerUser = async (req,res) =>{
    if(!req.body.name || !req.body.email || !req.body.password) return res.status(400).send("Please checkout you have some parts with out fill");

    const existingUser = User.find({email:req.body.email});

    if(existingUser)return res.status(400).send("Sorry cant save because you have already one created");

    //utilizamos nuestro hash para la contraseña,

    let hash = await bcrypt.hash(req.body.password,10);

    //buscamos si tiene o no un rol asignado.

    let existingRole = Role.find({name:"vendor"});

    //si no encuentra el rol asignado
    if(!existingRole) return res.status(400).send("No rol asignated please create the rol first");

    //si todo lo anterior no se cumple procedemos a guardar nuestro json.

    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:hash,
        roleId:role._id,
        dbstatus:true,
    })

    const result = user.save();

    if(!result) return res.status(400).send("Sorry try again");

    //si todo funciona nos volveremos a conectar ala base para generar el jwt.

    try {
        let jwt = user.generateJwt();
        return res.status(200).send({jwt});
    } catch (e) {
        return res.status(400).send("please try again")
    }
}


const listUser = async (req,res) =>{
//ahora para listar usuarios por nombre o parametro.
let user = await User.find({name: new RegExp(req.params["name"],"i")}).populate("roleId").exec();
if(!user || user.length === 0) return res.status(401).send("No hay usuarios");

    return res.status(200).send({user});
}


//exportamos los moduloes.

module.exports = {registerUser,listUser}