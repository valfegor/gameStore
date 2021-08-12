//libreria express.

const express = require('express');

const cors = require('cors');

const Role = require("./routes/roleroutes");

const User = require("./routes/userrouters");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/role",Role);
app.use("/api/user",User);

//importamos nuestra coneccion a la bd.

const {dbConnection} = require('./db/db');

//dotenv

require('dotenv').config();


//conexion con nuestro archivo env.

app.listen(process.env.PORT,()=>console.log("Backend Server Running  Ok On Port",process.env.PORT))


//llamamos a nuestra funcion
dbConnection();