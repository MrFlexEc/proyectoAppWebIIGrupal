//importamos mongoose para usarlo
const mongoose = require ('mongoose');

//Se crea la tabla 
const Equiposchema = mongoose.Schema({
    Id_equipo:{
        type: Number,
        required: true
    },

    Nombre_equipo:{
        type: String,
        required: true
    },

    Descripcion_equipo:{
        type: String,
        required: true
    },

    Serie_equipo:{
        type: String,
        required: true
    }
})

module.exports=mongoose.model('Equipo',Equiposchema);
