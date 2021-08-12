//importamos nuestro modelo
const User = require("../models/user");

//tambien requerimos de nuestro modelo de rol.

const Role = require("../models/role");

//libreria para encriptar.

const bcrypt = require("bcrypt");


//inicializamos nuestra logica con funciones asyncronas.


const registerUser = async (req,res) =>{
    if(!req.body.name || !req.body.email || !req.body.password) return res.status(400).send("Please checkout you have some parts with out fill");

    const existUser = await User.findOne({email:req.body.email});

    //si existe el usuario es decir si lo anterior es true , terminamos la ejecucion del programa indicando que ya existe el correo electronico.
    if(existUser)return res.status(400).send("You have already one email");

    //utilizamos nuestro hash para la contraseña,

    let hash = await bcrypt.hash(req.body.password,10);

    //buscamos si tiene o no un rol asignado.

    let existingRole = await Role.find({name:"vendor"});

    //si no encuentra el rol asignado
    if(!existingRole) return res.status(400).send("No rol asignated please create the rol first");

    //traemos nuestro rol

    let role = await Role.findOne({name:"vendor"});
    if(!role) return res.status(400).send("This person dont have any role");


    //si todo lo anterior no se cumple procedemos a guardar nuestro json.

    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:hash,
        roleId:role._id,
        dbstatus:true,
    })

    const result = user.save();

    //si no se guarda se ejecuta esta sentencia
    if(!result)return res.status(400).send("sorry try again");

    //pero si si guarda realizamos un trycatch ya que realizamos nuevamente una coneccion a la base de datos.

    try {
        let jwt = user.generateJWT();
        return res.status(200).send({jwt});
    } catch (e) {
        return res.status(400).send("sorry cant save",e);
    }
    
}


const listUser = async (req,res) =>{
//ahora para listar usuarios por nombre o parametro.
let user = await User.find({name: new RegExp(req.params["name"],"i")}).populate("roleId").exec();
if(!user || user.length === 0) return res.status(401).send("No users created yet");

    return res.status(200).send({user});
}


//exportamos los moduloes.

module.exports = {registerUser,listUser}