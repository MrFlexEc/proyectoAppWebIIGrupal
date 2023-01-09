import {Router} from 'express'
import {
    getPartidobyid,
    getPartidos,
    deletePartidos,
    createPartidos,
    updatePartidos
    } from '../Controladores/Partidos.controller.js'

const router = Router();

//consultar Partidos
router.get('/Partidos', getPartidos)
//consultar un solo partido
router.get('/Partidos/:id',getPartidobyid)
//crear Partidos
router.post('/Partidos',createPartidos)
//actualizar Partidos
router.put('/Partidos/:id', updatePartidos)
//eliminar Partidos
router.delete('/Partidos/:id',deletePartidos)
export default router