//este archivo tendra la configuracion de express
import express from "express";
import PartidosRutas from './Rutas/Torneos.ruta.js'


//ejecutar express
const app = express()

//middlewares
//Desde aplicacion cliente se envia un dato al servidor en formato json, lo convierte a js
app.use(express.json())


//app que utilice lo que va a requerir desde la carpeta de rutas a usar
app.use(PartidosRutas);

//exportar 
export default app;