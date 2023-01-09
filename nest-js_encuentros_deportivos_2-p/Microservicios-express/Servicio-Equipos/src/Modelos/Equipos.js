//datatypes tipos de datos que soporta sequelize
import {DataTypes} from 'sequelize'

//llamar a database. js para traer a la instancia sequelize
import {sequelize} from '../database/database.js'

//Con el sequelize se define la tabla
export const Equipos = sequelize.define('Equipos',{
    Id_equipo:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Descripcion_equipo:{
        type: DataTypes.STRING
    },
    Serie_equipo:{
        type:DataTypes.CHAR
    },
},{
//añadir otro objeto para quitar las tablas que no se quieren
timestamps:false}
)