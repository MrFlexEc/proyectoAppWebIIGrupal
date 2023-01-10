"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncuentroDeportivo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const EncuentroDeportivoSchema = new Schema({
    Equipo1: {
        type: String,
        required: [true, 'Se necesita saber el nombre del Equipo 1']
    },
    Equipo2: {
        type: String,
        required: [true, 'Se necesita saber el nombre  del Equipo 2']
    },
    Fecha: {
        type: String,
        required: [true, 'Se requiere la fecha del partido']
    },
    Hora: {
        type: String,
        required: [true, 'Es necesario saber la hora del partido']
    }
});
exports.EncuentroDeportivo = mongoose_1.default.model('Encuentro Deportivo', EncuentroDeportivoSchema);
