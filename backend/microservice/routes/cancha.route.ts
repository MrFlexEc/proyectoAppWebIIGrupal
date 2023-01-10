import { Router } from "express";
import { createCancha, 
        getAllCanchas, 
        getCancha, 
        updateCancha, 
        deleteCancha } from "../controllers/cancha.controller";
    
export const api = Router();

api.post('/crear', createCancha);
api.get('/datos', getAllCanchas);
api.get('/ver/:id', getCancha);
api.put('/canchaUpdate/:id', updateCancha);
api.delete('/deleteCancha/:id', deleteCancha);