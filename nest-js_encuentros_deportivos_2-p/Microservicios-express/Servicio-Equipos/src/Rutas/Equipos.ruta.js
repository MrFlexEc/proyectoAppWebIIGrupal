import {Router} from 'express'
import {
    getEquipobyid,
    getEquipos,
    deleteEquipos,
    createEquipos,
    updateEquipos
    } from '../Controladores/Equipos.controller.js'

const router = Router();

//consultar Equipos
router.get('/Equipos', getEquipos)
//consultar un solo Equipo
router.get('/Equipos/:id',getEquipobyid)
//crear Equipos
router.post('/Equipos',createEquipos)
//actualizar Equipos
router.put('/Equipos/:id', updateEquipos)
//eliminar Equipos
router.delete('/Equipos/:id',deleteEquipos)
export default router