//datatypes tipos de datos que soporta sequelize
import {DataTypes} from 'sequelize'

//llamar a database. js para traer a la instancia sequelize
import {sequelize} from '../database/database.js'

//Con el sequelize se define la tabla
export const Partidos = sequelize.define('Partidos',{
    id_partido:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    id_torneo:{
        type:DataTypes.INTEGER,
    },
    Fecha_partido:{
        type:DataTypes.DATE
    },

    id_equipo_1:{
        type:DataTypes.INTEGER,
    },
    id_equipo_2:{
        type:DataTypes.INTEGER,
    },
    goles_equipo_1:{
        type:DataTypes.INTEGER,
    },
    goles_equipo_2:{
        type:DataTypes.INTEGER,
    },
    observacion_partido:{
        type: DataTypes.STRING
    }
},{
//añadir otro objeto para quitar las tablas que no se quieren
timestamps:false}
)