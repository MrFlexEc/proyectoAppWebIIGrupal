"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const pacienteSchema = new Schema({
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
    
});
exports.Paciente = mongoose_1.default.model('Pacientes', pacienteSchema);
