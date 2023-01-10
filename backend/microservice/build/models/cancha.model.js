"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cancha = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const CanchaSchema = new Schema({
    descripcion: {
        type: String,
        required: [true, 'Se necesita saber la descripción de la Cancha']
    }
});
exports.Cancha = mongoose_1.default.model('Canchas', CanchaSchema);
