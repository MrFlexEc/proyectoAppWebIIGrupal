import { Router } from "express";
import { createPaciente, 
        getAllPacientes, 
        getPaciente, 
        updatePaciente, 
        deletePaciente } from "../controllers/paciente.controller";
//importaciones de rutas a usar 
export const api = Router();
//rutas de los metodos  
api.post('/crear', createPaciente);
api.get('/datos', getAllPacientes);
api.get('/ver/:id', getPaciente);
api.put('/pacienteUpdate/:id', updatePaciente);
api.delete('/deletePaciente/:id', deletePaciente);