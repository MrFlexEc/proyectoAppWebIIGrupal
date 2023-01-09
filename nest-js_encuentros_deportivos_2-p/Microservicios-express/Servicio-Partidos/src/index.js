//Este archivo sera el encargado de arrancar la aplicación
import app from './app.js'
//importar la base de datos de la conexion
import {sequelize} from './database/database.js'



import './Modelos/Partidos.js'


//crear funcion principal
async function main(){
    try {   
        //Metodo sync para sincronizacion con base de datos para crear o elimianar tablas
        await sequelize.sync({force:false});
        app.listen(5000);
        console.log("Servidor levantado http://localhost:5000");
    } catch (error) {
        console.log("conexión no posible", error);
    }

}
main();