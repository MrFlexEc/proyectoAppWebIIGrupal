import mongoose, {Mongoose} from "mongoose";
//import {IReceta} from "../interfaces/mantenimiento"
import { IEncuentrosDeportivos } from "../interfaces/encuentrodeportivo.interface;
const {Schema, model} = mongoose;

const EncuentroDeportivochema : mongoose.Schema = new Schema<IEncuentrosDeportivo>({
    Equipo1: {type: String,required: [true, 'Se necesita saber el nombre del Equipo 1']},
    Equipo2: {type: String,required: [true, 'Se necesita saber el nombre del Equipo 2']},
    Fecha: {type: String,required: [true, 'Se requiere la fecha del partido']},
    Hora: {type: String,required: [true, 'Es necesario saber la hora final del partido']}
})

export const EncuentroDeportivo = mongoose.model<EncuentrosDeportivos>('EncuentroDeportivo', EncuentroDeportivoSchema);