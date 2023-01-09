//para guardar los datos en los modelos hay que traer el modelo 
import {Equipos} from '../Modelos/Equipos.js'



//funcion para consultar Equipos 
export const getEquipos = async (req,res)=>{
    
    //trycash por si ocurriera un error
    try {
        //Para consultar con metodo findall de devuelve un arreglo
        const equipos = await Equipos.findAll();
        res.json(equipos)
    } catch (error) {
       return res.status(500).json({
        message: error.message
       }) 
    }
    
}

//funcion para mostrar un solo Equipo
export const getEquipobyid = async (req, res)=>{
    try {
        const {id} = req.params
        const equipobyid = await Equipos.findOne({
        where:{
            id
        }
        })
        //si no hay un equipo
        if(!equipobyid) return res.status(404).json({
            message: 'El equipo no existe'
        })

        res.json(equipobyid)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}



//función para crear Equipos
export const createEquipos = async (req,res)=>{
    //traer los datos del body que envian
    const {Id_equipo,Descripcion_equipo,Serie_equipo
        } = req.body
   try {
       const newEquipo = await Equipos.create({
        Id_equipo:Id_equipo,
        Descripcion_equipo:Descripcion_equipo,
        Serie_equipo:Serie_equipo

       })
       res.json(newEquipo)
   } catch (error) {
       return res.status(500).json({
           message: error.message
       })
   }
}

//FUNCION PARA ACTUALIZAR Equipos
export const updateEquipos = async (req, res)=>{
    try {
        //extraer el id de los parametros
        const {id} = req.params;
        //extraer desde el request body
        const {Id_equipo:Id_equipo,
            Descripcion_equipo:Descripcion_equipo,
            Serie_equipo:Serie_equipo,}=req.body
        //usar funcion findpk para buscar por el primary key
        const equipo = await Equipos.findByPk(id)
        equipo.Id_equipo=Id_equipo,
        equipo.Descripcion_equipo=Descripcion_equipo,
        equipo.Serie_equipo=Serie_equipo,

        //para guardar en la base de datos
        await equipo.save()
        res.json({
            message:'equipo Actualizado', equipo
    })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}



//FUNCION PARA ELIMINAR Equipos
export const deleteEquipos = async (req, res)=>{
    //Eliminar con el destroy 
    try {
        const {id}= req.params;
        await Equipos.destroy({
            where: {
                id: id,
            },
            truncate: true
        });
        res.status(200).json({
            message: 'Equipo eliminado'
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

