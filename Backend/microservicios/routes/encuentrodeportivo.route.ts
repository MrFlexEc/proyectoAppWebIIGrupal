import { Router } from "express";
import { createEncuentroDeportivo, 
        getAllEncuentrosDeportivos, 
        getEncuentroDeportivo, 
        updateEncuentroDeportivo, 
        deleteEncuentroDeportivo } from "../controllers/encuentrodeportivo.controller";
    
export const api = Router();

api.post('/crear', createEncuentroDeportivo);
api.get('/datos', getAllEncuentrosDeportivos);
api.get('/ver/:id', getEncuentroDeportivo);
api.put('/encuentrodeportivoUpdate/:id', updateEncuentroDeportivo);
api.delete('/deleteEncuentroDeportivo/:id', deleteEncuentroDeportivo);