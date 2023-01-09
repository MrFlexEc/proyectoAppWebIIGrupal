import {Router} from 'express'
import {
    getTorneobyid,
    getTorneos,
    deleteTorneos,
    createTorneos,
    updateTorneos
    } from '../Controladores/Torneos.controller.js'

const router = Router();

//consultar Torneos
router.get('/Torneos', getTorneos)
//consultar un solo Torneo
router.get('/Torneos/:id',getTorneobyid)
//crear Torneos
router.post('/Torneos',createTorneos)
//actualizar Torneos
router.put('/Torneos/:id', updateTorneos)
//eliminar Torneos
router.delete('/Torneos/:id',deleteTorneos)
export default router