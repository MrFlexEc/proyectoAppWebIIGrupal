//para guardar los datos en los modelos hay que traer el modelo 
import {Torneos} from '../Modelos/Torneos.js'



//funcion para consultar Torneos 
export const getTorneos = async (req,res)=>{
    
    //trycash por si ocurriera un error
    try {
        //Para consultar con metodo findall de devuelve un arreglo
        const torneos = await Torneos.findAll();
        res.json(torneos)
    } catch (error) {
       return res.status(500).json({
        message: error.message
       }) 
    }
    
}

//funcion para mostrar un solo Torneo
export const getTorneobyid = async (req, res)=>{
    try {
        const {id} = req.params
        const torneobyid = await Torneos.findOne({
        where:{
            id
        }
        })
        //si no hay un torneo
        if(!torneobyid) return res.status(404).json({
            message: 'El torneo no existe'
        })

        res.json(torneobyid)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}



//función para crear Torneos
export const createTorneos = async (req,res)=>{
    //traer los datos del body que envian
    const {descripcion_torneo
        } = req.body
   try {
       const newTorneo = await Torneos.create({
        descripcion_torneo:descripcion_torneo

       })
       res.json(newTorneo)
   } catch (error) {
       return res.status(500).json({
           message: error.message
       })
   }
}

//FUNCION PARA ACTUALIZAR Torneos
export const updateTorneos = async (req, res)=>{
    try {
        //extraer el id de los parametros
        const {id} = req.params;
        //extraer desde el request body
        const {descripcion_torneo}=req.body
        //usar funcion findpk para buscar por el primary key
        const torneo = await Torneos.findByPk(id)
        torneo.descripcion_torneo=descripcion_torneo

        //para guardar en la base de datos
        await torneo.save()
        res.json({
            message:'torneo Actualizado', torneo
    })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}



//FUNCION PARA ELIMINAR Torneos
export const deleteTorneos = async (req, res)=>{
    //Eliminar con el destroy 
    try {
        const {id}= req.params;
        await Torneos.destroy({
            where: {
                id: id,
            },
            truncate: true
        });
        res.status(200).json({
            message: 'Torneo eliminado'
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

