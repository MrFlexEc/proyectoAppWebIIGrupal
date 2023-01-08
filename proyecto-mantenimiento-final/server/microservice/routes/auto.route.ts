import { Router } from "express";
import { createAuto, 
        getAllAutos, 
        getAuto, 
        updateAuto, 
        deleteAuto } from "../controllers/auto.controller";
    
export const api = Router();

api.post('/registrar', createAuto);
api.get('/lista', getAllAutos);
api.get('/ver/:id', getAuto);
api.put('/autoUpdate/:id', updateAuto);
api.delete('/deleteAuto/:id', deleteAuto);