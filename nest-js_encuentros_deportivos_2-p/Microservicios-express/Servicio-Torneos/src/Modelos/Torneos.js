//datatypes tipos de datos que soporta sequelize
import {DataTypes} from 'sequelize'

//llamar a database. js para traer a la instancia sequelize
import {sequelize} from '../database/database.js'

//Con el sequelize se define la tabla
export const Torneos = sequelize.define('Torneos',{
    Id_torneo:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion_torneo:{
        type: DataTypes.STRING
    },
},{
//añadir otro objeto para quitar las tablas que no se quieren
timestamps:false}
)