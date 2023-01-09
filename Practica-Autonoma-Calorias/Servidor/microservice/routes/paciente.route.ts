import { Router } from "express";
import { createPaciente, 
        getAllPacientes, 
        getPaciente, 
        updatePaciente, 
        deletePaciente } from "../controllers/paciente.controller";
    
export const api = Router();

api.post('/crear', createPaciente);
api.get('/datos', getAllPacientes);
api.get('/ver/:id', getPaciente);
api.put('/pacienteUpdate/:id', updatePaciente);
api.delete('/deletePaciente/:id', deletePaciente);