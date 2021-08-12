//utilizamos mongoose.

const mongoose = require('mongoose');


//coneccion a nuestra base de datos.

const dbConnection = async () => {
    try {
        //espere a que moongoose se conecte.

        await mongoose.connect(process.env.BD_CONNECTION,{
            useNewUrlParser:true,
            useFindAndModify:false,
            useCreateIndex:true,
            useUnifiedTopology:true
        });

        console.log("The connection with mongo its succesfully");

    } catch (e) {
            console.log("Cant stablish the connection with mongo",e);

            throw new Error("Master cant connect with your database");
    }
}

//asi se exportan las funciones
module.exports = {dbConnection}