//libreria express.

const express = require('express');

const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

//importamos nuestra coneccion a la bd.

const {dbConnection} = require('./db/db');

//dotenv

require('dotenv').config();


//conexion con nuestro archivo env.

app.listen(process.env.PORT,()=>console.log("Backend Server Running  Ok On Port",process.env.PORT))


//llamamos a nuestra funcion
dbConnection();