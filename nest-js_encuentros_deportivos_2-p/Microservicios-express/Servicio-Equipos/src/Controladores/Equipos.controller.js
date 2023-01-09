//para guardar los datos en los modelos hay que traer el modelo 
const Equiposchema = require ('../Modelos/Equipos')



//Función para mostrar todos los equipos
 const GetEquipos = (req,res) =>{
    Equiposchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({
        message: error
    }))
}

//Función para mostrar un equipo por ID
const GetEquiposbyId = (req,res) =>{
    const {Id_equipo}=req.params;
    Equiposchema
    .findById(Id_equipo)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({
        message: error
    }))
}

//Función para actualizar un equipo por ID
const updateEquipo = (req,res) =>{
    const {id}=req.params;
    const {Id_equipo, Nombre_equipo,Descripcion_equipo,Serie_equipo
        } = req.body
    Equiposchema
    .updateOne({Id_equipo:id },{ $set: {Nombre_equipo, Descripcion_equipo,Serie_equipo}})
    .then((data)=>res.json(
        {
        message: "Equipo Actualizado",
        data
    }))
    .catch((error)=>res.json({
        message: error
    }))
}

//Función para crear Equipos
const createEquipos = (req,res) =>{
    const Equipo = Equiposchema(req.body);
    Equipo 
    .save()
    .then((data)=>res.json(
    {
        message:"Equipo creado",
        data
    }))
    .catch((error)=>res.json({
        message: error
    }))
}

//Función para Eliminar un equipo por ID
const DeleteEquipo = (req,res) =>{
    const {id}=req.params;
    Equiposchema
    .remove({Id_equipo:id })
    .then((data)=>res.json(
    {
        message:"Equipo eliminado",
        data
    }))
    .catch((error)=>res.json({
        message: error
    }))
}




//exportar funciones
module.exports = { 
    GetEquipos,
    GetEquiposbyId,
    DeleteEquipo,
    updateEquipo,
    createEquipos
}








