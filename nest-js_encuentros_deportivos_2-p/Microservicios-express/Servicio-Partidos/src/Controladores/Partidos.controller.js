//para guardar los datos en los modelos hay que traer el modelo 
import {Partidos} from '../Modelos/Partidos.js'



//funcion para consultar Partidos 
export const getPartidos = async (req,res)=>{
    
    //trycash por si ocurriera un error
    try {
        //Para consultar con metodo findall de devuelve un arreglo
        const partidos = await Partidos.findAll();
        res.json(partidos)
    } catch (error) {
       return res.status(500).json({
        message: error.message
       }) 
    }
    
}

//funcion para mostrar un solo partido
export const getPartidobyid = async (req, res)=>{
    try {
        const {id} = req.params
        const partidobyid = await Partidos.findOne({
        where:{
            id
        }
        })
        //si no hay un partido
        if(!partidobyid) return res.status(404).json({
            message: 'El partido no existe'
        })

        res.json(partidobyid)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}



//función para crear Partidos
export const createPartidos = async (req,res)=>{
    //traer los datos del body que envian
    const {id_torneo, Fecha_partido,id_equipo_1,id_equipo_2,
        goles_equipo_1,goles_equipo_2,observacion_partido
        } = req.body
   try {
       const newPartido = await Partidos.create({
        id_torneo:id_torneo,
        Fecha_partido:Fecha_partido,
        id_equipo_1:id_equipo_1,
        id_equipo_2:id_equipo_2,
        goles_equipo_1:goles_equipo_1,
        goles_equipo_2:goles_equipo_2,
        observacion_partido:observacion_partido
       })
       res.json(newPartido)
   } catch (error) {
       return res.status(500).json({
           message: error.message
       })
   }
}

//FUNCION PARA ACTUALIZAR Partidos
export const updatePartidos = async (req, res)=>{
    try {
        //extraer el id de los parametros
        const {id} = req.params;
        //extraer desde el request body
        const {id_torneo, Fecha_partido,id_equipo_1,id_equipo_2,
            goles_equipo_1,goles_equipo_2,observacion_partido}=req.body
        //usar funcion findpk para buscar por el primary key
        const partido = await Partidos.findByPk(id)
        partido.id_torneo=id_torneo,
        partido.Fecha_partido=Fecha_partido,
        partido.id_equipo_1=id_equipo_1,
        partido.id_equipo_2=id_equipo_2,
        partido.goles_equipo_1=goles_equipo_1,
        partido.goles_equipo_2=goles_equipo_2,
        partido.observacion_partido=observacion_partido

        //para guardar en la base de datos
        await partido.save()
        res.json({
            message:'Partido Actualizado', partido
    })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}



//FUNCION PARA ELIMINAR Partidos
export const deletePartidos = async (req, res)=>{
    //Eliminar con el destroy 
    try {
        const {id}= req.params;
        await Partidos.destroy({
            where: {
                id: id,
            },
            truncate: true
        });
        res.status(200).json({
            message: 'Partido eliminado'
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

