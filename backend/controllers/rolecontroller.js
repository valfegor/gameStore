//logica

//importamos nuestra libreria del modelo.

const Role = require('../models/role');

//funciones asyncronas


const registerRole = async (req,res) =>{
    //aqui inicia la logica lo que vamos a recibir mediante el JSON.

    if(!req.body.name || !req.body.description) return res.status(400).send("Sorry cant create need some camps and its in blank");

    //si existe el rol

    const existingRole = Role.findOne({name:req.body.name});

    if(existingRole) return res.status(400).send("Sorry you have already one rol created");


    const role = new Role ({
        name:req.body.name,
        description:req.body.description,
    });

}