import mongoose, {Mongoose} from "mongoose";
//import {IReceta} from "../interfaces/mantenimiento"
import { IPacientes } from "../interfaces/paciente.interface";
const {Schema, model} = mongoose;

const PacienteSchema : mongoose.Schema = new Schema<IPacientes>({
    nombre: {
        type: String,
        required: [true, 'Se necesita saber el nombre del Paciente']
    },
    identificacion: {
        type: String,
        required: [true, 'Se necesita saber su numero de identifacion']
    },
    edad: {
        type: String,
        required: [true, 'Se requiere su edad']

    },
    altura: {
        type: String,
        required: [true, 'Es necesario saber la alura']
    }
})

export const Paciente = mongoose.model<IPacientes>('Pacientes', PacienteSchema);