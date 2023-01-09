const express = require("express")
//instanciar para utilizar Router
const router = express.Router()
const {
    GetPartidos,
    GetPartidosbyId,
    DeletePartido,
    updatePartido,
    createPartidos,
    } = require ('../Controladores/Partidos.controller')

//consultar Partidos
router.get('/Partidos', GetPartidos)
//consultar un solo partido
router.get('/Partidos/:id',GetPartidosbyId)
//Crear un partido
router.post('/Partidos',createPartidos)
//Actualizar un partido
router.put('/Partidos/:id', updatePartido)
//Eliminar un partido
router.delete('/Partidos/:id',DeletePartido)

module.exports = router;