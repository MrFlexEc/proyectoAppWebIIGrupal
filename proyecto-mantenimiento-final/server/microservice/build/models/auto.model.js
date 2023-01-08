"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const AutoSchema = new Schema({
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
});
exports.Auto = mongoose_1.default.model('Auto', AutoSchema);
