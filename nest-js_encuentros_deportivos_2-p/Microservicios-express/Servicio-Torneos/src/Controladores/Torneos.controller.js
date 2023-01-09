//para guardar los datos en los modelos hay que traer el modelo 
const Torneoschema = require ('../Modelos/Torneos')



//Función para mostrar todos los Torneos
 const GetTorneos = (req,res) =>{
    Torneoschema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({
        message: error
    }))
}

//Función para mostrar un torneo por ID
const GetTorneosbyId = (req,res) =>{
    const {Id_torneo}=req.params;
    Torneoschema
    .findById(Id_torneo)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({
        message: error
    }))
}

//Función para actualizar un torneo por ID
const updateTorneo = (req,res) =>{
    const {id}=req.params;
    const {Id_torneo, Descripcion_torneo
        } = req.body
    Torneoschema
    .updateOne({Id_torneo:id },{ $set: {Descripcion_torneo}})
    .then((data)=>res.json(
        {
            message: "Torneo Actualizado",
            data
        }))
    .catch((error)=>res.json({
        message: error
    }))
}

//Función para crear Torneos
const createTorneos = (req,res) =>{
    const Torneo = Torneoschema(req.body);
    Torneo 
    .save()
    .then((data)=>res.json(
        {
            message:"Torneo creado",
            data
        }))
    .catch((error)=>res.json({
        message: error
    }))
}

//Función para Eliminar un torneo por ID
const DeleteTorneo = (req,res) =>{
    const {id}=req.params;
    Torneoschema
    .remove({Id_torneo:id })
    .then((data)=>res.json(
        {
            message:"Torneo eliminado",
            data
        }))
    .catch((error)=>res.json({
        message: error
    }))
}




//exportar funciones
module.exports = { 
    GetTorneos,
    GetTorneosbyId,
    DeleteTorneo,
    updateTorneo,
    createTorneos
}








