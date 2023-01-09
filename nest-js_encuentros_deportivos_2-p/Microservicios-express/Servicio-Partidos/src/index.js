//este archivo sera el encargado de arrancar la aplicación
const app =require ('./app')
//importar la base de datos de la conexion
const mongoose = require ("mongoose");
require('dotenv').config();

//crear funcion principal
async function main(){

    try {
        //const ConexionURL = "mongodb+srv://Paco2:Xavier1802@cluster0.k0nozkw.mongodb.net/PruebaDocker"
        const PUERTO =  process.env.APP_PORT || 4000;
        await mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGODB_URLL, {useNewUrlParser: true, useUnifiedTopology: true} )
        app.listen(PUERTO);
        console.log(`Servidor levantado http://localhost:${PUERTO}`);
    } catch (error) {
        console.log("conexion no posible", error);
    }

}
main();