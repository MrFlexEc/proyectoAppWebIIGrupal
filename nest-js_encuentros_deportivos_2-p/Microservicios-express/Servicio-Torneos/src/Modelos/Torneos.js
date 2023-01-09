//importamos mongoose para usarlo
const mongoose = require ('mongoose');

//Se crea la tabla 
const Torneoschema = mongoose.Schema({
    Id_torneo:{
        type: Number,
        required: true
    },

    Descripcion_torneo:{
        type: String,
        required: true
    }
})

module.exports=mongoose.model('Torneo',Torneoschema);
