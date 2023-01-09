const express = require("express")
//instanciar para utilizar Router
const router = express.Router()
const {
   GetTorneos,
   GetTorneosbyId,
   DeleteTorneo,
   updateTorneo,
   createTorneos
    } = require ('../Controladores/Torneos.controller')



//consultar Torneos
router.get('/Torneos', GetTorneos)
//consultar un solo torneo
router.get('/Torneos/:id',GetTorneosbyId)
//Crear un torneo
router.post('/Torneos',createTorneos)
//Actualizar un torneo
router.put('/Torneos/:id', updateTorneo)
//Eliminar un torneo
router.delete('/Torneos/:id',DeleteTorneo)
    
module.exports = router;