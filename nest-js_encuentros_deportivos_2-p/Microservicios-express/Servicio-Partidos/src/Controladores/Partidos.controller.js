//para guardar los datos en los modelos hay que traer el modelo 
const PartidoSchema = require ('../Modelos/Partidos')



//Función para mostrar todos los partidos
  const GetPartidos = (req,res) =>{
    PartidoSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({
        message: error
    }))
}

//Función para mostrar un partido por ID
const GetPartidosbyId = (req,res) =>{
    const {id}=req.params;
    PartidoSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({
        message: error
    }))
}

//Función para actualizar un partido por ID
const updatePartido = (req,res) =>{
    const {id}=req.params;
    const {id_torneo, Fecha_partido,id_equipo_1,id_equipo_2,
        goles_equipo_1,goles_equipo_2,observacion_partido
        } = req.body
    PartidoSchema
    .updateOne({id_partido:id },{ $set: {id_torneo, Fecha_partido,id_equipo_1,id_equipo_2,
        goles_equipo_1,goles_equipo_2,observacion_partido}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({
        message: error
    }))
}

//Función para crear Partidos
const createPartidos = (req,res) =>{
    const Partido = PartidoSchema(req.body);
    Partido 
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({
        message: error
    }))
}

//Función para Eliminar un partido por ID
const DeletePartido = (req,res) =>{
    const {id}=req.params;
    PartidoSchema
    .remove({id_partido:id })
    .then((data)=>res.json(data))
    .catch((error)=>res.json({
        message: error
    }))
}




//exportar funciones
module.exports = { 
    GetPartidos,
    GetPartidosbyId,
    DeletePartido,
    updatePartido,
    createPartidos
}








