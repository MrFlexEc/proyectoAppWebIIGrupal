//importamos mongoose para usarlo
const mongoose = require ('mongoose');

//Se crea la tabla 
const PartidoSchema = mongoose.Schema({
    id_partido:{
        type: Number,
        required: true
    },
    id_torneo:{
        type:Number,
        required: true
    },
    Fecha_partido:{
        type:Date,
        required: true
    },

    id_equipo_1:{
        type:Number,
        required: true
    },
    id_equipo_2:{
        type:Number,
        required: true
    },
    goles_equipo_1:{
        type:Number,
        required: true
    },
    goles_equipo_2:{
        type:Number,
        required: true
    },
    observacion_partido:{
        type: String,
        required: true
    }
})

module.exports=mongoose.model('Partido',PartidoSchema);
