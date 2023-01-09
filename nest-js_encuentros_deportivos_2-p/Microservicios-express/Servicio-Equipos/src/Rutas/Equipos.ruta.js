const express = require("express")
//instanciar para utilizar Router
const router = express.Router()
const {
   GetEquipos,
   GetEquiposbyId,
   DeleteEquipo,
   updateEquipo,
   createEquipos
    } = require ('../Controladores/Equipos.controller')



//consultar Partidos
router.get('/Equipos', GetEquipos)
//consultar un solo partido
router.get('/Equipos/:id',GetEquiposbyId)
//Crear un partido
router.post('/Equipos',createEquipos)
//Actualizar un partido
router.put('/Equipos/:id', updateEquipo)
//Eliminar un partido
router.delete('/Equipos/:id',DeleteEquipo)

module.exports = router;