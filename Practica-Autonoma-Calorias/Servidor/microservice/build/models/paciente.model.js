"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
//definiendo protitpo para exportar modulo que sera usado en todo el microservice
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
//instancias de librerias 
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
//creacion del modelo de la entidad Paciente y sus atributos 
const PacienteSchema = new Schema({
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
exports.Paciente = mongoose_1.default.model('Pacientes', PacienteSchema);
//creacion del modelo dentro de mongo.