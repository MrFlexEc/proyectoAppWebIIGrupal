import mongoose, {Mongoose} from "mongoose";
//import {IReceta} from "../interfaces/mantenimiento"
import { ICanchas } from "../interfaces/cancha.interface";
const {Schema, model} = mongoose;

const CanchaSchema : mongoose.Schema = new Schema<ICanchas>({
    descripcion: {
        type: String,
        required: [true, 'Se necesita saber la descripción de la cancha']
    }
})

export const Cancha = mongoose.model<ICanchas>('Canchas', CanchaSchema);