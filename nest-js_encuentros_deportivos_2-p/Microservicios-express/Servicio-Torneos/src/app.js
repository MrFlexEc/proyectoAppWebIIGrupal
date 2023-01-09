//este archivo tendra la configuracion de express
const express = require("express")
const TorneosRutas= require ('./Rutas/Torneos.ruta')


// ejecutar express
const app = express()

//middlewares
//desde aplicacion cliente se envia un dato al servidor en formato json, lo convierte a js
app.use(express.json())

//app que utilice lo que va a requerir desde la carpeta de rutas a usar
app.use(TorneosRutas);


//exportar 
module.exports = app;

