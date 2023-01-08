import mongoose, {Mongoose} from "mongoose";
//import {IReceta} from "../interfaces/mantenimiento"
import { IAutos } from "../interfaces/auto.interface";
const {Schema, model} = mongoose;

const AutoSchema : mongoose.Schema = new Schema<IAutos>({
    descripcion: {
        type: String,
        required: [true, 'Se necesita saber si el auto es nuevo, usado o seminuevo']
    },
    placa: {
        type: String,
        required: [true, 'Es necesario saber la placa de identificacion del coche']
    },
    color: {
        type: String,
    },
    fabricante: {
        type: String,
        required: [true, 'Es necesario saber el fabricante']
    },
    tipo: {
        type: String,
        required: [true, 'Es necesario saber si el auto es electrico o por combustion']
    },
    anio: {
        type: Number,
    },
    clasificacion: {
        type: String
    }
})

export const Auto = mongoose.model<IAutos>('Auto', AutoSchema);